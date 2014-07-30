Template.datemarkerCard.helpers({ 

	bodySummary: function() { 
		datemarkerBody = this.body 
		datemarkerBodyLength = datemarkerBody.length
		if(datemarkerBodyLength >= 235){
			newBodyText = datemarkerBody.slice(0, 235)
			bodySummary = newBodyText + "..."
			return bodySummary
		}else{
			return datemarkerBody
		}
	}
	//  NEED SAME AS ABOVE CODE FOR SUBTITLES
	// 
});


Template.datemarkerCard.events({ 
	// 
});