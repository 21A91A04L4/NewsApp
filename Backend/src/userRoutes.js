const express = require('expresss');
const Router = express.Router();
const userController= require('../control/userController');
//creating route path
Router.post('/api/add-user',userController.AddUserData);
module.exports = Router;
