var express = require('express'),
  router = express.Router(),
  knex = require('../db/bookshelf');

router.get('/', (req, res) => {
  // var users = [{name:'bob'},{name:'chuck'},{name:'ed'},{name:'jim'},{name:'lob'}];
  
  res.render('users/index', {users:users})
})

// router.post('/', (req,res) => {
//   var post = req.body;
//   post.year = parseInt(post.year);
//   knex('posts').insert({
//     name: post.name,
//     author: post.author,
//     year: post.year,
//     created_at: now,
//     updated_at: now
//   }).then((result) => {
//     res.redirect('/posts');
//   })
// })

module.exports = router;
