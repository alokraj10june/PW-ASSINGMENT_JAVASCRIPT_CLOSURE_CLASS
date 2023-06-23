function number_checker(arr){
    return function(num){
        return arr.includes(num);
    }
}
let arr=[1,2,3,4,5,6,7]
let checknum=number_checker(arr);
console.log(checknum(5));
console.log(checknum(19));