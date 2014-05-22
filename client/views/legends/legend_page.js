Template.legendPage.helpers({ 
	comments: function() {
		return Comments.find({legendId: this._id});
	}
});