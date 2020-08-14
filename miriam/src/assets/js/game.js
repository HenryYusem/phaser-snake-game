
import { Game } from 'phaser';
import SnakeScene from './scene';

const gameConfig = {
  type: Phaser.WEBGL,
  width: 640,
  height: 480,
  backgroundColor: '#FF6EC7',
  scene: [new SnakeScene()]
};

new Game(gameConfig);

