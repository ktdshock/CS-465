const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const travelList = async function(req, res) {
  try {
    const trips = await Trip.find();
    res.render('travel', { 
      title: 'Travlr Getaways',
      trips 
    });
  } catch (err) {
    console.log("Error fetching trips for travel page:", err);
    res.render('travel', { title: 'Travlr Getaways', trips: [] });
  }
};

module.exports = {
  travelList
};