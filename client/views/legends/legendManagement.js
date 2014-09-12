Template.legendManagement.helpers({ 

	legendChapters: function(){
		chapters = Chapters.find({legendId: this._id}).fetch()
		console.log( chapters )
		return chapters.length
	}
	
});