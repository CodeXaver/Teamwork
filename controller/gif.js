'use strict';

const gifModel = require ('../models/gif');

const gifObj = new gifModel();


//create an gif
exports.createGif = async (req, res) => {
    console.log(req.body.title);
  let dateString = new Date ();
    let gif = new gifModel (
        req.params.empId,
      req.body.title,
      req.file.url,
      dateString,
 req.body.tag
    );
    
   gif.save()
      .then (result => {

        res.status(200).json ({
          status: 'success',
          data: {
            message: 'Gif successfully saved',
            gifId: result.rows[0].id,
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



//view one gif
exports.gif = async (req, res) => {
  try {
    let {rows} = await gifObj.viewOne (req.params.id);
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


//view all gifs
exports.allGifs = async (req, res) => {
  try {
    let {rows} = await gifObj.viewAll();
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
exports.deleteGif = async (req, res) => {
  try {
    await gifObj.delete (req.params.id, req.params.empId);
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
exports.updateGif = async (req, res) => {
  let dateString = new Date ();
  let gif = new gifModel (
      req.params.empId,
     req.body.title,
     req.body.body,
     dateString,
req.body.tag
   );

  try {
    let {rows} = await gif.edit(req.params.id, req.params.empId);
    console.log (rows);
    return res.status(200).json ({
      status: 'success',
      Message: "Gif edited successfully",
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
