async function decrypt(e){
    try {
        e.preventDefault();
        // let formData = new FormData(e.target);
        let text = document.getElementById('text');
        let textObj = {
            text:text.value
        }
        console.log(textObj);
       // let decbutton = document.getElementById('decrypt');
    //   decbutton.addEventListener('click',async ()=>{
    //     let res = await axios.post("http://localhost:3000/deccrypttext",textObj)
    //     console.log(res);
    //   })
    let res = await axios.post("http://localhost:3000/decrypttext",textObj)
        console.log(res);
        alert(res)
    } catch (error) {
        throw new Error;
    }
}



async function postText(e){
    try {
        e.preventDefault();
        // let formData = new FormData(e.target);
        let text = document.getElementById('text');
        let textObj = {
            text:text.value
        }
        console.log(textObj);
    //   let encbutton = document.getElementById('encrypt');
    //   encbutton.addEventListener('click',async ()=>{
    //     let res = await axios.post("http://localhost:3000/encrypttext",textObj)
    //     console.log(res);
    //   })
        let res = await axios.post("http://localhost:3000/encrypttext",textObj)
        console.log(res);
        alert(res.data.data)
    } catch (error) {
        throw new Error;
    }
}
