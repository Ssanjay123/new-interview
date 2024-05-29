async function generatePassword(e){
    e.preventDefault();
    let obj = {
        length:e.target.password.value,
        isUppercase:e.target.uppercase.checked,
        isLowerCase:e.target.lowercase.checked,
        isNumber:e.target.number.checked,
        isCharacters:e.target.characters.checked
    }
    console.log(obj);
    let result = await axios.post("http://localhost:3000/generatePassword",obj)
    console.log(result);
    let h1 = document.getElementById('password1');
    h1.innerText=result.data
}