import { Scene } from 'Phaser';
import Food from './food';
import Snake from './snake';

export default class SnakeScene extends Scene {

  initialize() {
    
  }

  preload() {
    this.load.image('food', 'assets/media/images/food.png');
    this.load.image('body', 'assets/media/images/body.png');
  }

  create() {
    this.food = new Food(this, 3, 4);
    this.snake = new Snake(this, 8, 8);
    //  Create our keyboard controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    
  }
}
