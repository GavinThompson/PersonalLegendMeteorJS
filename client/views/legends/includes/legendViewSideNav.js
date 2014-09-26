Template.legendViewSideNav.helpers({

	// chapters: function() {
	// 	// needs refactoring... call at the router level?
	// 	return Chapters.find({ legendId: this._id });
	// },

	// chaptersWithTOCIndex: function() {

	// 	var chapters = Chapters.find({ legendId: this._id }).fetch()
	    
	//     for(var i = 0; i < chapters.length; i++) {
	//     	// Table of contents start on '1' - so add '2' to 'i'
	//         chapters[i].tableOfContentIndex = i+2;
	//     }

	//     return chapters;
	// },

	// condensedChapterTitle: function() { 
	// 	fullTitle = this.subtitle
	// 	titleLength = fullTitle.length
	// 	if(titleLength >= 14){
	// 		newTitle = fullTitle.slice(0, 16)
	// 		newTitle = newTitle + "..."
	// 		return newTitle
	// 	}else{
	// 		return fullTitle
	// 	}
	// }

});

Template.legendViewSideNav.rendered = function() {
	console.log("Hello I'm rendered now!")
};
