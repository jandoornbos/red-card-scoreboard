/**
 * ScoreboardControllerController
 *
 * @description :: Server-side logic for managing Scoreboardcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  show: function(req, res) {
    JokeService.getScore(function(result) {
      return res.view('scoreboard.ejs', {
        scores : result
      });
    });
  }

};

