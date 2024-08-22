var express = require('express')
var userController = require('../controller/controlleruser')
const router = express.Router();



router.get('/users',userController.getAllUsersss)
router.post('/add',userController.createUser)
router.delete('/:id',userController.deleteUser)
router.patch('/:id',userController.updateUser)
router.get('/userss/:id',userController.findOne)
router.get('/usersss',userController.getAllUsers)
router.get('/userrs',userController.getUserByAge)
router.post('/sign-up',userController.createAcc)


module.exports = router