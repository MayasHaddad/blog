var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = req.params.section;
	locals.data = {
		posts: [],
		categories: []
	};
	
	// Load the current category
	view.on('init', function(next) {
		keystone.list('PostCategory').model.findOne({ key: locals.section }).exec(function(err, result) {
			locals.data.category = result;
			next(err);
		});	
	});
	
	// Load the posts
	view.on('init', function(next) {
		
		var q = keystone.list('Post').paginate({
				page: req.query.page || 1,
				perPage: 10,
				maxPages: 10
			})
			.where('state', 'published')
			.where('categories').in([locals.data.category])
			.sort('-publishedDate')
			.populate('author categories');

		q.exec(function(err, results) {
			locals.data.posts = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render(locals.section);
	
};
