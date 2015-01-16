var app = app || {};

var Library = Backbone.Collection.extend({
	model: app.Book,
	url: '/api/books'
});

app.BookLibrary = new Library();