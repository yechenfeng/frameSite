/*
 *  express服务器 入口
*/
const express = require('express')
const eventRouter = require('./routers/eventRouter')
const app = express()
const port = process.env.port || 8888
const BodyParser = require('body-parser')

app.use(BodyParser.json())

// app.use('/api', eventRouter)
app.use('/cgi-mock', eventRouter) // TODO

app.get('/', (request, response) => {
    // response.send('hello express ~')
    response.send('hello cgi-mock ~') // TODO
})

// http://localhost:8888/cgi-mock/
app.listen(port, () => console.log(`监听端口： ${port}`))
