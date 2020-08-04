
import Phaser from 'Phaser';
import scene from './scene';

const gameConfig = {
  type: Phaser.WEBGL,
  width: 640,
  height: 480,
  backgroundColor: '#bfcc00',
  parent: 'phaser-example',
  scene: [scene]
};

new Phaser.Game(gameConfig);
