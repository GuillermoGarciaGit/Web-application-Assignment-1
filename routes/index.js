var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me'});
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Sign in'});
});

/* GET business contacts page. */
router.get('/business_contacts', function(req, res, next) {
  res.render('business_contacts', { title: 'Business Contacts'});
});

module.exports = router;
