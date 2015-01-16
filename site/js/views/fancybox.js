var app = app || {};

app.FancyBox = Backbone.View.extend({
	tagName: 'div',
	className: 'bookFancyBox',	
	template: $('#bookTemplateFancyBox').html(),	

	render: function() {
		var templ = _.template( this.template );

		this.$el.html( templ( this.model.toJSON() ) )		
		this.createNavigationLink(Backbone.history.fragment);
		$.fancybox.open(this.$el);
	},

	createNavigationLink: function(href) {
		var $currItem = $('a[href="#' + href + '"]').parent();
		var prevNavLink = $currItem.prev().find('a').attr('href');
		var nextNavLink = $currItem.next().find('a').attr('href');

		this.$('.fancybox-prev').attr('href', prevNavLink);
		this.$('.fancybox-next').attr('href', nextNavLink);
	},

	showSiblingBook: function(e) {
		e.preventDefault();

		alert('Yeah!');
	}
});
