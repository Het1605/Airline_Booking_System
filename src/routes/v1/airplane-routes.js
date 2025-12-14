const express = require('express');

const { AirplaneController } = require('../../controllers')
const router = express.Router();


// it refer to /api/v1/airplanes , Which is a Post request 
router.post('/',AirplaneController.createAirplane);

module.exports = router;
