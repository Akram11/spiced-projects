function waitThenRun(callback) {
    setTimeout(callback, 1500);
}

function sayHi() {
    console.log("Hello!");
}

function sayBye() {
    console.log("Bye!");
}

waitThenRun(sayBye);
waitThenRun(sayHi);
