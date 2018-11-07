class Game {
  constructor(){
    this.view = new View();
    this.view.eventListener('keypress', this.onKeyPress.bind(this));
    this.view.eventListener('keydown', this.onKeyDown.bind(this));
    this.view.eventListener('keyup', this.onKeyUp.bind(this));
    this.player;
    this.spawn;
    this.moveRight = false;
    this.moveLeft = false;
  }

  start(){
    const options = {
      "name": this.view.getValueById("player_name"),
      "color": this.view.getValueById("player_color"),
      "size": 50,
      "speed": 20,
      "power": 10
    }
    if(this.view.getValueById("player_specialty") === "size"){
      options.size *= 2;
    }
    if(this.view.getValueById("player_specialty") === "speed"){
      options.speed *= 2;
    }
    if(this.view.getValueById("player_specialty") === "power"){
      options.power *= 2;
    }
    this.view.hideClassElements("create_menu");
    this.view.showClassElements("game");
    this.player = new Ball(options);
    this.player.render();
    this.spawn = new Spawn(3000);
    this.spawn.spawn()
  }

  onKeyPress(event){
    if(event.key === 'w' && this.moveRight){
      if(!this.player.jumping){
        this.player.jumpRight();
      }
    }
    if(event.key === 'w' && this.moveLeft){
      if(!this.player.jumping){
        this.player.jumpLeft();
      }
    }
    if(event.key === 'w'){
      // As long as Ball is not jumping
      if(!this.player.jumping){
        // Jump up
        this.player.jumpUp();
      }
    }
    if(event.key === 'a'){
      // Move left
      if(this.player.posLeft > 0){
        this.player.moveLeft();
        this.moveLeft = true;
      }
    }
    if(event.key === 's'){
      // As long as ball is not jumping and is not at the bottom
      if(!this.player.jumping && this.player.posBottom != 0){
        // Ball can go down
        this.player.moveDown();
      }
    }
    if(event.key === 'd'){
      // Move right
      this.player.moveRight();
      this.moveRight = true;
    }
    if(event.key === 'z'){
      window.stack.alertObjects();
    }
    if(event.which === 32){
      // Space bar
      // Fire ball
      this.player.shoot();
    }
  }

  onKeyUp(event){
    if(event.key === 'd'){
      this.moveRight = false;
    }
    if(event.key === 'a'){
      this.moveLeft = false;
    }
  }

  onKeyDown(event){
    if(event.key === 'Escape'){
      // Go back to home menu
      document.location.href = "../index.html";
    }
  }
}

window.game = new Game();
