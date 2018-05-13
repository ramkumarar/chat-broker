var chatbroker = require("../service/broker");


var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.status(200).send(`<h2>This is a Chat Bot api integrated with WATSON</h2>`);
    });

    app.get("/message/:text", chatbroker.message)


}

module.exports = appRouter;