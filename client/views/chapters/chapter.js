Template.chapter.helpers({

	submittedText: function() {
		return new Date(this.submitted).toString(); 
	},

	markerID: function(){
		// console.log(this._id)
		return this._id
	},

	index: 0,

	indexInc: function(){
		return Template.chapter.index++;
	},

	contentTop: 0,

	bkgColour: function(){
		hex = this.backgroundColour.substring(0, 7)
		// return hex
		console.log("hex")
		console.log(hex)
		
		colour1 = tinycolor(hex)

		colourRGB = colour1.toRgbString()
		console.log(colourRGB)	

		return colourRGB
	}
	
});



Template.chapter.rendered = function() {
    // Anything here will get executed right when the template
    // is finished rendering.

    console.log( "test.....")
};