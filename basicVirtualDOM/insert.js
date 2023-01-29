function insertElement(element, domElement) {
    domElement.replaceWith(element);
    return element;
}

x();

export default insertElement;