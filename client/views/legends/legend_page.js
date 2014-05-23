Template.legendPage.helpers({ 
	datemarkers: function() {
		return Datemarkers.find({legendId: this._id});
	}
});