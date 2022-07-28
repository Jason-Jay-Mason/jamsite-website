import { getBoundedRandom } from '../utils/game-utils.js'
import { Sprite } from './sprite'

//a helper function to generate a random explosion when the dino dies
function generateExplosionArray() {
	let final = []
	for (let i = 0; i < 70; i++) {
		let rotation = Math.random() * Math.PI
		let color = Math.random() < 0.8 ? 'rgba(252, 206, 94,' : 'rgba(255, 255, 255,'
		let speed =
			color === 'rgba(252, 206, 94,' ? getBoundedRandom(0.08, 0.6) : getBoundedRandom(0.2, 2)
		let width = color === 'rgba(252, 206, 94,' ? getBoundedRandom(0.5, 1.5) : getBoundedRandom(3, 5)
		let height = color === 'rgba(252, 206, 94,' ? getBoundedRandom(5, 10) : getBoundedRandom(5, 20)
		let yVelocityMultiplyer = color === 'rgba(252, 206, 94,' ? 0 : getBoundedRandom(-0.5, 0.5)

		final.push({
			rotation,
			color,
			speed,
			width,
			height,
			yVelocityMultiplyer
		})
	}

	return final
}

export class Dinosaur extends Sprite {
	constructor({ imgEl, rotation, position, velocity, rotationVelocity, width, height, game }) {
		//sprite props
		super({
			spriteIndex: {
				x: 0,
				y: 0
			},
			crop: {
				x: 100,
				y: 100
			},
			currentSprite: {
				x: 0,
				y: 0
			},
			updateFrame: 0
		})
		//dino props for render
		this.imgEl = imgEl
		this.rotation = rotation
		this.rotationVelocity = rotationVelocity
		this.position = position
		this.velocity = velocity
		this.width = width
		this.height = height

		this.borderPadding = 40 //some padding for collision with the edge of the canvas
		this.destroyedFrame = null // keep track of the frame that this dino is destroyed so that we can delete it after the destroy animation
		this.explosionVelocity = 2 // how fast the explosion is
		this.explosionParticles = generateExplosionArray() //the unique explosion particles for this dino
		this.playerDistance // this distance to the player is updated in the dino-game class
		this.collision = false //keep track of collisions with the player over renders
		this.game = game //the game object for width and height of the canvas
	}

	//handle the animation of the dinos arms and legs
	handleAnimate(frame) {
		if (this.updateFrame + 700 < frame) {
			this.updateFrame = frame
			this.currentSprite.x = this.spriteIndex.x * this.crop.x //get the next frame in the sprite
			//get the index for the next frame on the sprite
			if (this.spriteIndex.x >= 1) {
				this.spriteIndex.x = 0
			} else {
				this.currentSprite.x = this.spriteIndex.x * this.crop.x
				this.spriteIndex.x += 1
			}
		}
	}
	//handle the boarders of the canvas
	handleBorders() {
		if (
			(this.position.y < this.borderPadding && Math.sign(this.velocity.y) === -1) ||
			(this.position.y > this.game.height - this.borderPadding && Math.sign(this.velocity.y) === 1)
		) {
			this.velocity.y = this.velocity.y * -1
		}

		if (
			(this.position.x > innerWidth - this.borderPadding && Math.sign(this.velocity.x) === 1) ||
			(this.position.x < this.borderPadding && Math.sign(this.velocity.x) === -1)
		) {
			this.velocity.x = this.velocity.x * -1
		}
	}

	//update the dinos position and check for boundary collisions
	updateDinoPosition() {
		this.handleBorders()
		this.position.x = this.position.x + this.velocity.x
		this.position.y = this.position.y + this.velocity.y
		this.rotation += this.rotationVelocity
	}

	//update the destroy animation if this dino has been killed
	destroyAnimation(ctx, frame) {
		//check to see if this is the first time the function has run on this dino and if so, set the update frame to 0
		if (this.destroyedFrame === frame) {
			this.updateFrame = 0
		}
		ctx.resetTransform() //reset the transform on the context obj
		ctx.translate(this.position.x, this.position.y) //translate the ctx to the dino's position

		//loop through the explosion particles and display them on screen
		for (let i = 0; i < this.explosionParticles.length; i++) {
			ctx.rotate(this.explosionParticles[i].rotation)

			let opacity = 200 / Math.pow(this.updateFrame, 2.6) //get an opacity value for fading the particles out
			ctx.fillStyle = `${this.explosionParticles[i].color}${opacity.toFixed(2)})` // set the particle fill color passed on the opacity

			//create the rectangle on screen the +32 is for padding
			ctx.fillRect(
				(this.updateFrame * this.explosionVelocity) / this.explosionParticles[i].speed + 32,
				this.updateFrame * this.explosionVelocity * this.explosionParticles[i].yVelocityMultiplyer,
				this.explosionParticles[i].height,
				this.explosionParticles[i].width
			)
		}

		//keep track of what frame we are on since the dino was destroyed
		this.updateFrame += 1
		ctx.resetTransform()
	}

	//render function for the dino if it has not been destroyed
	render(ctx) {
		ctx.resetTransform() //reset the context
		ctx.translate(this.position.x, this.position.y) //translate the context to the current position of this dino
		ctx.shadowBlur = 17 // set the glow radius
		ctx.shadowColor = 'rgba(255, 255, 255, 0.46)' // add the glow to the ship
		ctx.rotate(this.rotation) //rotate the context to this dinos rotation
		ctx.drawImage(
			this.imgEl,
			this.currentSprite.x,
			this.currentSprite.y,
			this.crop.x,
			this.crop.y,
			-this.width / 2,
			-this.height / 2,
			this.width,
			this.height
		) //draw the dino to the canvas
		ctx.shadowBlur = 0
		ctx.resetTransform() //reset the transform for next render
	}

	update(ctx, frame) {
		//check to see if the dino has been shot by a laser
		if (!this.destroyedFrame) {
			//if not, handle the normal animations
			this.handleAnimate(frame)
			this.updateDinoPosition()
			this.render(ctx)
		} else {
			//if the dino has been shot, play the destroy animation
			this.destroyAnimation(ctx, frame)
			this.updateDinoPosition()
		}
	}
}
