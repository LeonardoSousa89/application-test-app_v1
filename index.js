const _port     = 3003

const server    = require('./server/index')
const log       = require('morgan') 
const express   = require('express')
const app       = express()

app.use(log('dev'))
app.use('/', server)
app.use('/static', express.static('public'));

app.listen(process.env.PORT || _port,()=>{
    console.log(`localhost:${_port}`)
})
