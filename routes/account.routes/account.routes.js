const express = require('express')
const accountOpeningontroller = require('./../../controller/account.controller/account.opening.controller')
const router = express.Router()

router.route('/new-account').post(accountOpeningontroller.creatingAccount)

module.exports = router