Template.manageLegendListItem.helpers({

	condensedTitle: function() { 
		fullTitle = this.title
		titleLength = fullTitle.length
		if(titleLength >= 14){
			newTitle = fullTitle.slice(0, 14)
			newTitle = newTitle + "..."
			return newTitle
		}else{
			return fullTitle
		}
	}


});