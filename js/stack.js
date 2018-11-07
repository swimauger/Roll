class Stack {
  constructor(){
    this.npcs = [];
    this.projectiles = [];
  }
  checkCollisions(){
    let collisions = setInterval(() => {
      for(let i=0;i < this.npcs.length;i++){
        for(let j=0;j < this.projectiles.length;j++){
          if(this.npcs[i].posLeft+this.npcs[i].size > this.projectiles[j].posLeft && this.npcs[i].posLeft < this.projectiles[j].posLeft && this.npcs[i].posBottom+this.npcs[i].size > this.projectiles[j].posBottom){
            this.npcs[i].size -= this.projectiles[j].power;
            this.npcs[i].render();
            if(game.player.size < 500){
              game.player.size += 5;
            }
            game.player.render();
            this.projectiles[j].delete();
            // if(this.npcs[i].size <= 0){
            //   this.npcs[i].delete();
            // }
          }
        }
      }
    }, 50);
  }
  alertObjects(){
    alert("Players: " + this.players);
    alert("Npcs: " + this.npcs);
    alert("Projectiles: " + this.projectiles);
  }
}

window.stack = new Stack();
window.stack.checkCollisions();
