module.exports = {

  getJokes: function(result) {
    Joke.find().exec(function(err, jokes) {
      if(err) throw err;
      result(jokes);
    });
  },

  getJokeById: function(id, result) {
    Joke.findOne({ id: id }).populate('who').exec(function(err, joke) {
      if(err) throw err;
      result(joke);
    });
  },

  createJoke: function(joke, result) {
    Joke.create(joke).exec(function(err, created) {
      if(err) throw err;

      module.exports.getJokeById(created.id, function(joke) {
        setTimeout(module.exports.endVoting, 10000);
        result(joke);
      });
    });
  },

  endVoting: function() {
    sails.sockets.blast('vote_ended');
    // Send leaderboard again
    module.exports.blastLeaderboard();
  },

  blastLeaderboard: function() {
    module.exports.getScore(function(result) {
      sails.sockets.blast('update_scoreboard', result);
    });
  },

  getScore: function(result) {
    Joke.query('SELECT user.name, COUNT(*) as `amount` ' +
    'FROM joke ' +
    'INNER JOIN user ON joke.who = user.id ' +
    'WHERE joke.votes > 5 ' +
    'GROUP BY joke.who', function(err, rawResult) {
      if(err) throw err;
      result(rawResult);
    });
  }

};
