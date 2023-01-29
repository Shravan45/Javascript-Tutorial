// Virtual DOM explained.

/*
The virtual DOM is an in-memory representation of the real DOM elements in a object.
*/

/* Example

const myButton = {
    tagName: 'button',
    attrs: {
        id: 'btn',
        class: 'save-btn'
    },
    children: ['save']
};

HTML Equivalent:
<button id="btn" class="save-btn">save</button>
*/

function createElement(tagName, obj) {
    console.log(obj.attrs);
    // return {
    //     tagName,
    //     attrs,
    //     children
    // }
}

function x() {
    console.log("eee");
}

function y() {
    console.log("eee");
}

export default createElement;

