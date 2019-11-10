
const db = require('../services/database');

class Employee{

constructor(firstName, lastName, email, password, gender, jobRole, department, address, dateOfBirth){

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
this.gender = gender;
this.jobRole = jobRole;
this.department = department;
this.address = address;
this.dateOfBirth = dateOfBirth;
}

set employee(val){
([this.firstName, this.lastName, this.email, this.password, this.gender, this.jobRole, this.department, this.address, this.dateOfBirth])
}

get employee(){
    return([this.firstName, this.lastName, this.email, this.password, this.gender, this.jobRole, this.department, this.address, this.dateOfBirth]);
}

 async createAccount(){
    let queryString = `INSERT INTO employee(firstname, lastname, email, password, gender, jobrole, department, address, dateofbirth) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *`;
 
 return   db.query(queryString, this.employee);
 }
login(){
    
}

viewProfile(val){
    console.log(val);
    let queryString = `SELECT * FROM employee WHERE id=${val}`

 return db.query(queryString);
    
}

async editProfile(val){
    let queryString = `UPDATE employee SET firstname =$1, lastname=$2, email=$3, password=$4, gender=$5, jobrole=$6, department=$7, address=$8, dateofbirth=$9 WHERE ID=${val} returning *`;
    return db.query(queryString, this.employee);
}




}

module.exports = Employee;