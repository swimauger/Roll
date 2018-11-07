class View {
  constructor(){

  }
  getElementById(id){
    return document.getElementByID(id);
  }
  getValueById(id){
    return document.getElementById(id).value;
  }
  hideClassElements(c){
    for(let i=0;i < document.getElementsByClassName(c).length;i++){
      document.getElementsByClassName(c)[i].style.display = 'none';
    }
  }
  showClassElements(c){
    for(let i=0;i < document.getElementsByClassName(c).length;i++){
      document.getElementsByClassName(c)[i].style.display = 'block';
    }
  }
  eventListener(evt, fn){
    document.addEventListener(evt, fn);
  }
  createElement(element){
    return document.createElement(element);
  }
  appendChild(element){
    document.body.appendChild(element);
  }
}
