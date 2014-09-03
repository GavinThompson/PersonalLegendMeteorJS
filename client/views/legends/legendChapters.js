Template.legendChapters.helpers({ 
	chapters: function() {
		return Chapters.find({legendId: this._id}, {sort: {dateSpan: 1}});
	}
});