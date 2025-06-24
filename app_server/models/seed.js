// Connect to MongoDB manually
const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://127.0.0.1/travlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Register the schema BEFORE using it
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true, index: true },
  name: { type: String, required: true, index: true },
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
});

// Register the model
const Trip = mongoose.model('trips', tripSchema);

// Load the data file
const tripsData = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Seed the database
Trip.deleteMany({})
  .then(() => Trip.insertMany(tripsData))
  .then(() => {
    console.log('Trips data successfully seeded!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Seeding error:', err);
    mongoose.connection.close();
  });