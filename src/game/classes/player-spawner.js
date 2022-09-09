import { Player } from './player';

// This class is kind of a shell for now and not needed, however, it might be useful later when training a neural network instead of a decision tree for the ai
export class PlayerSpawner {
	constructor({ amount, playerImg, laserImg, isAi, game }) {
		this.amount = amount;
		this.playerImg = playerImg;
		this.laserImg = laserImg;
		this.players = {};
		this.playerKeys = [];
		this.playerValues = [];
		this.highestScore = 10;
		this.bestPlayer;
		this.isAi = isAi;
		this.game = game;
	}

	createPlayers(frame) {
		this.playerKeys = Object.keys(this.players);
		//only create new players if there are not enough
		if (this.playerKeys.length < this.amount) {
			//create a new player
			const player = new Player({
				imgEl: this.playerImg,
				laserImg: this.laserImg,
				width: 25,
				height: 22,
				position: {
					x: innerWidth / 2,
					y: innerHeight / 2
				},
				rotation: 0,
				thrust: 0.09,
				isAi: this.isAi,
				game: this.game
			});
			//add the player the players object
			this.players[frame] = player;
		}
	}

	update(frame) {
		if (this.playerKeys.length < this.amount) {
			this.createPlayers(frame);
		}
	}
}
