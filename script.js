let plants = document.querySelectorAll('.plant');

let dragElement = (plant) => {
  
  let posX, posY, posXNew, posYNew;
  
  let pointerDrag = (event) => {
    posX = event.clientX;
    posY = event.clientY;
    
    let elementDrag = (event) => {
      posX = posXNew - event.clientX;
      posY = posYNew - event.clientY;
      posXNew = event.clientX;
      posYNew = event.clientY;
    
      plant.style.position = "absolute";
      plant.style.top = plant.offsetTop - posY + "px";
      plant.style.left = plant.offsetLeft - posX + "px";

      console.log(posX, posY, posXNew, posYNew);
    }
  
  let stopElementDrag = () => {
    document.onpointerup = null;
    document.onpointermove = null;
  }

  document.onpointermove = elementDrag;
  document.onpointerup = stopElementDrag;
  }
  
  plant.onpointerdown = pointerDrag;
}

plants.forEach((plant) => {
  dragElement(plant);
});