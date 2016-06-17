var bookshelf = require('../db/bookshelf');
var User = require('./user');
var Comment = require('./comment')

var Post = bookshelf.Model.extend({
  tableName: 'posts',
  users: function(){
    return this.belongsTo(User);
  },
  comments: function(){
    return this.hasMany(Comment)
  }
})

module.exports = Post;
