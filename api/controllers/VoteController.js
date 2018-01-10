/**
 * VoteController
 *
 * @description :: Server-side logic for managing Votes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  vote: function(req, res) {
    JokeService.getJokes(function(jokes) {
      return res.view('vote/vote', {
        jokes: jokes
      })
    });
  },

  sendVote: function(req, res) {
    if (!req.isSocket) {
      return res.badRequest();
    }

    JokeService.getJokeById(req.param('id'), function(response) {
      response.votes += 1;
      response.save();
      sails.sockets.blast('new_vote', { votes : response.votes }, req);
    });

    return res.json({
      success: true
    });
  }

};

