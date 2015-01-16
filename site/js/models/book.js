var app = app || {};

app.Book = Backbone.Model.extend({
	defaults: {
		id: '',		
		coverImage: 'img/placeholder.jpg',
		title: 'No title'		
	},

	idAttribute: '_id'
});
