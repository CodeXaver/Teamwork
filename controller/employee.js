
const db = require('../services/database');
const employeeModel = require('../models/employee');
let  employee = new employeeModel();


//create acount
exports.createAccount = async (req, res) => {

   let employee = new employeeModel(   req.body.firstName,
    req.body.lastName,
        req.body.email,
     req.body.password,
    req.body.gender,
    req.body.jobRole,
    req.body.department,
    req.body.address,
    req.body.dateOfBirth);
//let dateOfBirth = new Date().toISOString;   
// let queryParam = [
//   req.body.firstName,
// req.body.lastName,
//     req.body.email,
//  req.body.password,
// req.body.gender,
// req.body.jobRole,
// req.body.department,
// req.body.address,
// req.body.dateOfBirth];

// let queryString = `INSERT INTO employee(firstname, lastname, email, password, gender, jobrole, department, address, dateofbirth) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *`;

try {
    let  {rows} = await employee.createAccount();
     console.log(rows);
    return res.status(200).send(rows[0]);
  } catch(error) {
      console.log(error);
    return res.status(400).send(error);
  }
  
}



exports.account = async (req, res) => {
 
try {
 let {rows} = await  employee.viewProfile(req.params.id);
    return res.status(200).send(rows[0]);
  } catch(error) {
    return res.status(400).send(error);
  }

} 

exports.deleteAccount = async (req, res) => {
   
    let queryString = `DELETE FROM employee WHERE id=${req.params.id}`

try {
     await db.query(queryString);
    return res.status(200).send("successfully Deleted");
  } catch(error) {
    return res.status(400).send(error);
  }

}

exports.updateAcount = async (req, res) => {
    let employee = new employeeModel(   req.body.firstName,
        req.body.lastName,
            req.body.email,
         req.body.password,
        req.body.gender,
        req.body.jobRole,
        req.body.department,
        req.body.address,
        req.body.dateOfBirth);

        try {
            let  {rows} = await employee.editProfile(req.params.id);
             console.log(rows);
            return res.status(200).send(rows[0]);
          } catch(error) {
              console.log(error);
            return res.status(400).send(error);
          }
          
}