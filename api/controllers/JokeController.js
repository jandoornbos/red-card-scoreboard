/**
 * JokeController
 *
 * @description :: Server-side logic for managing Jokes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  new: function(req, res) {
    User.find().exec(function(err, users) {
      return res.view('joke/new', {
        users: users
      });
    });

  },

  send: function(req, res) {
    if (!req.isSocket) {
      res.badRequest();
    }

    JokeService.createJoke(req.body, function(result) {
      sails.sockets.blast('vote_started', result, req);
      return res.json({
        success: true
      })
    });
  }

};

