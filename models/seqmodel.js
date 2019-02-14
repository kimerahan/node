const Sequelize = require('sequelize');
const db = require('../config/database');

const seqmodel = db.define('model',{
    title:{
    type:Sequelize.STRING
},
tech:{
    type:Sequelize.STRING
},
description:{
    type:Sequelize.STRING
},
budget:{
    type:Sequelize.STRING
},
contact_email :{
    type:Sequelize.STRING
},
code:{
    type:Sequelize.INTEGER
},

})
module.exports = seqmodel;