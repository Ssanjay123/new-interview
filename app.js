const express = require('express');

const Text = require("./models/encryption")

const app = express();

const path = require('path')

const cors = require('cors')
const crypto = require('crypto');
const algorithm = 'aes-256-cbc'
const iv = crypto.randomBytes(16);
 const key1 = crypto.randomBytes(32)
 const key = 'Balaji-secret-key-for-encryption'
// let conn = require('./util/db')
const sequelize = require('./util/db')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json());


app.post('/encrypttext',async (req,res)=>{

    let {text} = req.body
   let cipher = crypto.createCipheriv(algorithm,key,iv)
   let encryptedData = cipher.update(text,'utf-8','hex');
   encryptedData += cipher.final('hex')
//let encryptedData = Buffer.concat([cipher.update(text,'utf-8','hex'),cipher.final('hex')]).toString('base64')
console.log(encryptedData);
   const base64Data = Buffer.from(iv,'binary').toString('base64');
   const result = await Text.create({encryptText:encryptedData,iv:base64Data})
//     // const encryptedd = new Text({encryptText:encryptedData,iv:base64Data})
//     // await encryptedd.save();
    res.status(200).json({msg:'success'})
})

app.post('/decrypttext',async (req,res)=>{
    const {text} = req.body
    //const text = req.params.encrypted;
    const data = await Text.findAll({where:{encryptText:text}})
    let originalData = Buffer.from(data[0].iv,'base64')
    const decipher = crypto.createDecipheriv(algorithm,key,originalData)
    let decryptedData = decipher.update(data[0].encryptText,'hex','utf-8')
    decryptedData += decipher.final('utf-8');
    // let decryptedData = Buffer.concat([decipher.update(data[0].encryptText,'hex','utf-8'),decipher.final('utf-8')])

    res.send(decryptedData)
    
})

app.post('/generatePassword',(req,res)=>{
    let {length,isUppercase,isLowerCase,isNumber,isCharacters} = req.body;
    console.log(isCharacters,isLowerCase,isUppercase,isNumber);
    const obj = {
        upperCase:'QWERTYUIOPASDFGHJKLZXCVBNM',
        lowerCase:'qwertyuiopasdfghjklzxcvbnm',
        characters:'!@#$%^&*()_-',
        numbers:1234567890
    }

    let allCharacters = Object.values(obj).join('')

    // if(isUppercase && isLowerCase && req.body.isNumber && req.body.isCharacters){
    //     allCharacters = Object.values(obj).join('');
    // }
    // else if(!isUppercase && isLowerCase && isNumber && isCharacters){
    //    allCharacters=Object.keys(obj).filter(key=> key !=='upperCase').reduce((acc,ch)=>acc+obj[ch],[])
    // }
    let chars = Object.keys(obj);
   let password = [];

   chars.forEach(character=>{
    password.push(obj[character][Math.floor(Math.random()*character.length)])
   });
   
   for(let i=0;i<length;i++){
     password.push(allCharacters[Math.floor(Math.random()*allCharacters.length)])
   }
   password=password.join('')
   console.log(password);
   res.send(password)
})
// app.post('/getresult',(req,res)=>{
//     let number = req.body.input;
//        let isPrime = true;

//        if(number===1){
//         return res.json('1 is not prime')
//        }
//        else if(number>1){
//         for(let i=2;i<number;i++){
//             if(number%i==0){
//                 isPrime = false;
//             }
//         }
//         if(isPrime){
//              return res.json(`${number} is prime number`)
//         }
//         else{
//             return res.json({message:`${number} is not prime number`})
//         }
//        }
//        else{
//         return res.json({message:`${number} is not prime number`})
//        }
//     }
// )

// async function connection(){
//    const res =  await conn();
//    console.log('db connected.');
//    app.listen(3000,()=>console.log('server is running'));
// }

// connection();

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'view','index.html'))
// })

sequelize
.sync()
.then(()=>{
    console.log('Db connected.');
    app.listen(3000,()=>console.log('server running at 3000'))})
    .catch(err=>console.log(err))
 