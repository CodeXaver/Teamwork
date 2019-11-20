var request = require("request");

var base_url = "http://localhost:8000/"

describe("Employee api", ()=> {

  beforeAll(()=> {
    let formData ={
      email : "peterpaul@gmail.com",
    password :"peter"
    }

     request.post({url:base_url + "signin", formData: formData}, (error, response)=> {
      console.log('error:', error); 
      console.log('statusCode:', response && response.statusCode); 
      console.log('body:', response);
      console.log(formData);
   
});

  }, 2000 );

  afterAll(()=> {
  
  });


          // create employees
          describe("post /employees", ()=> {
              let formData ={
                firstName : "Queen",
                lastName : "Bassi",
                email : "queenbassy@gmail.com",
              password :"password",
          gender: "female",
          jobRole: "employee",
           department: "logistics",
          address: "24, oremeji, iju, lagos",
            dateOfBirth: "2000-05-06"
              }
            it("returns status code 200", (done)=> {
                request.post({url:base_url + "employees", formData: formData}, (error, response, body)=> {
                   console.log('error:', error); 
                   console.log('statusCode:', response && response.statusCode); 
                   console.log('body:', body); 
                expect(response.statusCode).toBe(200);
                done();
            });
       });
         } )

      // All employees
    describe("GET /employees", ()=> {
        it("returns status code 200", (done)=> {
            request.get(base_url + "employees", (error, response, body)=> {
               console.log('error:', error); 
               console.log('statusCode:', response && response.statusCode); 
               console.log('body:', body); 
            expect(response.statusCode).toBe(200);
            done();
        });
   });
     } )
  /**   
      // one employees
      describe("GET /employees", ()=> {
        it("returns status code 200", (done)=> {
            request.get(base_url + "employees/7", (error, response, body)=> {
               console.log('error:', error); 
               console.log('statusCode:', response && response.statusCode); 
               console.log('body:', body); 
            expect(response.statusCode).toBe(200);
            done();
        });
   });
     } )

          // delete employees
          describe("delete /employees", ()=> {
            it("returns status code 200", (done)=> {
                request.delete(base_url + "employee/5", (error, response, body)=> {
                   console.log('error:', error); 
                   console.log('statusCode:', response && response.statusCode); 
                   console.log('body:', body); 
                expect(response.statusCode).toBe(200);
                done();
            });
       });
         } )

    // update employees
    describe("put /employees", ()=> {
        let formData ={
            firstName : "Queen",
            lastName : "Bassi",
            email : "queenbassy@gmail.com",
          password :"password",
      gender: "female",
      jobRole: "employee",
       department: "logistics",
      address: "24, oremeji, iju, lagos",
        dateOfBirth: "2000-05-06"
          }

        it("returns status code 200", (done)=> {
            request.put({url:base_url + "employee/5", formData:formData}, (error, response, body)=> {
               console.log('error:', error); 
               console.log('statusCode:', response && response.statusCode); 
               console.log('body:', body); 
            expect(response.statusCode).toBe(200);
            done();
        });
   });
     } )
*/
    }); 

    