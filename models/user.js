var bookshelf = require('../db/bookshelf');

var User = bookshelf.Model.extend({
  tableName: 'users'
})

modules.exports = User;
