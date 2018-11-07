class AI {
  constructor(npc){
    this.npc = npc;
    this.ai;
    this.roam;
    this.chase;
  }

  roam(){
    this.roam = setInterval(() => {
      let select = Math.floor(Math.random() * 2) + 1;
      if(select === 1){
        this.roamRight();
      }
      if(select === 2 && this.npc.posLeft != 0){
        this.roamLeft();
      }
    }, 5000);
  }

  chase(){
    this.chase = setInterval(() => {
      if(this.npc.posLeft < window.game.player.posLeft){
        this.npc.posLeft += this.npc.speed;
        this.npc.render();
      }
      if(this.npc.posLeft > window.game.player.posLeft){
        this.npc.posLeft -= this.npc.speed;
        this.npc.render();
      }
    }, 50);
  }

  roamLeft(){
    let leftBound = this.npc.posLeft - 100;
    let roamLeft = setInterval(() => {
      this.npc.posLeft -= this.npc.speed;
      this.npc.render();
      if(this.npc.posLeft === leftBound){
        clearInterval(roamLeft);
      }
    }, 50);
  }

  roamRight(){
    let rightBound = this.npc.posLeft + 100;
    let roamRight = setInterval(() => {
      this.npc.posLeft += this.npc.speed;
      this.npc.render();
      if(this.npc.posLeft === rightBound){
        clearInterval(roamRight);
      }
    }, 50);
  }
}
