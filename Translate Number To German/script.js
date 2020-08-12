/* eslint-disable indent */
function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

$(document).ready(translateNumberToGerman);

function translateNumberToGerman() {
    try {
        var n = askForNumber();
        switch (n) {
            case "1":
                return "eins";
            case "2":
                return "zwei";
            case "3":
                return "drei";
            case "4":
                return "vier";
            case "5":
                return "fuenf";
            case "6":
                return "sechs";
            case "7":
                return "sieben";
            case "8":
                return "acht";
            case "9":
                return "neun";
            case "10":
                return "zehn";
            default:
                break;
        }
    } catch (e) {
        console.log(
            "ERROR, THE VALUE ENTERED WAS NOT A NUMBER. PLEASE ENTER A NUMBER!",
            e
        );
        translateNumberToGerman();
    }
}
