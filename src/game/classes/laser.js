export class Laser {
	constructor({ imgEl, position, rotation }) {
		this.imgEl = imgEl
		this.speed = 10
		this.position = position
		this.rotation = rotation
		this.velocity = {
			x: Math.cos(this.rotation - Math.PI / 2) * 11,
			y: Math.sin(this.rotation - Math.PI / 2) * 11
		}
		this.destroyedFrame = null
	}
	//render this laser
	render(ctx) {
		ctx.translate(this.position.x, this.position.y)
		ctx.rotate(this.rotation)
		ctx.shadowBlur = 20 // set the glow radius
		ctx.shadowColor = '#FCCD5E'
		ctx.drawImage(this.imgEl, 0, 0, 11, 16)
		ctx.shadowBlur = 0
		ctx.resetTransform()
	}
	//update the position of the laser and render
	update(ctx) {
		this.position.y += this.velocity.y
		this.position.x += this.velocity.x
		this.render(ctx)
	}
}
