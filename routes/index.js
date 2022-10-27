const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// router.get('/', (req, res) => res.send('I AM ROOOOOOOT'))

//Wonder Routes
router.post('/wonders', controllers.createWonder)
router.get('/wonders', controllers.getAllWonders)
router.get('/wonders/:id', controllers.getWonderById)
router.put('/wonders/:id', controllers.updateWonder)
router.delete('/wonders/:id', controllers.deleteWonder)

//Review Routes
router.post('/reviews', controllers.createReview)
router.get('/reviews', controllers.getAllReviews)
router.get('/reviews/:id', controllers.getReviewById)
router.put('/reviews/:id', controllers.updateReview)
router.delete('/reviews/:id', controllers.deleteReview)

module.exports = router
