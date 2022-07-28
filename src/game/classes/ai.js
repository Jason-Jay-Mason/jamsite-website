// This ai class handles all of the decisions that the ship makes when ai = true. It is a simple, non-traditional, decision tree.

// this conditional is used a lot to see if the ship is about to hit a wall. I separated it out in its own function to conserve space
function getTurnDirection(a, b) {
  if ((a <= Math.PI && b <= Math.PI && a > b) || (b >= Math.PI && a >= Math.PI && a > b) || (b >= (3 / 2) * Math.PI && a <= Math.PI / 2) || (a <= (3 / 2) * Math.PI && a >= Math.PI && b <= Math.PI && b >= Math.PI / 2)) {
    return "left";
  } else {
    return "right";
  }
}

export class Ai {
  constructor(player) {
    this.player = player; // need the data about the player in order to perform proper updates to the controls
    this.currentAction = null; // I set a current action and reset the action when conditions in an action have been met
    this.actionState = null; // This is just a property that I can use to assign an object to remember state between renders
    this.wallBoundary = 0.6; // The boundary that the ship turns around at
  }
  //A helper function that resets the controls for me
  resetContoles() {
    this.player.controls.fire = 0;
    this.player.controls.thrust = 0;
    this.player.controls.left = 0;
    this.player.controls.right = 0;
  }
  //A helper function that clears the action state and the current state
  clearAction() {
    this.actionState = null;
    this.currentAction = null;
  }

  // The action that avoids walls
  avoidWall() {
    let p = this.player.dinoRadar; // This is to make it so that I don't have to type this.player.dinoRadar every time

    // If an action state object has not been made yet then we need to create it
    if (this.actionState === null) {
      this.actionState = {
        direction: p.direction, //set the init direction when encountering a wall
        turnDirection: null,
        turnComplete: false,
        thrustComplete: false,
      };
    }

    //check the wall boundary conditions every time this action runs
    let needsToTurn = this.checkWallBoundary();
    //check to see
    if (needsToTurn) {
      // If we have not set a turn direction yet, we do that here
      if (this.actionState.turnDirection === null) {
        this.actionState.turnDirection = getTurnDirection(this.player.rotation, p.oppositeDirection); // use the helper function to find out which way to turn
      }

      //initiate the turn if the ship is pointed in the wrong direction and if it is pointed in the right direction then set the turn complete prop to true
      if (this.player.rotation <= p.oppositeDirection - 0.2 || this.player.rotation >= p.oppositeDirection + 0.2) {
        this.player.controls[this.actionState.turnDirection] = 1;
      } else {
        this.player.controls[this.actionState.turnDirection] = 0;
        this.actionState.turnComplete = true;
      }

      //thrust away from wall when the turn is complete
      if (this.actionState.turnComplete) {
        this.player.controls.thrust = 1;
      }
    } else {
      //If a wall collision is no longer going to happen the clear this action and reset the controls
      this.clearAction();
      this.resetContoles();
    }
  }

  destroyDino() {
    let p = this.player.dinoRadar;
    let needsToTurn = this.checkWallBoundary();

    //aim at the target dino if it is not aiming at it yet and is not about to hit a wall
    if (p.targetDistance < 0.2 && !needsToTurn) {
      //radians to the target ship are >0<2pi for easier implementation than the standard convention

      if (p.targetRadians > Math.PI) {
        //If the radians to the target is greater than pi then we always want to turn left
        this.player.controls.left = 1;
        this.player.controls.right = 0;
      } else {
        this.player.controls.left = 0;
        this.player.controls.right = 1;
      }

      //If the radians to the target are within an acceptable range to shoot then shoot else stop firing
      if (p.targetRadians < 0.7 || p.targetRadians > 6.2) {
        this.player.controls.fire = 1;
      } else {
        this.player.controls.fire = 0;
      }
    } else {
      this.resetContoles();
      this.clearAction();
    }
  }

  huntDino() {
    let p = this.player.dinoRadar;
    // similar to the destroy dino action accept our constrains on when qualifies for aiming as the dino ar looser because we are not firing at the dino yet
    if (p.targetRadians > 0.2 && p.targetRadians < 6.1) {
      if (p.targetRadians > Math.PI) {
        this.player.controls.left = 1;
        this.player.controls.right = 0;
      } else {
        this.player.controls.left = 0;
        this.player.controls.right = 1;
      }
    } else {
      this.player.controls.right = 0;
      this.player.controls.left = 0;
      //If we are able to thrust toward the dino without gaining too much speed then do it
      if (p.netVelocity < 2.5 || (this.player.rotation < p.oppositeDirection + 1 && this.player.rotation > p.oppositeDirection - 1)) {
        this.player.controls.thrust = 1;
      } else {
        this.player.controls.thrust = 0;
      }
    }
  }

  //a helper function that allows me to check if the ship is on a trajectory to hit the boundary in various places
  checkWallBoundary() {
    let p = this.player.dinoRadar;
    if ((p.xPosition < -this.wallBoundary && this.player.velocity.x < 0) || (p.xPosition > this.wallBoundary && this.player.velocity.x > 0) || (p.yPosition < -this.wallBoundary && this.player.velocity.y > 0) || (p.yPosition > this.wallBoundary && this.player.velocity.y < 0)) {
      return true;
    } else false;
  }

  feed() {
    let p = this.player.dinoRadar;
    //if there is not a current action then run through the decision tree
    if (this.currentAction === null) {
      let needsToTurn = this.checkWallBoundary(); //first priority is not running into walls, so we check that
      if (needsToTurn) {
        this.currentAction = this.avoidWall; //If we are about to hit a wall then run the avoid wall action
      } else if (p.targetDistance < 0.2) {
        this.currentAction = this.destroyDino; // If a target is within range then shoot it
      } else if (p.targetDistance > 0.2) {
        this.huntDino(); // If the target is out of range then hunt it
      }
    } else {
      //If there is an action that is not done running then run its function again
      this.currentAction();
    }
  }
}
