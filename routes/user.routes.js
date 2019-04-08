const router = require('express').Router();
const _DEFAULT_ROUTES = require('../config/DefaultRoutes')
const _UserAPI = require('../controllers/api/userApi')


router.use(_DEFAULT_ROUTES.USER.ROOT , _UserAPI)

module.exports = router;