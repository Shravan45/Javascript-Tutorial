//Create a table


function createElement(tagName, {attrs = {}, children = []} = {}) {
    return {
        tagName,
        attrs,
        children
    };
}

function render({tagName, attrs={}, children = []}) {
    let element = document.createElement(tagName);

    children.forEach((child) => {
        if(typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(render(child));
        }
    });

    if(Object.keys(attrs).length){
        for(const [key, value] of Object.entries(attrs)){
            element.setAttribute(key, value);
        }
    }

    return element;

}

function insertInDom(createdElement, placeHolder){
    placeHolder.replaceWith(createdElement);
}


let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];

function getRows() {
    var rows = [];
    for(const mountain of mountains) {
        rows.push(getRow(mountain));
    }
    return rows;
}

function getRow(mountain) {
    return createElement("tr", {
        attrs : {},
        children : [
            createElement("td", {
                attrs : {},
                children : [mountain.name]
            }),
            createElement("td", {
                attrs : {},
                children : [mountain.height.toString()]
            }),
            createElement("td", {
                attrs : {},
                children : [mountain.place]
            }),
        ]
    });
}

const obj = {
    attrs : {
       id: "container" 
    },
    children : [createElement("table", { 
        attrs : {id : "table-container"},
        children: [
            createElement("thead", {
                attrs : {id : "table-head"},
                children : [
                    createElement("tr", {
                        attrs : {id : "head-row"},
                        children : [
                            createElement("th", {
                                attrs : {id : "col1"},
                                children : ["Name"]
                            }),
                            createElement("th", {
                                attrs : {id : "col2"},
                                children : ["Height"]
                            }),
                            createElement("th", {
                                attrs : {id : "col3"},
                                children : ["Place"]
                            })
                        ]
                    })
                ]
            }), 
            createElement("tbody", {
                attrs : {id : "table-body"},
                children : getRows()
            })
        ]
    })]
}

const virtualDomElement = createElement("div", obj);
const renderableElement = render(virtualDomElement);
insertInDom(renderableElement, document.querySelector("#root"));