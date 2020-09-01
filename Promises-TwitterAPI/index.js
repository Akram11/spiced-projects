const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("ticker"));

app.get("/data.json", (req, res) => {
    console.log("there has been a request for json...");
    // 1. Make a request to ticker, for a bearerToken

    getToken().then((bearerToken) =>
        getTweets(bearerToken, function (err, tweets) {
            console.log("there has been a request tweets...");
            if (err) {
                console.log("error in getTweets", err);
                return;
            }
            const filteredTweets = filterTweets(tweets);
            console.log(filteredTweets);
            res.json(filteredTweets);
        })
    );
    // getToken(function (err, bearerToken) {
    //     if (err) {
    //         console.log("Error in getToken", err);
    //         return;
    //     }
    //     // console.log("bearerToken in index.js", bearerToken);
    //     // 2. Use this token, to make a request for tweets
    //     getTweets(bearerToken, function (err, tweets) {
    //         // console.log("there has been a request tweets...");
    //         if (err) {
    //             console.log("error in getTweets", err);
    //             return;
    //         }
    //         const filteredTweets = filterTweets(tweets);
    //         res.json(filteredTweets);
    //     });
    // });
});

app.listen(8080, () => console.log("twitter ticker up and running..."));
