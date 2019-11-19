
const db = require('../services/database');

class Employee{

constructor(firstName, lastName, email, password, gender, jobRole, department, address, dateOfBirth, isAdmin, dateCreated){

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
this.gender = gender;
this.jobRole = jobRole;
this.department = department;
this.address = address;
this.dateOfBirth = dateOfBirth;
this.isAdmin = isAdmin;
this.date = dateCreated;
}

set employee(val){
([this.firstName, this.lastName, this.email, this.password, this.gender, this.jobRole, this.department, this.address, this.dateOfBirth,  this.date, this.isAdmin])
}

get employee(){
    return([this.firstName, this.lastName, this.email, this.password, this.gender, this.jobRole, this.department, this.address, this.dateOfBirth, this.date, this.isAdmin]);
}

 async createAccount(){
    try{
let queryString = `INSERT INTO employee(firstname, lastname, email, password, gender, jobrole, department, address, dateofbirth, date_created, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning *`;
return   db.query(queryString, this.employee);
    } catch(error){
        console.log(error);
    }

    
 }
login(val){
    try{
    let queryString = `SELECT * FROM employee WHERE email=$1`;
    return db.query(queryString, [val]);
    } catch(error){
        console.log(error)
    }

}

profile(id){

    try{
  let queryString = `SELECT * FROM employee WHERE id=${id}`;
 return db.query(queryString);
    } catch(error){
        console.log(error);
    }
  
    
}

async editProfile(id){
    try{
    let  queryString = `UPDATE employee SET firstname =$1, lastname=$2, email=$3, password=$4, gender=$5, jobrole=$6, department=$7, address=$8, dateofbirth=$9, date_updated=$10, is_admin=$11 WHERE ID=${id} returning *`;
    return  db.query(queryString, this.employee);
    } catch(error){
        console.log(error);
    }

}

deleteAccount(id){
    try{
 let queryString = `DELETE FROM employee WHERE id=${id}`;
    return  db.query(queryString, this.employee);
    } catch(error){
        console.log(error);
    }
   
}

allAcounts(){
    try{
let queryString = `SELECT * FROM employee`;
    return db.query(queryString);
    } catch(error){
        console.log(error);
    }
    
       
}

saveImgageUrl(id, imgUrl){
    try{
        let  queryString = `UPDATE employee SET img_url =$1 WHERE ID=${id} returning *`;
        return  db.query(queryString, [imgUrl]);
        } catch(error){
            console.log(error);
        }
}

}

module.exports = Employee;

