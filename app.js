const express = require('express')
const app = express()
app.use(express.json())


const accountOpening_route = require('./routes/account.routes/account.routes')
app.use("/api/v1/user", accountOpening_route)

module.exports = app