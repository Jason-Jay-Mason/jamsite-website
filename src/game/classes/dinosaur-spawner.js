import { Dinosaur } from '../classes/dinosaur';
import { getBoundedRandom } from '../utils/game-utils.js';

export class DinosaurSpawner {
	constructor({ amount, images, game }) {
		this.amount = amount;
		this.images = images;
		this.positions;
		this.dinosaurs = {};
		this.dinoKeys = [];
		this.spawnPlace = 1;
		this.lastSpawnTime = null;
		this.game = game;
	}
	//get a random spawn point for the dino
	getSpawnPoint() {
		const imageIndex = Math.round(getBoundedRandom(0, this.images.length - 1)); //get a random image from the available dino images
		const spawnPadding = 40; //add some padding so that the dino spawns off screen
		let spawnPosition;
		let spawnVelocity;
		// Do a round robin spawn pattern cycling through the top, left and right of the screen
		switch (this.spawnPlace) {
			case 1:
				spawnPosition = {
					x: getBoundedRandom(0.2, 0.8) * this.game.width,
					y: 0 - spawnPadding
				};
				spawnVelocity = {
					x: getBoundedRandom(-0.1, 0.1),
					y: getBoundedRandom(0.3, 0.8)
				};
				break;
			case 2:
				spawnPosition = {
					x: 0 - spawnPadding,
					y: getBoundedRandom(0.2, 0.8) * this.game.height
				};
				spawnVelocity = {
					x: getBoundedRandom(0.3, 0.8),
					y: getBoundedRandom(-0.1, 0.1)
				};
				break;
			case 3:
				spawnPosition = {
					x: this.game.width + spawnPadding,
					y: getBoundedRandom(0.2, 0.8) * this.game.height
				};
				spawnVelocity = {
					x: getBoundedRandom(-0.3, -0.8),
					y: getBoundedRandom(-0.1, 0.1)
				};
				break;
		}

		// set the next spawn position
		this.spawnPlace === 3 ? (this.spawnPlace = 1) : this.spawnPlace++;
		return { spawnPosition, spawnVelocity, imageIndex };
	}
	buildDinosaurs(frame) {
		//get the keys of the dinosaurs obj for looping
		this.dinoKeys = Object.keys(this.dinosaurs) || [];

		//only create new dinosaurs if there are not enough and enough time has passed since the last one spawned
		if ((this.dinoKeys.length < this.amount && this.lastSpawnTime + 1000 < frame) || this.dinoKeys.length === 0) {
			//use this helper function to get a random spawn point and velocity
			const { spawnPosition, spawnVelocity, imageIndex } = this.getSpawnPoint();
			//create a new dino
			const dinosaur = new Dinosaur({
				imgEl: this.images[imageIndex].image,
				rotation: 0.2,
				position: {
					x: spawnPosition.x,
					y: spawnPosition.y
				},
				velocity: {
					x: spawnVelocity.x,
					y: spawnVelocity.y
				},
				rotationVelocity: getBoundedRandom(-0.02, 0.02),
				width: this.images[imageIndex].width,
				height: this.images[imageIndex].height,
				game: this.game
			});

			this.lastSpawnTime = frame;
			//add the dino to the dinosaurs object
			this.dinosaurs[frame] = dinosaur;
		}
	}
	//loop through the dinos and update current dinos and delete dinos that have died and their death animation is finished
	updateDinos(ctx, frame) {
		this.dinoKeys.forEach((dinoKey) => {
			this.dinosaurs[dinoKey].update(ctx, frame);
			if (this.dinosaurs[dinoKey].destroyedFrame !== null && this.dinosaurs[dinoKey].destroyedFrame + 500 < frame) {
				delete this.dinosaurs[dinoKey];
			}
		});
	}

	update(ctx, frame, game) {
		this.game = game;
		this.buildDinosaurs(frame); // create new dinos
		this.updateDinos(ctx, frame); //update the dinos
	}
}
