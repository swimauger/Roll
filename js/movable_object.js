class MovableObject {
  constructor(options){
    this.name = options.name || "Player";
    this.color = options.color || "maroon";
    this.size = options.size || 50;
    this.speed = options.speed || 20;
    this.power = options.power || 10;
    this.posLeft = options.posLeft || 0;
    this.posBottom = options.posBottom || 0;
    this.view = game.view;
  }
}
