const { Key, Secret } = require("./secrets.json");
const https = require("https");

module.exports.getToken = function () {
    let creds = `${Key}:${Secret}`;
    let encodedCreds = Buffer.from(creds).toString("base64");
    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    return new Promise((resolve, reject) => {
        const req = https.request(options, cb);

        function cb(response) {
            if (response.statusCode != 200) {
                // something went wrong!
                console.log("something went wrong: ", response.statusCode);
                reject(response.statusCode);
            }
            let body = "";
            response.on("data", function (chunk) {
                body += chunk;
            });
            response.on("end", function () {
                const parsedBody = JSON.parse(body);
                resolve(parsedBody.access_token);
            });
        }
        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function (bearerToken) {
    const options = {
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=theeconomist&tweet_mode=extended",
        method: "GET",
        headers: {
            Authorization: "Bearer " + bearerToken,
        },
    };
    return new Promise((resolve, reject) => {
        const req = https.request(options, cb);
        function cb(response) {
            if (response.statusCode != 200) {
                // something went wrong!
                console.log("something went wrong: ", response.statusCode);
                reject(response.statusCode);
            }
            let body = "";
            response.on("data", function (chunk) {
                body += chunk;
            });
            response.on("end", function () {
                const parsedTweets = JSON.parse(body);
                resolve(parsedTweets);
            });
        }
        req.end();
    });
};

module.exports.filterTweets = function (tweets) {
    let results = [];
    let urlTweets = tweets.filter((t) => {
        return t.entities.urls.length == 1;
    });
    // console.log(urlTweets);

    urlTweets.forEach((t) => {
        let { full_text: title, entities } = t;
        title = title.substring(0, title.indexOf("http"));
        let href = entities.urls[0].url;
        results.push({ title, href });
    });
    return results;
};
