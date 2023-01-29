function render({tagName, attrs = {}, children = []}) {
    let element = document.createElement(tagName);

    //insert all children elements
    children.forEach(child => {
        if(typeof child === 'string'){
            //if a child is a string, create a text node object
            element.appendChild(document.createTextNode(child));
        } else {
            //repeat the process with the children elements
            element.appendChild(render(child));
        }
    });

    //if attributes are present, add them to the element
    if(Object.keys(attrs).length) {
        for(const [key, value] of Object.entries(attrs)) {
            element.setAttribute(key, value);
        }
    }

    return element;
}

export default render;