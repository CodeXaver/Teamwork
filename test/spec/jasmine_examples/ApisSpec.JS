
const Request = require('request');

describe("Server", function() {
  
  var server;
  beforeAll(() => {
    server = require('../../../bin/www');
  });
  afterAll(() => {
    server.close();
  })

  // beforeEach(function() {
  //  var routes  = new Router();
   
  // });

  // it("should return a 200 response code", function() {
  //   Router.get('/');
  //   expect(Router.res.status).toEqual("200");
  // });

  describe("Get /", () => {
    var data = {};

    beforeAll((done) => {
      Request.get("http://localhost:3000/", (error, response, body) => {
        data.status = response.statusCode;
        data.body = body;
        done();
      });
    });

    it("status 200", () => {
      expect(data.status).toBe(200);
    });
    it("Body", () => {
expect(data.body).toBe( 'Welcome to the beginning of nothingness.');
    });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});

});
