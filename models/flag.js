
const db = require('../services/database');

class Flag{

constructor(empId, postId, date, isInappropriate){
    this.empId = empId;
    this.postId =postId ;
this.date = date;
    this.isInappropriate = isInappropriate;
}

set gif(val){
([this.empId, this.postId, this.date, this.isInappropriate])
}

get gif(){
    return([this.empId, this.postId, this.date, this.isInappropriate]);
}

 async flag(){
    try{
   let queryString = `INSERT INTO article(emp_id, post_d, date_created, is_inappropriate ) VALUES($1, $2, $3, $4) returning *`;
 return   db.query(queryString, this.flag);
    } catch(error){
        console.log(error);
    }
 
 }

 //view all flags          
 async viewAll(){

    try{
    let queryString = `SELECT * FROM flag`
 return db.query(queryString);
    } catch(error){
     console.log(error);   
    }

    
}


async removeFlag(postId, empId){
    try{
 let queryString = `DELETE FROM flag WHERE id=${postId} AND emp_id=${empId}`
    return  db.query(queryString);
    } catch(error){
console.log(error);
    }
   
}



}

module.exports = Flag;

