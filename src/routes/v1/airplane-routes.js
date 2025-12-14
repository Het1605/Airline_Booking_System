const express = require('express');

const { AirplaneController } = require('../../controllers')
const { AirplaneMiddlewares } = require('../../middlewares')

const router = express.Router();


// it refer to /api/v1/airplanes , Which is a Post request 
router.post('/',AirplaneMiddlewares.validateCreateRequestt,AirplaneController.createAirplane);

module.exports = router;
