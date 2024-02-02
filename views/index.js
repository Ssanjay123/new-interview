
async function isPrimeOrNot(e){
    try{
        e.preventDefault();
        const form = new FormData(e.target)

        const Obj = {number:form.get("input")};
        const result = await axios.post('http://localhost:3000/getNumber',Obj)
        console.log(result);
        alert(result.data.message)
    }
    catch(e){
        return e;
    }
}