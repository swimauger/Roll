class Ball extends MovableObject{
  constructor(options){
    super(options);
    this.projectileOptions = options;
    this.jumping = false;
    this.facing = "right";
  }

  moveLeft(){
    this.posLeft -= this.speed;
    this.facing = "left";
    this.render();
  }

  moveRight(){
    this.posLeft += this.speed;
    this.facing = "right";
    this.render();
  }

  jumpUp(){
    // Set Ball state jumping to true
    this.jumping = true;
    // Ball moves upward by 20px every 50 ticks (.05 seconds)
    let jumpUp = setInterval(() => {
      this.posBottom += 20;
      this.render();
      // RENDER HERE //
      // Ball stops moving upward once reaches max height of 100px
      if(this.posBottom === 200){
        clearInterval(jumpUp);
        // Ball starts to fall
        this.fallDown();
      }
    }, 50);
  }

  fallDown(){
    // Ball moves downward by 25px every 50 ticks (.05 seconds)
    let fallDown = setInterval(() => {
      this.posBottom -= 20;
      this.render();
      // Ball stops moving downward after reaching bottom at 0px
      if(this.posBottom === 0){
        clearInterval(fallDown);
        // Set Ball state jumping to false
        this.jumping = false;
      }
    }, 50);
  }

  jumpLeft(){
    // Set Ball state jumping to true
    this.jumping = true;
    // Ball moves upward by 20px every 50 ticks (.05 seconds)
    let jumpUp = setInterval(() => {
      this.posBottom += 20;
      this.posLeft -= this.speed;
      this.render();
      // Ball stops moving upward once reaches max height of 100px
      if(this.posBottom === 200){
        clearInterval(jumpUp);
        // Ball starts to fall
        this.fallLeft();
      }
    }, 50);
  }

  fallLeft(){
    // Ball moves downward by 25px every 50 ticks (.05 seconds)
    let fallDown = setInterval(() => {
      this.posBottom -= 20;
      this.posLeft -= this.speed;
      this.render();
      // Ball stops moving downward after reaching bottom at 0px
      if(this.posBottom === 0){
        clearInterval(fallDown);
        // Set Ball state jumping to false
        this.jumping = false;
      }
    }, 50);
  }

  jumpRight(){
    // Set Ball state jumping to true
    this.jumping = true;
    // Ball moves upward by 20px every 50 ticks (.05 seconds)
    let jumpUp = setInterval(() => {
      this.posBottom += 20;
      this.posLeft += this.speed;
      this.render();
      // Ball stops moving upward once reaches max height of 100px
      if(this.posBottom > 200){
        clearInterval(jumpUp);
        // Ball starts to fall
        this.fallRight();
      }
    }, 50);
  }

  fallRight(){
    // Ball moves downward by 25px every 50 ticks (.05 seconds)
    let fallDown = setInterval(() => {
      this.posBottom -= 20;
      this.posLeft += this.speed;
      this.render();
      // Ball stops moving downward after reaching bottom at 0px
      if(this.posBottom === 0){
        clearInterval(fallDown);
        // Set Ball state jumping to false
        this.jumping = false;
      }
    }, 50);
  }

  shoot(){
    if(this.size > 30){
      this.projectileOptions.size = this.size/5;
      this.projectileOptions.posLeft = this.posLeft + this.size/2;
      this.projectileOptions.posBottom = this.posBottom + this.size/2;
      this.projectileOptions.power = this.power;
      let projectile = new Projectile(this.view, this.projectileOptions);
      stack.projectiles.push(projectile);
      projectile.createProjectile();
      projectile.fire(this.facing);
      this.size -= 1;
      this.render();
    }
  }

  render(){
    document.getElementById('ball').innerHTML = this.name;
    document.getElementById('ball').style.backgroundColor = this.color;
    document.getElementById('ball').style.width = this.size + "px";
    document.getElementById('ball').style.height = this.size + "px";
    document.getElementById('ball').style.borderRadius = this.size + "px";
    document.getElementById('player').style.left = this.posLeft + "px";
    document.getElementById('player').style.bottom = this.posBottom + "px";
  }
}
