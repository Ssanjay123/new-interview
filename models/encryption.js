const Sequelize = require("sequelize");

const sequelize = require('../util/db');

const EncryptedText = sequelize.define('encryptText',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    encryptText:{
        type:Sequelize.STRING,
    },
    iv:{
        type:Sequelize.STRING
    }
})

// const mongoose = require('mongoose');

// const EncryptedText = new mongoose.Schema({
//     id:{type:Number,default:null,unique:true},
//     encryptText:{type:String,default:null},
//     iv:{type:String}
// })

module.exports = EncryptedText;
//module.exports = new mongoose.model('EncryptText',EncryptedText);