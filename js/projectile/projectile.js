class Projectile extends MovableObject{
  constructor(view, options){
    super(options);
    this.view = view;
    this.element;
  }

  createProjectile(){
    this.element = this.view.createElement('div');
    this.element.style.position = 'absolute';
    this.element.style.backgroundColor = this.color;
    this.element.style.width = this.size + "px";
    this.element.style.height = this.size + "px";
    this.element.style.borderRadius = this.size + "px";
    this.element.style.left = this.posLeft + "px";
    this.element.style.bottom = this.posBottom + "px";
    this.view.appendChild(this.element);
  }

  fire(facing){
    if(facing === "right"){
      this.fireRight();
    }
    if(facing === "left"){
      this.fireLeft();
    }
  }

  fireRight(){
    let fire = setInterval(() => {
      this.posLeft += this.speed;
      this.render();
      if(this.posLeft > 3000){
        this.element.remove();
        this.render();
        clearInterval(fire);
      }
    },50);
  }

  fireLeft(){
    let fire = setInterval(() => {
      this.posLeft -= this.speed;
      this.render();
      if(this.posLeft < 0){
        this.element.remove();
        this.render();
        clearInterval(fire);
      }
    }, 50);
  }

  delete(){
    this.element.style.display = "none";
    this.render();
  }

  render(){
    this.element.style.backgroundColor = this.color;
    this.element.style.width = this.size + "px";
    this.element.style.height = this.size + "px";
    this.element.style.borderRadius = this.size + "px";
    this.element.style.left = this.posLeft + "px";
    this.element.style.bottom = this.posBottom + "px";
  }
}
