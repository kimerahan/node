const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Departments = require('../models/Departments');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bodyparser = require("body-parser");
var datetime = new Date();
var urlencodeParser = bodyparser.urlencoded({ extended: false });

// Get gig list
router.get('/', (req, res) => 
  Departments.findAll()
    .then(departments => res.render('departments', {
        departments
      }))
    .catch(err => console.log(err)));
    
// Display add department form
router.get('/adddept', (req, res) => res.render('adddept'));

// Add a department
 router.post('/adddept',urlencodeParser,(req, res) => {
  let { name, description, department_code } = req.body;
  let errors = [];
  //var name = req.body.user.name;
 // var desc = req.body.user.description;
  //var dept_code = req.body.user.department_code;

  // Check for errors
   if(errors.length > 0) {
    res.render('adddept', {
      errors,
      name, 
      description, 
      department_code
    });
  } else {
    // Insert into table
    Departments.create({
      name, 
      description, 
      department_code
    })
      .then(departments => res.redirect('/departments'))
      .catch(err => console.log(err));
  }
  
}); 

// Search for employees
router.get('/search', (req, res) => {
  let { term } = req.query;

  // Make lowercase
  term = term.toLowerCase();

  Departments.findAll({ where: { name: { [Op.like]: '%' + term + '%' } } })
    .then(departments => res.render('departments', { departments }))
    .catch(err => console.log(err));
});
module.exports = router;