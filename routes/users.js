// require modules and instantiate userRouter
var    express = require('express'),
	userRouter = express.Router(),
userController = require('../controllers/user_controller')

module.exports = userRouter;
