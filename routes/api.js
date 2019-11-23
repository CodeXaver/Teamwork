const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employee');
const articleController = require('../controller/article');
const gifController = require('../controller/gif');
const commentController = require('../controller/comment');
const imagePaser = require('../middleware/upload');
const auth = require('../middleware/auth');
const role = require('../middleware/role');


//home page
router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
  
}) );

//Admin create employee account
router.post('/auth/create-user', auth, role, employeeController.createAccount);

//upload profile image
router.post('/image/:id', auth, imagePaser.single("image"), employeeController.saveImage);

//All employees data
router.get('/employees', auth, role, employeeController.allAcounts);

//Single employee data
router.get('/employees', auth, role, employeeController.allAcounts);

//employee data
router.get('/employee/:id',auth, employeeController.account);

//delete employee account
router.delete('/employee/:id', auth, role, employeeController.deleteAccount);

//update employee account
router.patch('/employee/:id', auth, employeeController.updateAcount);

//authentication
router.post('/signin', employeeController.login);




//retrieve  all gif
router.get('/gifs/:empId', auth, gifController.allGifs );
//retrieve a gif
router.get('/gif/:id/:empId', auth, gifController.gif );

//save gif
router.post('/gif/:empId',auth, imagePaser.single("image"), gifController.createGif );

//retrieve gif
router.delete('/gif/id/:empId', auth, gifController.deleteGif);

//update gif
router.patch('/gif/:id/empId', auth, gifController.updateGif );




//retrieve all article
router.get('/articles/:empId', auth, articleController.allArticles);

//retrieve an article
router.get('/article/:id/:empId', auth, articleController.article );


//save article
router.post('/articles/:empId', auth, articleController.createArticle );

//edit an article
router.patch('/article/:id/:empId', auth, articleController.updateArticle );

//delete an article
router.delete('/article/:id/:empId', auth, articleController.deleteArticle);




//save comment for an article
router.post('/comments/:postId/:empId', auth, commentController.createComment );

//save comment for an article
router.get('/comments/:postId/:empId', auth, commentController.allComments);

//Edit comment for an article
router.patch('/comments/:postId/:empId', auth, commentController.updateComment);

//Delete comment for an article
router.delete('/comments/:commentId/:empId', auth, commentController.deleteComment);

//view article by date with most rescent
router.get('/articles/recent', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}) );



module.exports = router;