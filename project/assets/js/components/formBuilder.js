export function addComponentToCanvas (type,  canvas) {
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
    canvas.appendChild(element);
  } else {
    console.warn('unknown component type');
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

function createDivider() {
  const divider = document.createElement('hr'); // Horizontal rule for the divider
  // divider.style.margin = '20px 0';
  // divider.style.width = '100px';
  // divider.style.height = '50px';

  divider.style.background = 'red';

  return divider;
}