class User{
    constructor(name,pass){
        this.Username=name;
        this.password=pass;

    }
    getpassword(){
        return this.password.replaceAll(/./g, '*');
    }
    setpassword(new_pass){
        try{
            let rg1 = /([A-Z])/g;
            let rg2= /\d/g;if((rg1.test(new_pass)) && new_pass.length>=8){
                this.password=new_pass;
            }
            else{
                throw Error('password must be at least 8 character long and contain at least one number and one uppercase letter.')
            }
        }catch(err){
            console.log(err)
        }
    }

}
let user =new User('Mithiun','Password123');
console.log(user.getpassword());

user.setpassword("MyPassword");

user.setpassword("password");

user.setpassword("Mypassword123")