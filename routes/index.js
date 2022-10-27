const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

//Wonder Routes
router.post('/wonders/:id', controllers.createWonder)
router.get('/wonders', controllers.getAllWonders)
router.get('/wonders/:id', controllers.getWonderById)
router.put('/wonders/:id', controllers.updateWonder)
router.delete('/wonders/:id', controllers.deleteWonder)

//Review Routes
router.post('/reviews/:id', controllers.createReview)
router.get('/reviews', controllers.getAllReviews)
router.get('/reviews/:id', controllers.getReviewById)
router.put('/reviews/:id', controllers.updateReview)
router.delete('/reviews/:id', controllers.deleteReview)

module.exports = router
