const express  = require('express')
const router = express.Router()
const {
    login,
    dashboard
} = require('../controller/index')


const authMiddleWare = require('../middleware/auth')
router.route('/login')
    .post(login)

router.route('/dashboard')
    .get(authMiddleWare,dashboard)


module.exports = router