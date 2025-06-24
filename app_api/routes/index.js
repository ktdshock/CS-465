const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const tripsController = require('../controllers/trips');
const authController = require('../controllers/auth');

console.log("authController:", authController);
console.log("app_api router loaded");

// Trip endpoints (protected)
router.post('/trips', auth, tripsController.tripsCreate);
router.put('/trips/:tripCode', auth, tripsController.tripsUpdate);
router.delete('/trips/:tripCode', auth, tripsController.tripsDelete);

// Trip endpoints (public)
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

// Auth endpoints
router.post('/register', authController.register);
router.post('/login', authController.login);

// Health check
router.get('/ping', (req, res) => {
  res.status(200).json({ message: "pong" });
});

module.exports = router;