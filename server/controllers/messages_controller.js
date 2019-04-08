let id = 0;
let messages = [];






module.exports = {
    create:(req, res) => {
        let {text, time} = req.body;
        console.log('req',req.body)
        messages.push({id,text,time});
        id++;
        res.status(200).send(messages);
    },
    
    read: (req, res) => {
        res.status(200).send(messages);
    },
    
    update:(req, res) => {
        const {text} = req.body;
        const {id} = req.params;
        let index = messages.findIndex(message => +message.id === +id);
        let message = messages[index];

        messages[index] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send(messages)
    },
    
    delete:(req, res) => {
        let {id} = req.params;
        let index = messages.findIndex(message => +message.id === +id);
        messages.splice(index,1);
        res.status(200).send(messages);
    }

}