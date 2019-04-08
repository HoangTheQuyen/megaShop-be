const _User = require('../../models/user.model')
const _ErrorHandler = require('../../utils/helpers/dbErrorHandler')
const _DEFAULT_ROUTES = require('../../config/DefaultRoutes')
const router = require('express').Router();

router.post(_DEFAULT_ROUTES.USER.CREATE,(req, res, next) => {
  const user = new _User(req.body)
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: _ErrorHandler.getErrorMessage(err)
      })
    }
    res.status(200).json({
      message: "Successfully signed up!"
    })
  })
}) 

module.exports = router