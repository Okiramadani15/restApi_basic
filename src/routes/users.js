const express = require('express')

const  UsersController = require("../controller/users")

const router = express.Router()


router.post('/', UsersController.createNewUsers)
router.get('/', UsersController.getAllUsers)
router.patch('/:id', UsersController.updateUsers)
router.delete('/:id', UsersController.deleteUsers )





module.exports = router