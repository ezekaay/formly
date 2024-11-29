document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('type', e.target.getAttribute('data-type'));
    });
});

document.getElementById('form-builder').addEventListener('dragover', function(e) {
    e.preventDefault();
});

document.getElementById('form-builder').addEventListener('drop', function(e) {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    let newElement;

    switch(type) {
        case 'text':
            newElement = createInputElement('text');
            break;
        case 'email':
            newElement = createInputElement('email');
            break;
        // Add cases for other input types
    }

    if (newElement) {
        e.target.appendChild(newElement);
    }
});

function createInputElement(type) {
    const wrapper = document.createElement('div');
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = `${type} input`;
    
    const toggleRequired = document.createElement('button');
    toggleRequired.innerText = 'Required';
    toggleRequired.addEventListener('click', () => {
        input.required = !input.required;
        toggleRequired.classList.toggle('active');
    });

    const regexInput = document.createElement('input');
    regexInput.placeholder = 'Regex (optional)';
    regexInput.addEventListener('input', () => {
        input.pattern = regexInput.value;
    });

    wrapper.appendChild(input);
    wrapper.appendChild(toggleRequired);
    wrapper.appendChild(regexInput);

    return wrapper;
}
