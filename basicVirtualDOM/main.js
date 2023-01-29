import createElement from "./index.js";
import render from "./render.js";
import insertElement from "./insert.js";



var obj = {attrs: {id: "container"},
children: [
    createElement("p", 
        {attrs: {id: "text"},
        children: ["hello world"]},
    ), 
    createElement("p", 
        {attrs: {id: "text1"},
        children: ["hello shravan"],}
    ),
    createElement("div", 
        {attrs: {id: "container2"},
        children: [createElement("p", 
            {attrs:{id: "text3", style: "color: red"},
            children: ["yenpa peteer"]}
        )],
    })
]
};

let myVirtualElement = createElement("div", obj);

let element = render(myVirtualElement);
let rootElement = insertElement(element, document.querySelector("#root"));