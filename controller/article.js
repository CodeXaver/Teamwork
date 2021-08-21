'use strict';

const articleModel = require ('../models/article');

const articleObj = new articleModel();


//create an article
exports.createArticle = async (req, res) => {
  let dateString = new Date ();
    let article = new articleModel (
        req.params.empId,
      req.body.title,
      req.body.article,
      dateString,
 req.body.tag
    );
    
   article.save()
      .then (result => {

        res.status(200).json ({
          status: 'success',
          data: {
            message: 'Article successfully saved',
            artId: result.rows[0].id,
          },
        }); 
      })
      .catch ( (error)=> {
        res.status(400).json ({
          status: "error",
          error: error,
        });

        console.log (error);
      });
  }



//view one article
exports.article = async (req, res) => {
  try {
    let {rows} = await articleObj.viewOne (req.params.id);
    console.log (rows[0]);
    res.status(200).json ({
      status: 'success',
      data: rows[0],
    });
  } catch (error) {
    console.log (error);
    return res.status(400).json ({
      status: "error",
      error: error
    });
  }
};


//view all articles
exports.allArticles = async (req, res) => {
  try {
    let {rows} = await articleObj.viewAll();
    return res.status(200).json({
      status: "success",
      data: rows
    })
  } catch (error) {
    return res.status(400).json ({
      status: "error",
      error: error
    });
  }
};


//delete an article
exports.deleteArticle = async (req, res) => {
  try {
    await articleObj.delete (req.params.id, req.params.empId);
    return res.status(200).json({
      status: "success",
      message: "'successfully Deleted'"
    }) 
  } catch (error) {
        console.log(error);
    return res.status(400).json ({
      status: "error",
      error: error
    });
  
}
}

//update an articel
exports.updateArticle = async (req, res) => {
  let dateString = new Date ();
  let article = new articleModel (
      req.params.empId,
     req.body.title,
     req.body.body,
     dateString,
req.body.tag
   );

  try {
    let {rows} = await article.edit(req.params.id, req.params.empId);
    console.log (rows);
    return res.status(200).json ({
      status: 'success',
      Message: "Article edited successfully",
      data: rows[0],
    });
  } catch (error) {
    console.log (error);
    return res.status(400).json ({
      status: "error",
      error: error
    });
  }
};
