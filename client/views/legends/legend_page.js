Template.legendPage.helpers({ 
	datemarkers: function() {
		return Datemarkers.find({legendId: this._id}, {sort: {dateSpan: 1}});
	}
});