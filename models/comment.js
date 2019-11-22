const db = require('../services/database');

class Comment{

constructor(empId, postId, body, date){

    this.empId = empId;
    this.title = postId;
    this.body = body;
this.date = date;
}

set comment(val){
([this.empId, this.postId, this.body, this.date])
}

get comment(){
    return([this.empId, this.postId, this.body, this.date]);
}

 async save(){
    try{
  let queryString = `INSERT INTO comment(emp_Id, postId, body, date_Create) VALUES($1, $2, $3, $4) returning *`;
 return   db.query(queryString, this.comment);
 }
    catch(error){
        console.log(error);
    }
  
} 

async viewOne(commentId){
    try{
  let queryString = `SELECT * FROM article WHERE id=${commentId}`;
 return db.query(queryString);
    
    } catch(error){
        console.log(error);
    }
  
}

async viewAll(postId){
    try{
  let queryString = `SELECT * FROM comment WHERE post_id =${postId}`;
 return db.query(queryString);
    
    } catch(error){
        console.log(error);
    }
  
}

async edit(commentId, empId){
    try{
 let queryString = `UPDATE article SET title=$1, body=$2, date_updated=$3, tag=$4 WHERE id=${commentId} AND emp_id=${empId} returning *`;
 console.log("editing Comment");   
 return db.query(queryString, [this.body, this.date]);
    } catch(error){
       console.log(error); 
    }
   
}

async flag(){

}
async delete(commentId, empId){
    try{
    let queryString = `DELETE FROM article WHERE id=${commentId} AND emp_id=${empId}`
    return  db.query(queryString, this.comment);
    } catch(error){
       console.log(error); 
    }

}


}

module.exports = Comment;

