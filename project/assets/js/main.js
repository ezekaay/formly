// import function from formbuilder.js
import { addComponentToCanvas } from "./components/formBuilder.js";

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.canvas');
    const components = document.querySelectorAll('.component');


    // Set up the dragstart event for each component
  components.forEach(component => {
    component.addEventListener('dragstart', (e) => {
      // Set the data to be transferred (the type of the component)
      e.dataTransfer.setData('componentType', e.target.dataset.type);
    });
  });

  // Set up the dragover event for the canvas to allow dropping
  canvas.addEventListener('dragover', (e) => {
    // Prevent the default action to allow for a drop
    e.preventDefault();
  });

  // Set up the drop event on the canvas to handle the dropped component
  canvas.addEventListener('drop', (e) => {
    // Prevent default behavior
    e.preventDefault();

    // Get the type of the component being dragged
    const componentType = e.dataTransfer.getData('componentType');

    // Add the component to the canvas
    addComponentToCanvas(componentType, canvas);
  });

    
});
