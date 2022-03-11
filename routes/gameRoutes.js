const router = require('express').Router()
const { Game, User } = require('../models')
const passport = require('passport')

router.get('/games', passport.authenticate('jwt'), async function (req, res) {
  const games = await Game.find({}).populate('user')
  res.json(games)
})
router.get('/games/user', passport.authenticate('jwt'), async function (req, res) {
  const games = await Game.find({ user: req.user._id }).populate('user')
  res.json(games)
})

router.get('/games/:id', passport.authenticate('jwt'), (req, res) => {
  Game.findById(req.params.id).populate('user')
    .then(game => res.json(game))
    .catch(err => console.log(err))
})

router.post('/games', passport.authenticate('jwt'), async function (req, res) {
  const game = await Game.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { games: game._id } })
  res.json(game)
})

router.put('/games/:id', passport.authenticate('jwt'), async function (req, res) {
  const game = await Game.findByIdAndUpdate(req.params.id, { $set: req.body })
  // await User.findByIdAndUpdate(req.user._id, { $push: { games: Game._id } })
  res.sendStatus(200)
})


router.delete('/games/:id', passport.authenticate('jwt'), async function (req, res) {
  await Game.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router