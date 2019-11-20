
const db = require('../services/database');

class Article{

constructor(id, empId, title, body, dateCreated, tag){

    this.id = id;
    this.empId = empId;
    this.title = title;
    this.body = body;
this.dateCreated = dateCreated;
this.tag = tag;
}

set article(val){
([this.id, this.empId, this.title, this.body, this.dateCreated, this.tag])
}

get employee(){
    return([this.id, this.empId, this.title, this.body, this.dateCreated, this.tag]);
}

 async save(){
    try{
  let queryString = `INSERT INTO article(id, empId, title, body, dateCreated, tag) VALUES($1, $2, $3, $4, $5) returning *`;
 return   db.query(queryString, this.article);
 }
    catch(error){
        console.log(error);
    }
  
} 

async view(val){
    try{
  let queryString = `SELECT * FROM article WHERE id=${val}`
 return db.query(queryString);
    
    } catch(error){
        console.log(error);
    }
  
}

async edit(val){
    try{
 let queryString = `UPDATE article SET title=$1, body=$2, img_url=$3, date_updated=$4, tag=$5, WHERE ID=${val} returning *`;
    return db.query(queryString, this.article);
    } catch(error){
       console.log(error); 
    }
   
}

async flag(){

}
async delete(id){
    try{
    let queryString = `DELETE FROM article WHERE id=${id}`
    return  db.query(queryString, this.employee);
    } catch(error){
       console.log(error); 
    }

}


}

module.exports = Article;

