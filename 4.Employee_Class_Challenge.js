class Employee{
    name="alok";
    position="software engineer";
    salary=800000;
    getSalary(){
        return `${this.salary}`
    }
}
let employee=new Employee();
console.log(employee.getSalary());