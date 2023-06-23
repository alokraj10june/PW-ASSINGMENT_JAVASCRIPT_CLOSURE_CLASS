class car{
    company='bmw'
    model="a6"
    year=2021;

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}
let mycar=new car();
console.log(mycar.getDescription());