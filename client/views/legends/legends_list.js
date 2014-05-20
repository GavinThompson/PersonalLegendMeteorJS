Template.legendsList.helpers({ 
	legends: function() {
		return Legends.find({}, {sort: {submitted: -1}});
	}
});