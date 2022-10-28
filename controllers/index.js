const { Wonder, Review } = require('../models')

const createWonder = async (req, res) => {
  try {
    const newWonder = await new Wonder(req.body)
    await newWonder.save()
    return res.status(201).json({
      newWonder
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllWonders = async (req, res) => {
  try {
    const allWonders = await Wonder.find({})
    return res.status(200).json({ allWonders })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getWonderById = async (req, res) => {
  const { id } = req.params
  const wonder = await Wonder.findById(id).populate('reviews')
  return res.status(200).send(wonder)
}

const updateWonder = async (req, res) => {
  try {
    const updatedWonder = await Wonder.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(updatedWonder)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteWonder = async (req, res) => {
  try {
    const { id } = req.params
    const deletedWonder = await Wonder.findByIdAndDelete(req.params.id)
    if (deletedWonder) {
      return res.status(200).send('Wonder deleted')
    }
    throw new Error('Wonder not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const newReview = await new Review(req.body)
    await newReview.save()
    let updatedWonder = await Wonder.findById(req.params.id)
    updatedWonder.reviews.push(newReview._id)
    await updatedWonder.save()
    return res.status(201).json({
      newReview
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllReviews = async (req, res) => {
  try {
    const allReviews = await Review.find()
    return res.status(200).json({ allReviews })
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
    return res.status(404).send('Review with specific ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(updatedReview)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params
    const deletedReview = await Review.findByIdAndDelete(id)

    return res.status(200).send(deletedReview)
  } catch (error) {
    console.log(' LINE 120: in delete catch')
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
