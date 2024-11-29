// formBuilder.js
export function addComponentToCanvas (type,  canvas, propertyPane) {
  const components = {
    headingText: () => createHeading(),
    textInput: () => createTextInput(),
    button: () => createButton(),
    divider: () => createDivider(),
  }

  //yedi component object ma type define  chha vane
  //create and add element
  if (components[type]) {
    const element = components[type]();
    element.dataset.type = type;
    element.classList.add("canvas-item");

    // display edit and remove options
    element.addEventListener('click', editComponent);

    canvas.appendChild(element);
  } else {
    console.warn('unknown component type');
  }
}

// function to edit components
export function editComponent(element, propertyPane) {
  // //clear previous propertyPane content
  propertyPane.innerHTML = "";
  // Display edit options in the sidebar
  const heading = document.createElement("h4");
  heading.textContent = "Edit Component";
  propertyPane.appendChild(heading);


   if (element.dataset.type === "headingText") {
    const fontSizeInput = document.createElement("input");
    const textContentInput = document.createElement("input");

    fontSizeInput.type = "number";
    fontSizeInput.placeholder = "Font size";
    fontSizeInput.value = parseInt(window.getComputedStyle(element).fontSize);
    fontSizeInput.addEventListener("input", () => {
      element.style.fontSize = `${fontSizeInput.value}px`;
    });

    textContentInput.type = 'text';
    textContentInput.placeholder = "Edit Text";
    textContentInput.value = element.textContent;
    textContentInput.addEventListener('input', () => {
      element.textContent = textContentInput.value;
    });
    propertyPane.appendChild(fontSizeInput);
    propertyPane.appendChild(textContentInput);
  }
}

//functions to create components
function createHeading() {
  const heading = document.createElement('div');
  heading.textContent = 'This is a Heading';
  heading.style.fontSize = '24px';
  heading.style.fontWeight = 'bold';
  heading.style.margin = '10px 0';
  return heading;
}

function createButton() {
  const button = document.createElement('button');
  button.textContent = 'label';
  button.style.padding = '8px 16px'
  return button;
}

function createDivider() {
  const divider = document.createElement('div'); // Horizontal rule for the divider
  divider.style.width = '100%';
  divider.style.height = '10px';

  divider.style.background = 'red';

  return divider;
}