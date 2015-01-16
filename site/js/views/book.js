var app = app || {};

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: $( '#bookTemplate' ).html(),
	templateFancyBox: $('#bookViewTemplateFancyBox').html(),

	events: {
		'click .delete': 'deleteBook'
	},

	deleteBook: function() {
		//Delete model
		this.model.destroy();

		//Delete view
		this.remove();
	},

	render: function() {
		//tmpl is a function that takes a JSON object and returns html
		var tmpl = _.template( this.template );

		this.model.set('id', this.model.id);
		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		this.$el.html( tmpl( this.model.toJSON() ) );

		return this;
	},

	renderFancyBox: function() {
		var templ = _.template( this.templateFancyBox );

		$.fancybox.open( templ( this.model.toJSON() ) );
	}
});
