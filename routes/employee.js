const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Employee = require('../models/Employee');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bodyparser = require("body-parser");
var datetime = new Date();
var urlencodeParser = bodyparser.urlencoded({ extended: false });

// Get gig list
router.get('/', (req, res) => 
Employee.findAll()
    .then(employees => res.render('employees', {
      employees
      }))
    .catch(err => console.log(err)));
    
// Display add department form
router.get('/addemployee', (req, res) => res.render('addemployee'));

// Add a department
 router.post('/addemployee',urlencodeParser,(req, res) => {
  let { name, description, places_id,latlong } = req.body;
  let errors = [];
  // Check for errors
   if(errors.length > 0) {
    res.render('addemployee', {
      errors,
      name, 
      description, 
      places_id,
      latlong
    });
  } else {
    // Insert into table
    Employee.create({
      name, 
      description, 
      places_id,
      latlong
    })
      .then(employee => res.redirect('/employee'))
      .catch(err => console.log(err));
  }
  
}); 

// Search for branches
router.get('/search', (req, res) => {
  let { term } = req.query;

  // Make lowercase
  term = term.toLowerCase();

  Employee.findAll({ where: { name: { [Op.like]: '%' + term + '%' } } })
    .then(employees => res.render('employees', { employees }))
    .catch(err => console.log(err));
});
module.exports = router;