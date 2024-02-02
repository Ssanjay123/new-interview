const express = require('express');

const app = express();

const path = require('path')

const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.post('/',(req,res)=>{
    let number = req.body.input;
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


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.listen(3000,()=>console.log('server is running'));