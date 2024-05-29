const server = require('http').createServer();

const fs = require('fs');

server.on('request',(req,res)=>{
    // fs.readFile('input.txt','utf8',(err,text)=>{
    //     if(err){
    //         return err;
    //     }
    //  res.end(text);
    // })
    // let rstream = fs.createReadStream('input.txt');
    // rstream.on('data',(data)=>{
    //     res.write(data);
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.pipe(res)
})

server.listen(3000,()=>console.log("server running"))