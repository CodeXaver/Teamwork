const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employee');


//home page
router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
  
}) );

//Admin create employee account
router.post('/create', employeeController.createAccount);


//employee data
router.get('/employee/:id', employeeController.account);

//delete employee account
router.delete('/delete/:id', employeeController.deleteAccount);

//delete employee account
router.put('/update/:id', employeeController.updateAcount);

//authentication
router.get('/login', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );


//save gif
router.post('/gif', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

//retrieve gif
router.get('/gif', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

//save article
router.post('/article', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

//edit an articlee
router.put('/articles/id', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

//delete an article
router.delete('/articles/id', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

//delete a gif
router.delete('/gifs/id', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

//save comment for an article
router.post('/comments/articleid', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

//save comment for a gif
('/comments/gifid', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

//view article by date with most rescent
router.get('/articles/mostrecent', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

//view a specified article
router.get('/articles/articleid', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );

module.exports = router;