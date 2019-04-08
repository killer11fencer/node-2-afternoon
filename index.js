const express = require('express')
const app = express();
const port = 3001;
const userCtrl = require('./server/controllers/messages_controller')
app.use(express.json());
app.use(express.static('./public/build'))

app.post('/api/messages',userCtrl.create)
app.get('/api/messages',userCtrl.read)
app.put('/api/messages/:id',userCtrl.update)
app.delete('/api/messages/:id',userCtrl.delete)

app.listen(port, ()=> {
    console.log('listen on port',port)
});
