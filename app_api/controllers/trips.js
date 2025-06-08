const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET all trips
// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    console.error("Error fetching trips:", err);  // <- Add this line
    res.status(500).json({ message: "Error fetching trips", error: err });
  }
};

// GET one trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving trip", error: err });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};