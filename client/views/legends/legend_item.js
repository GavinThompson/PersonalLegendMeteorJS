Template.legendItem.helpers({ 
	domain: function() {
		var a = document.createElement('a'); 
		a.href = this.url;
		return a.hostname;
	},

	ownLegend: function() {
		return this.userId == Meteor.userId(); 
	}
});