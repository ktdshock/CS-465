const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel');
console.log('Loaded travel controller:', ctrlTravel);

// Show all trips
router.get('/', ctrlTravel.travelList);

// Delete a trip
router.post('/delete/:tripCode', ctrlTravel.deleteTrip);

// Edit trip form
router.get('/edit/:tripCode', ctrlTravel.editTripForm);

// Handle trip form submission
router.post('/edit/:tripCode', ctrlTravel.editTripSubmit);

// Add trip form
router.get('/add', ctrlTravel.addTripForm);

// Handle add trip submission
router.post('/add', ctrlTravel.addTripSubmit);

module.exports = router;