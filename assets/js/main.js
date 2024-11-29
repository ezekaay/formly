//main.js
// import function from formbuilder.js
import { addComponentToCanvas, editComponent } from "./components/formBuilder.js";

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.canvas');
    const components = document.querySelectorAll('.component');
    const propertyPane = document.querySelector(".property-pane");


    
    // event for adding components to canvas
  components.forEach(component => {
    component.addEventListener('click', (e) => {
      // console.log(e.target.dataset.type)
      addComponentToCanvas(e.target.dataset.type, canvas, propertyPane)
    });
  }); 
  

  //show edit or remove option on click
  canvas.addEventListener('click', (e) => {
    if(e.target.dataset.type) {
      console.log(e.target);
      editComponent(e.target, propertyPane);
    }
  })
  
  
});
