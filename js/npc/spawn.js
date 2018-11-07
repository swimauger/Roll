class Spawn {
  constructor(spawnRate){
    this.spawning = true;
    this.rate = spawnRate || 100000; //Default spawn rate every minute
    this.entity;
    this.colors = ["maroon", "green", "navy"];
    this.options = {
      "name": "FOE",
      "color": "",
      "speed": "",
      "power": ""
    };
  }

  spawn(){
    let spawn = setInterval(() => {
      this.entity = this.getEntity();
      this.entity.createNPC();
      stack.npcs.push(this.entity);
      this.entity.render();
      if(!this.spawning){
        clearInterval(spawn);
      }
    }, this.rate);
  }

  getEntity(){
    this.options.color = this.getColor();
    this.options.size = this.getSize();
    this.options.speed = this.getSpeed();
    this.options.power = this.getPower();
    return new NPC(this.options);
  }

  getRandom(low, high, decimal){
    let value = (low === 0) ? (Math.random()*high + low) : (high - Math.random()*low);
    let multiplier = Math.pow(10, decimal || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  getColor(){
    return this.colors[this.getRandom(0,this.colors.length-1,0)];
  }

  getSize(){
    return window.game.player.size*(this.getRandom(0.5,1,1));
  }

  getSpeed(){
    return window.game.player.speed*(this.getRandom(0.5,1,1));
  }

  getPower(){
    return window.game.player.power*(this.getRandom(0.5,1,1));
  }
}
