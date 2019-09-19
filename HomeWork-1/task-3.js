class Human {

    constructor(name, age, dateOfBirth){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo(){
        console.log(`Name: ${this.name }, Age: ${this.age}, Date of birth: ${this.dateOfBirth}`);
    }

}

class Employee extends Human{
    constructor(name, age, dateOfBirth, salary, departament){
        super(name, age, dateOfBirth);
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.salary = salary;
        this.departament = departament;
    }


    displayInfo() {
        super.displayInfo();
        console.log(`Salary: ${this.salary}, Departament: ${this.departament}`);
    }

}

class Managar extends Employee{
    constructor(name, age, dateOfBirth, salary, departament, employee){
        super(name, age, dateOfBirth);
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.salary = salary;
        this.departament = departament;
        this.employee = employee;
    }

    addDev(){
        this.employee.push(this.name);
    }

    delDev(name){
        this.employee.splice( this.employee.indexOf(name), 1 );
    }

    displayInfo() {
        super.displayInfo();
        console.log(`${this.employee}`);
    }
}

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, departament) {
        super(name, age, dateOfBirth);
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.salary = salary;
        this.departament = departament;
    }


}



const manager = new Managar("Sergey",24,"12.04.1995", 60000,"Manager", ['Max', 'Anton', 'Julia' ,'Lev']);
manager.addDev();
manager.delDev('Lev');
manager.displayInfo();
