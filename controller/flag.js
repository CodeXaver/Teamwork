const flagModel = require ('../models/gif');

const flagObj = new flagModel();


//create an gif
exports.flagPost = async (req, res) => {
  let dateString = new Date ();
    let flagM = new flagModel (
        req.params.empId,
      req.params.postId,
      dateString,
 req.body.isInappropriate
    );
    
   flagM.flag()
      .then (result => {

        res.status(200).json ({
          status: 'success',
          data: {
            message: 'Post successfully flagged inAppropriate',
            flagId: result.rows[0].id,
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




//view all flags
exports.allFlags = async (req, res) => {
  try {
    let {rows} = await flagObj.viewAll();
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


//delete an gif
exports.deleteFlag = async (req, res) => {
  try {
    await flagObj.delete (req.params.postId, req.params.empId);
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
