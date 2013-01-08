
/*
 * GET home page.
 */

var items=new Array();
items.push("");

exports.index = function(req, res){
  res.render('index', { title: 'Express', items:items});
};

exports.form = function(req, res){
  res.render('form', { title: 'New Entry' })
};

exports.create = function(req, res){
  items.unshift(req.body.text);
  res.redirect('/');
};
