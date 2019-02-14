const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Employee = require('../models/Employee');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get gig list
router.get('/', (req, res) => 
Employee.findAll()
    .then(gigs => res.render('employees', {
        gigs
      }))
    .catch(err => console.log(err)));

// Display add gig form
router.get('/add', (req, res) => res.render('add'));

// Add a gig
router.post('/add', (req, res) => {

  let { title, tech, budget, description, contact_email,code } = req.body;
  //let { title, tech, budget, description, contact_email,code} = req.body;
  let errors = [];

  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
          firstName: 'John',
          lastName: 'Doe',
          email: 'demo@demo.com',
          createdAt: datetime,
          updatedAt: datetime
        }], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };

  // Validate Fields
  /*  if(!title) {
    errors.push({ text: 'Please add a title' });
  }
  if(!tech) {
    errors.push({ text: 'Please add some technologies' });
  }
  if(!description) {
    errors.push({ text: 'Please add a description' });
  }
  if(!contact_email) {
    errors.push({ text: 'Please add a contact email' });
  }
  if(!code) {
    errors.push({ text: 'Please add a code' });
  }
    */
  // Check for errors
   if(errors.length > 0) {
    res.render('add', {
      errors,
      title, 
      tech, 
      budget, 
      description, 
      contact_email,
      code
    });
  } else {
    if(!budget) {
      budget = 'Unknown';
    } else {
      budget = `$${budget}`;
    }

    // Make lowercase and remove space after comma
    tech = tech.toLowerCase().replace(/, /g, ','); 

    // Insert into table
    Employee.create({
      title,
      tech,
      description,
      budget,
      contact_email,
      code
    })
      .then(gig => res.redirect('/employees'))
      .catch(err => console.log(err));
  }
});

// Search for gigs
router.get('/search', (req, res) => {
  let { term } = req.query;

  // Make lowercase
  term = term.toLowerCase();

  Employee.findAll({ where: { tech: { [Op.like]: '%' + term + '%' } } })
    .then(gigs => res.render('employees', { gigs }))
    .catch(err => console.log(err));
});

module.exports = router;