class NPC extends MovableObject {
  constructor(options){
    super(options);
    this.type = this.name || 'FOE';
    this.element;
    this.ai;
  }

  createNPC(){
    this.element = this.view.createElement('div');
    this.element.style.position = 'absolute';
    this.element.style.backgroundColor = this.color;
    this.element.style.width = this.size + "px";
    this.element.style.height = this.size + "px";
    this.element.style.borderRadius = this.size + "px";
    this.element.style.left = this.posLeft + "px";
    this.element.style.bottom = this.posBottom + "px";
    this.view.appendChild(this.element);
    this.ai = new AI(this);
    this.ai.roam();
  }

  delete(){
    this.element.style.display = "none";
    this.render();
  }

  render(){
    this.element.name = this.name;
    this.element.style.backgroundColor = this.color;
    this.element.style.width = this.size + "px";
    this.element.style.height = this.size + "px";
    this.element.style.borderRadius = this.size + "px";
    this.element.style.left = this.posLeft + "px";
    this.element.style.bottom = this.posBottom + "px";
  }
}
