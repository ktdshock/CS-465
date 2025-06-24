const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: Show travel list
const travelList = async function(req, res) {
  try {
    const trips = await Trip.find();
    const successMessage = req.query.successMessage;
    res.render('travel', { 
      title: 'Travlr Getaways',
      trips,
      successMessage
    });
  } catch (err) {
    console.log("Error fetching trips for travel page:", err);
    res.render('travel', { title: 'Travlr Getaways', trips: [] });
  }
};

// GET: Show add trip form
const addTripForm = function(req, res) {
  res.render('trip_add', { title: 'Add New Trip' });
};

// POST: Handle add trip form submission
const addTripSubmit = async function(req, res) {
  try {
    await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      description: req.body.description,
      image: req.body.image
    });
    res.redirect('/travel?successMessage=Trip+added+successfully');
  } catch (err) {
    console.log("Error adding trip:", err);
    res.status(500).send("Error adding trip.");
  }
};

// POST: Delete a trip
const deleteTrip = async function(req, res) {
  try {
    await Trip.findOneAndDelete({ code: req.params.tripCode });
    res.redirect('/travel?successMessage=Trip+deleted+successfully');
  } catch (err) {
    console.log("Error deleting trip:", err);
    res.status(500).send("Error deleting trip.");
  }
};

// GET: Show edit form
const editTripForm = async function(req, res) {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).send("Trip not found");
    }
    res.render('trip_edit', { title: 'Edit Trip', trip });
  } catch (err) {
    console.log("Error loading trip for edit:", err);
    res.status(500).send("Error loading trip.");
  }
};

// POST: Handle edit form submission
const editTripSubmit = async function(req, res) {
  try {
    await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        description: req.body.description,
        image: req.body.image
      }
    );
    res.redirect('/travel?successMessage=Trip+updated+successfully');
  } catch (err) {
    console.log("Error updating trip:", err);
    res.status(500).send("Error updating trip.");
  }
};

// Export all controller functions
module.exports = {
  travelList,
  deleteTrip,
  editTripForm,
  editTripSubmit,
  addTripForm,
  addTripSubmit
};

console.log("Exported controller:", module.exports);