const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

// Home page
router.get('/', ctrlMain.index);

// Login page
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

router.post('/login', (req, res) => {
  console.log('Login attempt:', req.body);
  // You can add validation or database checks here
  res.redirect('/');
});

// Signup page
router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up' });
});

router.post('/signup', (req, res) => {
  console.log('Signup attempt:', req.body);
  // You can add user creation logic here
  res.redirect('/login');
});

// Admin page
router.get('/admin', (req, res) => {
  res.render('admin', { title: 'Admin Dashboard' });
});

module.exports = router;