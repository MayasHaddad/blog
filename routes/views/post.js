var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = req.params.section;
	locals.filters = {
		post: req.params.post
	};
	locals.data = {
		posts: []
	};
	
		// Load the current category
	view.on('init', function(next) {
		keystone.list('PostCategory').model.findOne({ key: locals.section }).exec(function(err, result) {
			locals.data.category = result;
			next(err);
		});	
	});
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Post').model.findOne({
			state: 'published',
			slug: locals.filters.post
		})
		.where('categories').in([locals.data.category])
		.populate('author categories');
		
		q.exec(function(err, result) {
			locals.data.post = result;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('post');
	
};
