const express = require('express');
const router = express.Router();

const db = require('../config/database');
const seqdata = require('../models/seqmodel');
//get data from list

router.get('/',(req,res) => 
seqdata.findAll()
.then(seq => {
    //console.log(seq);
    //res.sendStatus(200);
    res.render('seq',{
        seq
    }); 
})
.catch(err => console.log(err))
);


//add data to list
router.get('/add',(req,res) => {
const data = {
    title: 'Title 2',
    tech: 'tech 2',
    description: 'description 2',
    budget: '4000',
    contact_email: 'email',
    code: '13'
}
let {title,tech,description,budget,contact_email,code} = data;

//insert into model
seqdata.create({
    title,
    tech,
    description,
    budget,
    contact_email,
    code
})
.then(seqdata => res.redirect('/seq'))
.catch(err => console.log(err));
});

module.exports = router;
