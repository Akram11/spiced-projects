const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("ticker"));

app.get("/data.json", (req, res) => {
    console.log("there has been a request for json...");
    getToken()
        .then((bearerToken) =>
            getTweets(bearerToken)
                .then((tweets) => {
                    const filteredTweets = filterTweets(tweets);
                    res.json(filteredTweets);
                })
                .catch((err) => console.log("error in getTweets", err))
        )
        .catch((err) => console.log("error in getTweets", err));
});

app.listen(8080, () => console.log("twitter ticker up and running..."));
