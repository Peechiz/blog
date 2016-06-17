var bookshelf = require('../db/bookshelf');
var Post = require('./post');
var User = require('./user');

var Comment = bookshelf.Model.extend({
  tableName: 'comments',
  posts: function(){
    return this.belongsTo(Post);
  }
})

module.exports = Comment;
