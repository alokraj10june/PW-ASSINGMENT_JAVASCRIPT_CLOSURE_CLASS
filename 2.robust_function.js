function getPerson(obj){
    try{
        if(obj.hasOwnProperty('age') && obj.hasOwnProperty('name') && (typeof obj)=="object"
        ){
            return `Name:${obj.name},Age:${obj.age}`;
        }
        else{
            throw Error('Invalid parameter type')
        }
    }catch(err){
        console.log(err)
    }
}
console.log(getPerson({name:'sohel', age: 23}));
console.log(getPerson({name:'sohel'}));
console.log(getPerson(['name','sohel']));