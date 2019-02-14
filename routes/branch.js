const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Branch = require('../models/Branch');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bodyparser = require("body-parser");
var datetime = new Date();
var urlencodeParser = bodyparser.urlencoded({ extended: false });

// Get gig list
router.get('/', (req, res) => 
Branch.findAll()
    .then(branches => res.render('branches', {
      branches
      }))
    .catch(err => console.log(err)));
    
// Display add department form
router.get('/addbranch', (req, res) => res.render('addbranch'));

// Add a department
 router.post('/addbranch',urlencodeParser,(req, res) => {
  let { name, description, places_id,latlong } = req.body;
  let errors = [];
  // Check for errors
   if(errors.length > 0) {
    res.render('addbranch', {
      errors,
      name, 
      description, 
      places_id,
      latlong
    });
  } else {
    // Insert into table
    Branch.create({
      name, 
      description, 
      places_id,
      latlong
    })
      .then(branches => res.redirect('/branch'))
      .catch(err => console.log(err));
  }
  
}); 

// Search for branches
router.get('/search', (req, res) => {
  let { term } = req.query;

  // Make lowercase
  term = term.toLowerCase();

  Branch.findAll({ where: { name: { [Op.like]: '%' + term + '%' } } })
    .then(branches => res.render('branches', { branches }))
    .catch(err => console.log(err));
});
module.exports = router;