import { Controls } from './controls.js'
import { Laser } from './laser'
import { Ai } from './ai'

export class Player {
	constructor({ imgEl, laserImg, width, height, position, rotation, thrust, isAi, game }) {
		this.imgEl = imgEl //the image of the ship
		this.laserImg = laserImg // the image of the laser

		//properties of the ship
		this.width = width
		this.height = height
		this.position = position
		this.rotation = rotation
		this.rotationVelocity = 0.07
		this.thrust = thrust
		this.boundaryPadding = 10
		this.velocity = {
			x: 0,
			y: 0
		}

		this.controls = new Controls(isAi) //set up the controls and event listeners if the player is not an ai
		this.lasers = {} // set up an object to hold the lasers
		this.thrusterLength = 0 //a prop that is used to track the thruster length between frames
		this.game = game //the game object passed down for adjusting the height props mainly

		//if the player is an ai then create instantiate the ai class and create a dino radar to pass to the ai
		if (isAi) {
			this.dinoRadar = {}
			this.ai = new Ai(this)
		}
	}

	// Accelerate the ship
	activatePrimaryThrusters() {
		//this is a quantity that get smaller as the ships net velocity gets larger. This ensures that approach 0 acceleration as the ship goes faster
		let beta = Math.pow(0.7, Math.abs(this.velocity.y + this.velocity.x))
		/* accelerate the ship in the proper direction, the reason why we have the rotation - pi/2 
    fis because we are not using the convention where radians are = 0 when the ship is pointed in the y=0
     direction this is because I don't like that convention and a radians=0
      is more intuitive at x=0 for this application */
		this.velocity.x = this.velocity.x + beta * (Math.cos(this.rotation - Math.PI / 2) * this.thrust)
		this.velocity.y = this.velocity.y + beta * (Math.sin(this.rotation - Math.PI / 2) * this.thrust)
	}

	// Rotate the ship
	activateRotationThrusters(direction) {
		if (direction == 'right') {
			this.rotation = (this.rotation % (2 * Math.PI)) + 0.07 //add 0.07 radians to the rotation with modulo 2pi so that values do not become greater than 2pi radians
		} else if (direction == 'left') {
			//add this conditional to make the rotation not drop below 0 radians, this makes for easier login in the ai
			if (this.rotation <= 0) {
				this.rotation = this.rotation + 2 * Math.PI
			}
			this.rotation = this.rotation - 0.07 //subtract 0.07 radians from the rotation
		}
	}
	//Fire laser
	fireLaser(frame) {
		let laserKeys = Object.keys(this.lasers)

		let lastLaserFrame = parseInt(laserKeys[laserKeys.length - 1]) || -10 //get the frame that the last laser was fired so that we don't fire too often

		// fire the laser if 170 frames have passed since the last shot
		if (lastLaserFrame + 170 < frame) {
			const rotation = this.rotation

			//set the position that the laser appears relative to this player
			const position = {
				x: this.position.x - Math.cos(rotation - 0.2 + Math.PI / 2) * 18,
				y: this.position.y - Math.sin(rotation - 0.2 + Math.PI / 2) * 18
			}

			//create a new laser and append it to the lasers obj
			const laser = new Laser({
				imgEl: this.laserImg,
				rotation: rotation,
				position: position
			})
			this.lasers[frame] = laser
		}
	}

	//update the lasers
	updateLaserPositions(ctx) {
		//get the keys of the lasers object
		let laserKeys = Object.keys(this.lasers)

		//if there are current lasers, then update their position and delete them if they are off screen
		let outOfBounds = 100
		laserKeys &&
			laserKeys.forEach((laser) => {
				let laserValue = this.lasers[laser]
				if (
					laserValue.position.y < -outOfBounds ||
					laserValue.position.y > this.game.height + outOfBounds ||
					laserValue.position.x < -outOfBounds ||
					laserValue.position.x > innerWidth + outOfBounds
				) {
					delete this.lasers[laser]
					return
				}
				if (this.lasers[laser]) {
					this.lasers[laser].update(ctx)
				}
			})
	}

	// conditionals that check for wall collisions
	handleCanvasBoundaries() {
		if (
			(this.position.y <= this.boundaryPadding && Math.sign(this.velocity.y) === -1) ||
			(this.position.y >= this.game.height - this.boundaryPadding &&
				Math.sign(this.velocity.y) === 1)
		) {
			this.velocity.y = (this.velocity.y / 2) * -1
		}

		if (
			(this.position.x <= this.boundaryPadding && Math.sign(this.velocity.x) === -1) ||
			(this.position.x >= innerWidth - this.boundaryPadding && Math.sign(this.velocity.x) === 1)
		) {
			this.velocity.x = (this.velocity.x / 2) * -1
		}
	}

	//update the ships position by its velocity every frame and also check for boundaries
	updateShipPosition() {
		this.handleCanvasBoundaries()
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}

	//control the ship
	controlShip(frame) {
		if (this.controls.left) {
			this.activateRotationThrusters('left')
		}
		if (this.controls.right) {
			this.activateRotationThrusters('right')
		}
		if (this.controls.thrust) {
			this.activatePrimaryThrusters()
		}
		if (this.controls.fire) {
			this.fireLaser(frame)
		}
	}
	// a function to pass useful props to the decision tree in the ai class
	radarDetector(dinosaurs) {
		const dinoValues = Object.values(dinosaurs)

		//#region ships props

		// get the ships position on a standard cartesian coordinate plane
		let xPosition = (this.position.x - innerWidth / 2) / (innerWidth / 2)
		let yPosition = -(this.position.y - this.game.height / 2) / (this.game.height / 2)

		// get the ships distance to the center
		let xToCenter =
			Math.abs(this.position.x - innerWidth / 2) - innerWidth / 2 + this.boundaryPadding
		let yToCenter =
			Math.abs(this.position.y - this.game.height / 2) - this.game.height / 2 + this.boundaryPadding

		//get the direction the ship is moving in in radians such that radian is an element of {R: n>0<2PI}
		let direction = Math.atan(this.velocity.x / -this.velocity.y)
		if (this.velocity.x > 0 && this.velocity.y < 0) {
			direction = direction
		}
		if (this.velocity.y > 0) {
			direction = direction + Math.PI
		}
		if (this.velocity.x < 0 && this.velocity.y < 0) {
			direction = direction + 2 * Math.PI
		}
		//#endregion ship props

		//#region get the target dino props

		//get the closest dino
		if (dinoValues.length) {
			let dino = dinoValues.reduce((closestDino, dino) => {
				if (dino.playerDistance < closestDino.playerDistance) {
					return dino
				}
				return closestDino
			})

			//get the distance to the dino relative to ship position on the cartesian plane where the ships position = (0,0)
			let dinoy = dino.position.x - this.position.x
			let dinox = this.position.y - dino.position.y
			const dinoDistance = Math.hypot(
				this.position.x - dino.position.x,
				this.position.y - dino.position.y
			)

			//get the position in radians that the dino is relative to the ship
			let rotation = Math.atan(dinox / dinoy)
			//since arch tan returns a radian as a element of {R: r >-pi/2<pi/2} it is more useful to let the radian be an element of {R: r>0<2PI}
			if (dinoy > 0) {
				rotation = -rotation + Math.PI / 2
			}
			if (dinoy < 0) {
				rotation = (3 / 2) * Math.PI - rotation
			}
			//now get the radians that the ship needs to turn in order to be targeting the dino
			let radiansToTarget = rotation - this.rotation
			//make sure the radian is an element {R: r>0<2PI} for ease of use in the ai class
			if (radiansToTarget < 0) {
				radiansToTarget = 2 * Math.PI + radiansToTarget
			}

			//Make the distance a percentage of the game height and width
			let normalizedDinoDistance = dinoDistance / Math.hypot(innerWidth, this.game.height)
			//#endregion

			//add all of the props to the dino radar for consumption of the decision tree in the ai class

			this.dinoRadar = {
				xPosition: xPosition,
				yPosition: yPosition,
				xToCenter: xToCenter,
				yToCenter: yToCenter,
				direction: direction,
				oppositeDirection: (direction + Math.PI) % (2 * Math.PI),
				xTargetPosition: dino.position.x - innerWidth / 2,
				yTargetPosition: dino.position.y - this.game.height / 2,
				targetDistance: normalizedDinoDistance,
				targetRadians: radiansToTarget,
				netVelocity: Math.abs(this.velocity.x) + Math.abs(this.velocity.y)
			}
		}
	}

	//render the ship to the canvas
	render(ctx) {
		ctx.translate(this.position.x, this.position.y) //translate the context to the current position of the ship
		ctx.shadowBlur = 10 // set the glow radius
		ctx.shadowColor = 'rgba(0, 0, 0, 1)' // add the glow to the ship
		ctx.rotate(this.rotation) //rotate the context to the current rotation
		ctx.drawImage(this.imgEl, -this.width / 2, -this.height / 2, this.width, this.height) //draw the ship to the canvas

		//handle drawing the truster
		if (!this.controls.thrust && this.thrusterLength !== 0) {
			this.thrusterLength = 0 //remove the thruster image if the ship is no longer thrusting
		}
		if (this.controls.thrust) {
			ctx.shadowColor = 'rgba(242, 93, 84, 0.8)' // add the glow to the ship
			ctx.shadowBlur = 7 // set the glow radius
			if (this.thrusterLength >= 1) {
				if (!(this.thrusterLength >= 3)) {
					this.thrusterLength += 0.2
				}
			} else {
				this.thrusterLength += 1 //if the ship is currently thrusting add 1 to the length every frame
			}

			let colorStop = 1 - 1 / this.thrusterLength //fade the thrust out at its tail
			ctx.translate(-this.width / 5.2, this.height / 1.8) //translate the canvas to draw the thrust

			//create the gradient for the thrust
			let grd = ctx.createLinearGradient(
				this.width / 2 / 2,
				0,
				this.width / 2 / 2,
				this.height / 2.5
			)
			grd.addColorStop(0, `rgba(206, 77, 69, ${colorStop})`)
			grd.addColorStop(colorStop.toFixed(2), 'rgba(206, 77, 69, 0)')
			ctx.fillStyle = grd

			ctx.fillRect(0, 0, this.width / 2, this.height / 2.5) //draw the thrust on the ship
		}

		ctx.resetTransform() //reset the transform to default for next frame
	}

	//simple update function that dictates in what order the ship is updated on every frame
	update(frame, dinosaurs) {
		//if there is an ai, get the sensor props to pass to the decision tree and feed the ai
		if (this.ai) {
			this.radarDetector(dinosaurs)
			this.ai.feed()
		}

		this.controlShip(frame) //set the props for the ship according the the controls for this frame before updating the ships position

		this.updateShipPosition() // update the position of the ship
		this.updateLaserPositions(this.game.ctx) // update the laser positions

		this.render(this.game.ctx) // render the ship to the canvas
	}
}
