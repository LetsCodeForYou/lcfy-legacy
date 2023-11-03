const app = require('./app.js')
const dotenv  = require('dotenv')
dotenv.config({"path" : "./environment/config.env"})
const mongoose = require('mongoose')

const connect = mongoose.connect(process.env.CONNECTION).then(el=>{
    console.log(`Hello i am database connectied sucessfully with the device at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}---`)
})

const server = app.listen(process.env.PORT, ()=>{
    console.log(`hello i am server live at ${process.env.PORT}`)
})

