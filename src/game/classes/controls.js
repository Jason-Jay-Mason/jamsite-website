//This class sets up the controles and attaches them to event listeners for key presses. If the player is an ai, it does not set up the event listeners.
export class Controls {
	constructor(isAi) {
		this.right = 0;
		this.left = 0;
		this.thrust = 0;
		this.fire = 0;
		if (!isAi) {
			this.#addListeners();
		}
	}
	#addListeners() {
		window.onkeydown = (e) => {
			switch (e.key) {
				case 'j':
					this.left = 1;
					break;
				case 'l':
					this.right = 1;
					break;
				case 'k':
					this.thrust = 1;
					break;
				case 'a':
					this.fire = 1;
					break;
			}
		};
		window.onkeyup = (e) => {
			switch (e.key) {
				case 'j':
					this.left = 0;
					break;
				case 'l':
					this.right = 0;
					break;
				case 'k':
					this.thrust = 0;
					break;
				case 'a':
					this.fire = 0;
					break;
			}
		};
	}
}
