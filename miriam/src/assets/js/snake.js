import { Geom, Math, Actions } from 'phaser';

export default class Snake {

  constructor (scene, x, y) {
    this.headPosition = new Geom.Point(x, y);
    this.body = scene.add.group();
    this.head = this.body.create(x * 16, y * 16, 'body');
    this.direction = 'right';
    
    
  }
    moveDown(x,y){
      this.direction = "down";
}

    moveUp(x,y) {
        this.direction = "up";
}

    moveLeft(x,y){
        this.direction = "left";
}

    moveRight(x,y){
        this.direction = "right";
}

update() {
    if(this.direction = 'up') {
        this.headPosition.y = y-16
    }
    else if (this.direction = 'down') {
        this.headPosition.y = y + 16
    }
    else if (this.direction = 'left') {
        this.headPosition.x = x - 16
    }
    else if (this.direction = 'right') {
        this.headPosition.x = x + 16
    }

}  

}
