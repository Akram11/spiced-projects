function awesome() {
    var awesomeDiv = document.createElement("div");
    var awsomeText = document.createTextNode("AWESOME");
    awesomeDiv.style.position = "fixed";
    awesomeDiv.style.left = "20px";
    awesomeDiv.style.top = "100px";
    awesomeDiv.style.zIndex = "2147483647";
    awesomeDiv.style.fontSize = "200px";
    awesomeDiv.appendChild(awsomeText);
    document.body.append(awesomeDiv);
}
