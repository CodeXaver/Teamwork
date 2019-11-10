var request = require("request");

var base_url = "http://localhost:8000/api/employee/4"
describe("Employee api", function() {
     describe("GET /employee", function() {
         it("returns status code 200", function(done) {
             request.get(base_url, function(error, response, body) {
                console.log('error:', error); 
                console.log('statusCode:', response && response.statusCode); 
                console.log('body:', body); 
             expect(response.statusCode).toBe(200);
             done();
         });
    });
      } )});