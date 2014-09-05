Template.manageLegendList.helpers({ 
	legends: function() {
		// needs refactoring... call at the router level?
		return Legends.find({ userId: Meteor.userId() }, {sort: {submitted: -1}});
	}
});
