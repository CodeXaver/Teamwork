
const db = require('../services/database');

class GIf{

constructor(empId, title, imgUrl, date, tag){
    this.empId = empId;
    this.title = title;
    this.imgUrl = imgUrl;
this.date = date;
this.tag = tag;
}

set gif(val){
([this.empId, this.title, this.imgUrl, this.date, this.tag])
}

get gif(){
    return([this.empId, this.title, this.imgUrl, this.date, this.tag]);
}

 async save(){
    try{
   let queryString = `INSERT INTO article(emp_id, title, img_url, date_created, tag) VALUES($1, $2, $3, $4, $5) returning *`;
 return   db.query(queryString, this.gif);
    } catch(error){
        console.log(error);
    }
 
 }

 async edit(artId, empId){
    try{
        let queryString = `UPDATE article SET title=$1, img_url=$2, date_updated=$3, tag=$4 WHERE id=${artId} AND emp_id=${empId} returning *`;
        console.log([this.title, this.body, this.date, this.tag]);   
        return db.query(queryString, [this.title, this.body, this.date, this.tag]);
           } catch(error){
              console.log(error); 
           } 

 }

async viewOne(id){
    try{
 let queryString = `SELECT * FROM article WHERE id=${id}`
 return db.query(queryString);
    
    } catch(error){
        console.log(error)
    }
   
}
async viewAll(){

    try{
    let queryString = `SELECT * FROM artcle`
 return db.query(queryString);
    } catch(error){
     console.log(error);   
    }

    
}

async delete(gifId, empId){
    try{
 let queryString = `DELETE FROM article  WHERE id=${gifId} AND emp_id=${empId}`
    return  db.query(queryString, this.gif);
    } catch(error){
console.log(error);
    }
   
}

async flag(){

}

}

module.exports = GIf;

