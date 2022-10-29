const Router = require('express');
const userController = require('../controllers/user.controller');
const router = new Router()


router.post('/user', userController.createUser)
router.get('/user', userController.getUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router