import { Geom, Math, Actions } from 'phaser';

export default class Snake {

  constructor (scene, x, y) {
    this.headPosition = new Geom.Point(x, y);
    this.body = scene.add.group();
    this.head = this.body.create(x * 16, y * 16, 'body');
    this.direction = 'left';
  }

moveDown (x,y) {
    this.direction = 'down'
}

moveUp (x,y) {
    this.direction = 'up'
}

moveLeft (x,y) {
    this.direction = 'left'
}

moveRight (x,y) {
    this.direction = 'right'
}

update () {
if (this.direction === 'down'){
    this.head.y = this.head.y - 16
}
if (this.direction === 'up'){
    this.head.y = this.head.y + 16
}
if (this.direction === 'left'){
    this.head.x = this.head.x - 16
}
if (this.direction === 'right'){
    this.head.x = this.head.x + 16
}
}

}