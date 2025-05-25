const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel');

console.log("Loaded travel ROUTER file");

router.get('/', ctrlTravel.travel);

module.exports = router;
