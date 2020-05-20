// TODO: Write code to define and export the Employee class
class Employee {  
    constructor(name,id,email,role="Employee"){
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
    }

    getName(){
        return this.name
    };
    getRole(){
        return this.role
    };
    getId(){
        return this.id
    };
    getEmail(){
        return this.email
    };

}  

  module.exports = Employee;