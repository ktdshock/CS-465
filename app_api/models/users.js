const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true }
});

// Password encryption
userSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  user.password = await bcrypt.hash(user.password, 10);
  next();
});

// Password check
userSchema.methods.checkPassword = function(inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

// Generate JWT
userSchema.methods.generateJwt = function() {
  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name
  }, 'cs465', { expiresIn: '1h' }); // Replace 'SECRET' with your secure key in production
};

mongoose.model('User', userSchema);