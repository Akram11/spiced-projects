// /*eslint quote-props: ["error", "always"]*/

const readline = require("readline");
const chalk = require("chalk");
const Image = require("ascii-art-image");
const barrel = new Image({
    filepath: "./barrel.jpg",
    alphabet: "greyscale",
});

const tunnel = new Image({
    filepath: "./a-tunnel.png",
    alphabet: "variant3",
});

const intro = `/***     ///////////////////////////////////////////////////////////
***********************
          █████ █████  ███   █████   
         ░░███ ░░███  ░░░   ░░███    
  ██████  ░░███ ███   ████  ███████  
 ███░░███  ░░█████   ░░███ ░░░███░   
░███████    ███░███   ░███   ░███    
░███░░░    ███ ░░███  ░███   ░███ ███
░░██████  █████ █████ █████  ░░█████ 
 ░░░░░░  ░░░░░ ░░░░░ ░░░░░    ░░░░░  

***********************
*********************** ////////////////////////////////////////////////////////////
`;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let gameObj = {
    stages: {
        dungeon: {
            art: barrel,
            questions: ` You're trapped in a dungeon with your friend. You see a barrel. What do you do? 
                `,
            actions: "move barrel",
        },
        "move barrel": {
            art: tunnel,
            questions: `The barrel rolls aside and you find a secret tunnel. What do you do?
                `,
            actions: "enter tunnel",
        },
        "enter tunnel": {
            questions:
                "You start to escape but your friend is too weak to go with you. They hand you a note. What do you do?",
            actions: "read note",
        },
        "read note": {
            questions: "It is too dark to read the note. What do you do?",
            actions: "leave",
        },
        "leave": {
            questions:
                "You crawl through the tunnel and the tunnel leads to the beach. what do you do?",
            actions: "look",
        },
        "Look": {
            questions: "In the water you see a boat. What do you do?",
            actions: "get on boat",
        },
        "get on boat": {
            finalMsg:
                "Congratulations, you have escaped but did you really win? Do you wanna play again?",
        },
    },
};

function startGame() {
    console.log(rText(intro));
    rl.question(cText("Hello friend, Press any key to start..."), () => {
        goToNextStage(gameObj, "dungeon");
    });
}

function goToNextStage(game, stage) {
    if (game.stages[stage].art) {
        game.stages[stage].art.write(function (err, rendered) {
            console.log(rendered);
        });
    }

    rl.question(yText(game.stages[stage].questions), (answer) => {
        if (game.stages[stage].actions == answer) {
            goToNextStage(game, answer);
        } else {
            console.log("you can't do that here");
            goToNextStage(game, stage);
        }
    });
}
function cText(text) {
    return chalk.cyan.bold(text);
}
function rText(text) {
    return chalk.red.bold(text);
}

function yText(text) {
    return chalk.yellow.bold(text);
}

startGame(gameObj, "dungeon");
