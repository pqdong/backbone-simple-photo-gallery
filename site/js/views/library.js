var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: $( '#books' ),

	initialize: function() {				
		app.BookLibrary.fetch();
		this.render();

		this.listenTo( app.BookLibrary, 'add', this.renderBook );
		this.listenTo( app.BookLibrary, 'reset', this.render );
		this.listenTo( app.BookLibrary, 'view', this.viewBook );		
	},

	events: {
		'click #add': 'addBook'
	},

	addBook: function( e ) {
		e.preventDefault();

		var formData = {};

		$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
			if( $( el ).val() != "" )
			{				
				formData[ el.id ] = $( el ).val();				
			}
		});

		app.BookLibrary.create( formData );
	},	

	// render library by rendering each book in its collection
	render: function() {
		app.BookLibrary.each(function( item ) {
			this.renderBook( item );
		}, this );
	},

	// render a book by creating a BookView and appending the
	// element it renders to the library's element
	renderBook: function( item ) {
		var bookView = new app.BookView({
			model: item
		});
		this.$el.append( bookView.render().el );
	},

	renderFancyBox: function(item) {
		var fancyBoxView = new app.FancyBox({
			model: item
		});
		
		fancyBoxView.render();
	},

	viewBook: function(id) {		
		var model = app.BookLibrary.get(id);

		this.renderFancyBox(model);
	}
});
