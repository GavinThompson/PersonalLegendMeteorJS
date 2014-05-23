Template.legendItem.helpers({ 

	ownLegend: function() {
		return this.userId == Meteor.userId(); 
	}

});