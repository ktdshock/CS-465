console.log("auth.js loaded");

const mongoose = require('mongoose');
const User = mongoose.model('User');
console.log("User model in auth.js:", User);  // ← Add this line

const register = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const user = new User({ email, name, password });
    await user.save();
    res.status(200).json({ token: user.generateJwt() });
  } catch (err) {
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    res.status(200).json({ token: user.generateJwt() });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { register, login };