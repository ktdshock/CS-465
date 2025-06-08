console.log("app_api router loaded");

const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// 🔧 Test route to make sure this file is wired up correctly
router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

// API routes
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

module.exports = router;