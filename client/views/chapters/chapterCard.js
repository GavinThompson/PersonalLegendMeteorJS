Template.chapterCard.helpers({ 

	bodySummary: function() { 
		chapterBody = this.body 
		chapterBodyLength = chapterBody.length
		if(chapterBodyLength >= 235){
			newBodyText = chapterBody.slice(0, 235)
			bodySummary = newBodyText + "..."
			return bodySummary
		}else{
			return chapterBody
		}
	}
	//  NEED SAME AS ABOVE CODE FOR SUBTITLES
	// 
});


// Template.chapterCard.events({ 
// 	// 
// });