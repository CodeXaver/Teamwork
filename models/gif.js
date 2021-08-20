
const db = require('../services/database');

class GIf{

constructor(id, empId, imgUrl, dateCreated, isInappropriate, tag){

    this.id = id;
    this.empId = empId;
    this.imgUrl = imgUrl;
this.dateCreated = dateCreated;
this.isInappropriate = isInappropriate;
this.tag = tag;
}

set gif(val){
([this.id, this.empId, this.title, this.body, this.imgUrl, this.dateCreated, this.isInappropriate, this.tag])
}

get gif(){
    return([this.firstName, this.lastName, this.email, this.password, this.gender, this.jobRole, this.department, this.address, this.dateOfBirth]);
}

 async save(){
    try{
   let queryString = `INSERT INTO article(id, empId, title, body, imgUrl, dateCreated, isInappropriate, tag) VALUES($1, $2, $3, $4, $5, $6, $7, $8) returning *`;
 return   db.query(queryString, this.article);
    } catch(error){
        console.log(error);
    }
 
 }


async view(id){
    try{
 let queryString = `SELECT * FROM article WHERE id=${id}`
 return db.query(queryString);
    
    } catch(error){
        console.log(error)
    }
   
}
async viewAll(){

    try{
    let queryString = `SELECT * FROM article`
 return db.query(queryString);
    } catch(error){
     console.log(error);   
    }

    
}

async delete(id){
    try{
 let queryString = `DELETE FROM gif WHERE id=${id}`
    return  db.query(queryString, this.employee);
    } catch(error){
console.log(error);
    }
   
}

async flag(){

}

}

module.exports = GIf;

