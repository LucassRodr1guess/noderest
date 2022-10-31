//importando as configurações do servidor
const {app,port} = require('../server')

//rotas
const index = require('./routes/index') (app)
const sobre = require('./routes/sobre') (app)

//escura do servidor
app.listen(port, ()=> {
    console.log(`Servidor escutando em http://localhost:${port}`)
})