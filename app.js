const express = require('express');

const app = express();

const cors = require('cors')

app.use(cors())

app.use(express.json());

app.post('/getNumber',(req,res)=>{
    let {number} = req.body;
    console.log(number);
       let isPrime = true;

       if(number===1){
        return res.json({message:'1 is not prime'})
       }
       else if(number>1){
        for(let i=2;i<number;i++){
            if(number%i==0){
                isPrime = false;
            }
        }
        if(isPrime){
            return res.json({message:`${number} is prime number`})
        }
        else{
            return res.json({message:`${number} is not prime number`})
        }
       }
       else{
        return res.json({message:`${number} is not prime number`})
       }
    }
)

app.listen(3000,()=>console.log('server is running'));