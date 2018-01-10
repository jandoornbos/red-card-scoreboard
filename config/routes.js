/**
 * Route Mappings
 * (sails.config.routes)
 */

module.exports.routes = {

  '/': 'ScoreboardController.show',
  '/vote' : 'VoteController.vote',
  '/vote/sendVote' : 'VoteController.sendVote',
  '/joke/create' : 'JokeController.new'

};
