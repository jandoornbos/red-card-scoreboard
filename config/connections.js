/**
 * Connections
 * (sails.config.connections)
 */

module.exports.connections = {

  localDiskDb: {
    adapter: 'sails-disk'
  },

  mysqlConnection: {
    adapter: 'sails-mysql',
    host: 'localhost',
    user: '',
    password: '',
    database: 'red-card-scoreboard'
  }

};
