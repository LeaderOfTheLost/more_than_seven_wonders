const { Wonder, Review } = require('../models')

//Wonder Controllers
const createWonder = async (req, res) => {
  try {
    const wonder = await new Wonder(req.body)
    await wonder.save()
    return res.status(201).json({
      wonder
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllWonders = async (req, res) => {
  try {
    const wonders = await Wonder.find()
    return res.status(200).json({ wonders })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getWonderById = async (req, res) => {
  try {
    const { id } = req.params
    const wonder = await Wonder.findById(id)
    if (wonder) {
      return res.status(200).json({ wonder })
    }
    return res.status(404).send('Wonder with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateWonder = async (req, res) => {
  try {
    const wonder = await Wonder.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(wonder)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteWonder = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Wonder.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Wonder deleted')
    }
    throw new Error('Wonder not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//Review Controllers
const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getReviewById = async (req, res) => {
  try {
    const { id } = req.params
    const review = await Review.findById(id)
    if (review) {
      return res.status(200).json({ review })
    }
    return res.status(404).send('Review with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Review.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Review deleted')
    }
    throw new Error('Review not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createWonder,
  getAllWonders,
  getWonderById,
  updateWonder,
  deleteWonder,
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview
}
