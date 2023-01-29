var divs = document.getElementsByTagName("div");

for(var i = 0; i<divs.length; i++){
    divs[i].addEventListener("click",(e) => {
        alert(e.target.getAttribute("id") + "event got handled");
    },false );
}

function clickhandler(target) {
    
}

// start frm event bubbling and capturing
// addEventListener("click",clickhandler,useCapture);
// useCapture = true : Event Capturing : the event trickles down the hierarchy
// useCapture = false : Event bubbling : the event bubbles up the hierarchy
// e.stopPropagation(); 

// Event propogration is a cycle when useCapture is set to false;
// i.e The flow first trickles down and again bubbles up to the outermost element
// upon reaching the innermost element

/**

removeEventListener(type, listener, useCapture)
 
Matching event listeners for removal
Given an event listener previously added by calling addEventListener(), you may eventually come to a point at which you need to remove it. Obviously, you need to specify the same type and listener parameters to removeEventListener(). But what about the options or useCapture parameters?

While addEventListener() will let you add the same listener more than once for the same type if the options are different, the only option removeEventListener() checks is the capture/useCapture flag. Its value must match for removeEventListener() to match, but the other values don't.

For example, consider this call to addEventListener():

element.addEventListener("mousedown", handleMouseDown, true);

Now consider each of these two calls to removeEventListener():

element.removeEventListener("mousedown", handleMouseDown, false);     // Fails
element.removeEventListener("mousedown", handleMouseDown, true);      // Succeeds
Copy to Clipboard
The first call fails because the value of useCapture doesn't match. The second succeeds,
since useCapture matches up.


 */