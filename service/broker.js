const Conversation = require('./conversation');
let context = undefined;

exports.message = (req, res) => {
    let messageText = req.params.text

    Conversation.sendMessage(String(messageText), context)
        .then(response => {
            context = response.context;
            let responseText = response.output.text.join('\n');
            res.send(responseText);
        })
        .catch(err => {
            console.error(JSON.stringify(err, null, 2));
            res.status(500).send({
                message: err.message || "Some error occurred."
            });
        });


};


