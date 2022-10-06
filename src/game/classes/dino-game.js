import { DinosaurSpawner } from './dinosaur-spawner.js';
import { Player } from './player.js';

export class DinoGame {
	constructor({ dinosaurCount, context, height, width, isAi }) {
		this.dinosaurCount = dinosaurCount;
		this.dinosaurSpawner = {};
		this.player;
		this.height = height;
		this.width = width;
		this.ctx = context;
		this.frame = 0;
		this.isAi = isAi;
		this.initialize();
	}

	initialize() {
		// create the image elements for all the objects in the game
		const playerImg = new Image();
		playerImg.src = '/j-ship-2.svg';

		const laserImg = new Image();
		laserImg.src = '/laser.svg';

		//load dino images
		const wordpress = new Image();
		wordpress.src = '/wrd-sprite.svg';
		const wix = new Image();
		wix.src = '/wx-sprite.svg';
		const squarespace = new Image();
		squarespace.src = '/sqr-sprite.svg';
		const adobe = new Image();
		adobe.src = '/ade-sprite.svg';
		const shopify = new Image();
		shopify.src = '/shp-sprite.svg';
		const analytics = new Image();
		analytics.src = '/glg-sprite.svg';

		//create an array of dino images to cycle through in the dino spawner
		const dinoImages = [
			{ image: squarespace, width: 100, height: 100 },
			{ image: wordpress, width: 100, height: 100 },
			{ image: wix, width: 90, height: 90 },
			{ image: shopify, width: 100, height: 100 },
			{ image: adobe, width: 100, height: 100 },
			{ image: analytics, width: 100, height: 100 },

		];

		//create a game object to reference game props in the dinos and player
		this.game = {
			width: this.width,
			height: this.height,
			frame: this.frame,
			ctx: this.ctx
		};

		//instantiate the dinosaur spawner class, the amount is the max amount of dinos that will be on screen
		const dinosaurSpawner = new DinosaurSpawner({
			amount: this.dinosaurCount ? this.dinosaurCount : 1,
			images: dinoImages,
			game: this.game
		});
		this.dinosaurSpawner = dinosaurSpawner;

		//instantiate the player class
		const player = new Player({
			imgEl: playerImg,
			laserImg: laserImg,
			width: 32,
			height: 28,
			position: {
				// this is the starting position
				x: innerWidth / 2,
				y: innerHeight / 2
			},
			rotation: 0, //starting rotation
			thrust: 0.09,
			isAi: this.isAi,
			game: this.game
		});
		this.player = player;
	}

	//handle the game mechanics and interactions between the dinos, player, and lasers
	handleCollisions(frame) {
		const player = this.player;
		const laserKeys = Object.keys(player.lasers); //get the laser keys for this player, lasers are created in an object with a key equal to the current frame
		const dinoKeys = Object.keys(this.dinosaurSpawner.dinosaurs); //get the keys of the dinosaurs

		// loop through the laser keys and see if they are colliding with any dinosaurs and update their properties accordingly
		dinoKeys.forEach((dinoKey) => {
			const dino = this.dinosaurSpawner.dinosaurs[dinoKey];
			const playerDistance = Math.hypot(player.position.x - dino.position.x, player.position.y - dino.position.y); //get the difference in distance to the dino from the player
			dino.playerDistance = playerDistance; //set the player distance on the dino

			// if the collision was set to true but the player is no longer in the collision radius, then set the collision to false
			// if (dino.collision == true && playerDistance > 60) {
			//   dino.collision = false;
			// }

			//check to see if the ship is colliding with the dino and updating
			if (playerDistance < 60 && dino.collision == false) {
				player.score -= 10;
				const playerVelocity = player.velocity;
				const dinoVelocity = dino.velocity;
				//some basic physics for colliding with dinos
				player.velocity.x = -0.5 * playerVelocity.x + 0.5 * dinoVelocity.x;
				player.velocity.y = -0.5 * playerVelocity.y + 0.5 * dinoVelocity.y;

				dino.velocity.x = -0.5 * dinoVelocity.x - 0.5 * playerVelocity.x;
				dino.velocity.y = -0.5 * dinoVelocity.y - 0.5 * playerVelocity.y;

				//can uncomment this if we want the dino to be destroyed when player run into
				// dino.collision = true;
				// dino.destroyedFrame = frame;
			}

			//loop through the lasers to detect collisions
			laserKeys.length &&
				laserKeys.forEach((laserKey) => {
					if (player.lasers[laserKey]) {
						const distance = Math.hypot(player.lasers[laserKey].position.x - dino.position.x, player.lasers[laserKey].position.y - dino.position.y); //get the distance from this laser to the dino
						//set the dino as destroyed if the distance to the center of the dino is less than 45
						if (distance < 45 && dino.destroyedFrame === null) {
							delete player.lasers[laserKey];
							dino.destroyedFrame = frame;
						}
					}
				});
		});
		player.update(frame, this.dinosaurSpawner.dinosaurs, {
			width: this.width,
			height: this.height,
			frame: this.frame,
			ctx: this.ctx
		}); //update the player
	}

	update(frame) {
		this.frame = frame;
		//We clear the last frame so that we can render the new frame
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.handleCollisions(frame);

		this.dinosaurSpawner.update(this.ctx, frame, {
			width: this.width,
			height: this.height,
			frame: this.frame,
			ctx: this.ctx
		});
	}
}
