function selectorFunction(selector) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.style.textDecoration = "underline";
        element.style.fontWeight = "bold";
        element.style.fontStyle = "italic";
    });
}

function classNameSelector(className) {
    var elements = document.querySelectorAll(`.${className}`);
    var nodesArray = [];
    for (var i = 0; i < elements.length; i++) {
        nodesArray.push(elements[i]);
    }
    return nodesArray;
}
