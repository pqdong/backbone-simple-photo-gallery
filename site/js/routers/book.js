var Workspace = Backbone.Router.extend({
	routes: {
		'view/:id': 'viewBook'
	},
	viewBook: function(id) {
		app.BookLibrary.trigger('view', id);
	}
});

app.BookRouter = new Workspace();
Backbone.history.start();