const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

console.log("app_api router loaded"); // <- put this here

router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);
router.get('/ping', (req, res) => {
  res.status(200).json({ message: "pong" });
});

module.exports = router;