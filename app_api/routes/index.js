const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

console.log("app_api router loaded");

router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);
router.post('/trips', tripsController.tripsCreate);
router.put('/trips/:tripCode', tripsController.tripsUpdate);
router.delete('/trips/:tripCode', tripsController.tripsDelete);

router.get('/ping', (req, res) => {
  res.status(200).json({ message: "pong" });
});

module.exports = router;