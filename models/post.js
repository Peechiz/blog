var bookshelf = require('../db/bookshelf');

var Post = bookshelf.Model.extend({
  tableName: 'posts'
})

modules.exports = Post;
