import { Scene, Math } from 'phaser';
import Food from './food';
import Snake from './snake';

export default class SnakeScene extends Scene {

  /**
   * Use this function to load images which can be used in sprites
   */
  preload() {
    // loads images which can be used in sprites
    this.load.image('food', 'assets/media/images/food.png');
    this.load.image('body', 'assets/media/images/monster.jpg');
  }

  /**
   * Create game objects and stuff here
   */
  create() {
    this.food = new Food(this, 3, 4);
    this.snake = new Snake(this, 8, 8, 1);
    //  Create our keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  /**
   * This is where all the game logic goes. This is equivalent to the
   * autonomousPeriodic and teleopPeriodic functions in robot code
   */
  update(time, delta) {

    let STATE = "DOWN";

      if (STATE == "DOWN"){
          new Snake(this, this.snake.head.x, this.snake.head.y + 1, 1)
      }
    console.log('is down pressed:', this.cursors.down.isDown);
    console.log('is up pressed:', this.cursors.up.isDown);
    console.log('is left pressed:', this.cursors.left.isDown);
    console.log('is right pressed:', this.cursors.right.isDown);
  }

}
