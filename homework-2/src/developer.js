export class Developer{
    constructor(firstName, lastName, age, departament){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.departament = departament;
    }
    
    displayInfo(){ return `
    Имя: ${this.firstName} 
    Фамилия: ${this.lastName} 
    Возраст: ${this.age} 
    Отделение: ${this.departament} 
    `; }
}


 