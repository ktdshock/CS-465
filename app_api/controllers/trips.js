const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    console.error("Error fetching trips:", err);
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

// POST (create a new trip)
const tripsCreate = async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(201).json(newTrip);
  } catch (err) {
    res.status(400).json({ message: "Error creating trip", error: err });
  }
};

// PUT (update a trip)
const tripsUpdate = async (req, res) => {
  try {
    const updatedTrip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      req.body,
      { new: true }
    );
    if (!updatedTrip) return res.status(404).json({ message: "Trip not found" });
    res.status(200).json(updatedTrip);
  } catch (err) {
    res.status(400).json({ message: "Error updating trip", error: err });
  }
};

// DELETE (remove a trip)
const tripsDelete = async (req, res) => {
  try {
    const deletedTrip = await Trip.findOneAndDelete({ code: req.params.tripCode });
    if (!deletedTrip) return res.status(404).json({ message: "Trip not found" });
    res.status(204).json(null);
  } catch (err) {
    res.status(500).json({ message: "Error deleting trip", error: err });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsCreate,
  tripsUpdate,
  tripsDelete
};