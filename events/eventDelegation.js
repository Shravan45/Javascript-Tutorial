document.getElementById("category").addEventListener("keyup", (e) => {
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    } else if(e.target.dataset.color != undefined) {
        e.target.style.color = "red";
    } else if(e.target.dataset.bold != undefined) {
        e.target.style.fontWeight = 'bold';
    }
});

// Event delegation is nothing but adding only one event listener on the parent 
// instead of adding one on every child element and letting event bubbling do its work.
// Adding one event on every child element would create a major performance bottleneck.
// Event delegation would also support infinite scrolling in a good way as we need not attach
// event listeners on every new product which is being rendered on the screen dynamically.

/**
 * Benefits of event delegation:
1) improves memory space
2) mitigates risk of performance bottle neck
3) Dom manipulation
4) when elements get added dynamically, the process of adding events is slow

Limitations:
1) All the events are not bubbled up, some events like blur, focus are not bubbled up
2) if e.stopPropogation is used in child, then events are not bubbled up
 */