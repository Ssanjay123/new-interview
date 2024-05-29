const Sequelize = require("sequelize");

const sequelize = new Sequelize('Encdecr','root','Balaji@123',{
    dialect:'mysql',
    host:'localhost'
})

// const sequelize = new Sequelize('Encdecr','sbi_tf_live','sbi_tf_live',{
//     dialect:'oracle',
//     host:'mercuryfx.chwkrfaqj9m1.ap-south-1.rds.amazonaws.com',
//     dialectOptions: {
//         dialectModule: require('oracledb')
//     }
// })

module.exports = sequelize;

// const mongoose = require('mongoose');

// function conn(){
//    return mongoose.connect('mongodb+srv://Balajiii123:Balajii123@cluster0.cjk1b9i.mongodb.net/encdec',{
//     useNewUrlParser:'true',
//     useUnifiedTopology:'true'
// })
// }
// module.exports = conn; 