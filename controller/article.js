'use strict';

const articleModel = require ('../models/article');

const articleObj = new articleModel();


//create an article
exports.createArticle = async (req, res) => {
  let dateString = new Date ();

    let article = new articleModel (
     
     req.body.id,
        req.body.empId,
      req.body.title,
      req.body.body,
      dateString,
 req.body.tag
    );
    
   article.save()
      .then (result => {
        res.status(200).json ({
          status: 'success',
          data: {
            message: 'Article successfully saved',
            userId: result.rows[0].id,
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
  }



//view one article
exports.article = async (req, res) => {
  try {
    let {rows} = await articleObj.view (req.params.id);
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


//view all articles
exports.allArticles = async (req, res) => {
  try {
    let {rows} = await articleObj.allArticles();
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


//delete an article
exports.deleteArticle = async (req, res) => {
  try {
    await articleObj.delete (req.params.id);
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

//update an articel
exports.updateAcount = async (req, res) => {
  let dateString = new Date ();
  let article = new articleModel (
     
    req.body.id,
       req.body.empId,
     req.body.title,
     req.body.body,
     dateString,
req.body.tag
   );

  try {
    let {rows} = await article.edit(req.params.id);
    console.log (rows);
    return res.json ({
      status: 'success',
      Message: "Article edited successfully",
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
