class student{
    constructor(n){
        this.name=n;
    }
}
let Student=new student("Alok");
Student.__proto__.printDetails=function(){
    console.log(`Hello,the student is ${this.name}`);
}
student.printDetails()