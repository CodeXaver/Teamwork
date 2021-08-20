'use strict';

const employeeModel = require ('../models/employee');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

const employeeObj = new employeeModel ();


//create acount
exports.createAccount = async (req, res) => {
  let dateString = new Date ();

  bcrypt.hash (req.body.password, 10).then (hash => {
    let employee = new employeeModel (
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      hash,
      req.body.gender,
      req.body.jobRole,
      req.body.department,
      req.body.address,
      req.body.dateOfBirth,
      req.body.isAdmin,
      dateString
    );
    
    employee
      .createAccount ()
      .then (result => {

        const token = jwt.sign (
          {
            userId: result.rows[0].id,
            isAdmin: result.rows[0].is_admin,
          },
          process.env.SECRET,
          {expiresIn: '1h'}
        );

        res.status(200).json ({
          status: 'success',
          data: {
            message: 'User account successfully created',
            userId: result.rows[0].id,
            token: token
          },
        }); 

      })
      .catch ( (error)=> {
        res.json ({
          status: "error",
          error: error,
        });

        console.log (error.detail);
      });
  });
};


// login check and assign token
module.exports.login = (req, res) => {
  employeeObj
    .login (req.body.email)
    .then (employee => {
      if (!employee) {
        return res.json ({
          status: "error",
          error: new Error ('User not found!'),
        });
      }
      bcrypt
        .compare (req.body.password, employee.rows[0].password)
        .then (valid => {
          if (!valid) {
            return res.json ({
              status: "error",
              error: new Error ('Incorrect password!'),
            });
          }
          const token = jwt.sign (
            {
              userId: employee.rows[0].id,
              isAdmin: employee.rows[0].is_admin,
            },
            process.env.SECRET,
            {expiresIn: '1h'}
          );
          res.json ({
            status: 'success',
            data: {
              userId: employee.rows[0].id,
              token: token,
            },
          });
        })
        .catch (error => {
          res.json ({
            status: "error",
            error: error
          });
        });
    })
    .catch (error => {
      res.json ({
        status: "error",
        error: error,
      });
      console.log (error);
    });
};


//profile info
exports.account = async (req, res) => {
  try {
    let {rows} = await employeeObj.profile (req.params.id);
    console.log (rows[0]);
    res.json ({
      status: 'success',
      data: rows[0],
    });
  } catch (error) {
    console.log (error);
    return res.json ({
      status: "error",
      error: error
    });
  }
};


//All Accounts
exports.allAcounts = async (req, res) => {
  try {
    let {rows} = await employeeObj.allAcounts ();
    return res.json({
      status: "success",
      data: rows
    })
  } catch (error) {
    return res.json ({
      status: "error",
      error: error
    });
  }
};



exports.deleteAccount = async (req, res) => {
  try {
    await employeeModel.deleteAccount (req.params.id);
    return res.json({
      status: "success",
      message: "'successfully Deleted'"
    }) ();
  } catch (error) {
    return res.json ({
      status: "error",
      error: error
    });
}
}

exports.updateAcount = async (req, res) => {
  let dateString = new Date ();
  let employee = new employeeModel (
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password,
    req.body.gender,
    req.body.jobRole,
    req.body.department,
    req.body.address,
    req.body.dateOfBirth,
    dateString,
    req.body.isAdmin
  );

  try {
    let {rows} = await employee.editProfile (req.params.id);
    console.log (rows);
    return res.json ({
      status: 'success',
      data: rows[0],
    });
  } catch (error) {
    console.log (error);
    return res.json ({
      status: "error",
      error: error
    });
  }
};

//save imageUrl to database
exports.saveImage = async (req, res) => {
  console.log (req.file.url);

  try {
    let {rows} = await employeeObj.saveImgageUrl (req.params.id, req.file.url);
    console.log (rows);
    return res.json ({
      status: 'success',
      data: rows[0].img_url,
    });
  } catch (error) {
    console.log (error);
    return res.json ({
      status: "error",
      error: error
    });
  }
};
