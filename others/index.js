/*
 *  others 非frameSite项目
 *  time: 20171025
*/

import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', (request, response) => {
    response.send('hello 20171025')
})
app.listen(1025, () => {
    console.log('监听“非frameSite项目”的服务端口：1025')
})
