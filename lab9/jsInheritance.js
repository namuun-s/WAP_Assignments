"use-strict";

/* Task 1: Defining person object using object literals and JavaScript Inheritance using Object.create() */
const person = {
    name: "",
    dateOfBirth: "",
    getName: function(){
        return this.name;
    },
    setName(newName){
        this.name = newName;
    }
};
let p1 = Object.create(person);
p1.setName("John");
p1.dateOfBirth = "1998-12-10";
console.log("#Task 1:");
console.log("The person's name is " + p1.getName());
console.log(p1.getName() + " was born on " + p1.dateOfBirth);


/* Task 2: Creating employee object and JavaScript Inheritance using Object.create() */
let employee = Object.create(
    person, 
    {
        salary: {value: 0}, 
        hireDate: {value: new Date()} , 
        doJob: {value: function(jobTitle){
            console.log(this.name + " is a " + jobTitle + " who earns $" + this.salary);
        }}
});
let employeeAnna = Object.create(employee,{salary:{value: 249995.50}});
console.log("#Task 2:");
employeeAnna.setName("Anna");
employeeAnna.doJob("Programmer");
console.log(employeeAnna);


/* Task 3:  Constructor Function*/
function Person(newName, newDob){
    this.name = newName;
    this.dateOfBirth = newDob;    
}
Person.prototype.getName = function(){
    return this.name;
};
Person.prototype.setName = function(newName){
    this.name = newName;
};
Person.prototype.toString = function(){
    return "Name: " + this.name + ", dateOfBirth: " + this.dateOfBirth;
};
const p2 = new Person("Peter","1985-11-10");
console.log("#Task 3:");
console.log(p2.toString()); 