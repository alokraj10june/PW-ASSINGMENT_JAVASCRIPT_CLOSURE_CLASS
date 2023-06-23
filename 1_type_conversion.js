
function convertToNumber(str){
    try{
        if(isNaN(str) == true){
            throw Error("Invalid Number");
        }
        else{
            let num=Number(str);
            console.log(num);
        }
    }catch(err){
        console.log(err);
    }
}
convertToNumber("123");
convertToNumber("abc");