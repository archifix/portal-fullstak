const Router = require('express')
const router = new Router()
// const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
// const newsRouter = require('./newsRouter')
// const contentRouter = require('./contentRouter')

router.use('/users', userRouter)
// router.use('/news', newsRouter)
// router.use('/content', contentRouter)

module.exports = router