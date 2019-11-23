'use strict';

const commentModel = require ('../models/comment');

const commentObj = new commentModel();


//create an comment
exports.createComment = async (req, res) => {
  let dateString = new Date ();
    let comment = new commentModel (
        req.params.empId,
      req.body.title,
      req.body.comment,
      dateString,
 req.body.tag
    );
    
   comment.save()
      .then (result => {

        res.status(200).json ({
          status: 'success',
          data: {
            message: 'Comment successfully saved',
            commentId: result.rows[0].id,
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



//view one comment
exports.comment = async (req, res) => {
  try {
    let {rows} = await commentObj.viewOne (req.params.id);
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


//view all comments
exports.allComments = async (req, res) => {
  try {
    let {rows} = await commentObj.viewAll();
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


//delete an comment
exports.deleteComment = async (req, res) => {
  try {
    await commentObj.delete (req.params.id, req.params.empId);
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

//update an comment
exports.updateComment = async (req, res) => {
  let dateString = new Date ();
  let comment = new commentModel (
      req.params.empId,
     req.body.title,
     req.body.body,
     dateString,
req.body.tag
   );

  try {
    let {rows} = await comment.edit(req.params.id, req.params.empId);
    console.log (rows);
    return res.status(200).json ({
      status: 'success',
      Message: "Comment edited successfully",
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
