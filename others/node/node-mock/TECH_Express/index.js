/*
 *  express 入口
*/
import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', (request, response) => {
    response.send('hello express 20171018')
})

app.listen(1018, () => {
    console.log('监听express服务端口：1018')
})
