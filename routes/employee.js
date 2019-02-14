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
router.get('/addemployee', (req, res) => {
   let branches = [{
     name : 'Natete',
     id: 1
   },
   {
    name : 'Natete',
    id: 1
  }]
   let departments = [{
     name: 'Finance',
     id: 1
   }]
  res.render('addemployee', {
    branches, departments
  })
});

// Add a department
 router.post('/addemployee',urlencodeParser,(req, res) => {
  let { fist_name, 
    last_name, 
    appointment_date,
    department_id,
    branch_id } = req.body;


  // Create / Store Employee
  newEmployee = null



  let errors = [];
  // Check for errors
   if(errors.length > 0) {
    res.render('addemployee', {
      errors,
      fist_name, 
      last_name, 
      appointment_date,
      department_id,
      branch_id
    });
  } else {
    // Insert into table
    Employee.create({
      fist_name, 
      last_name, 
      appointment_date,
      department_id,
      branch_id
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

  Employee.findAll({ where: { fist_name: { [Op.like]: '%' + term + '%' } } })
    .then(employees => res.render('employees', { employees }))
    .catch(err => console.log(err));
});
module.exports = router;