const Router = require('express')
const userControllers = require('../controllers/userControler')
const router = new Router()

router.post('/registration', userControllers.registration)
router.post('/login', userControllers. login)
router.post('/logout', userControllers. logout)
router.get('/activate/:link', userControllers.activate)
router.get('/refresh', userControllers.refresh)
router.get('/users', userControllers.getUser)

module.exports = router