var bookshelf = require('../db/bookshelf');

var Comment = bookshelf.Model.extend({
  tableName: 'comments'
})

modules.exports = Comment;
