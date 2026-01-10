const express = require('express');
const {InfoController} = require('../../controllers')
const router = express.Router();

router.get('/users',InfoController.usersList)
module.exports = router;