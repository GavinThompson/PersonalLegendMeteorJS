Template.legendViewSideNav.helpers({
	chapters: function() {
		return Chapters.find({legendId: this._id, published: true}, {sort: {dateSpan: 1}});
	},

	chaptersWithTOCIndex: function() {

		var chapters = Chapters.find({legendId: this._id, published: true}, {sort: {dateSpan: 1}});
	    
	    for(var i = 0; i < chapters.length; i++) {
	    	// Table of contents start on '1' - so add '2' to 'i'
	        chapters[i].tableOfContentIndex = i+2;
	    }

	    return chapters;
	},

	condensedChapterTitle: function() { 
		fullTitle = this.subtitle
		titleLength = fullTitle.length
		if(titleLength >= 14){
			newTitle = fullTitle.slice(0, 16)
			newTitle = newTitle + "..."
			return newTitle
		}else{
			return fullTitle
		}
	}
});