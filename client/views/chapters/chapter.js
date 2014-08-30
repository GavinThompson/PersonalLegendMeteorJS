Template.chapter.helpers({

	chapterThemeClass: function(){
		
		fetchedTheme = Themes.find({_id: this.chapterThemeId}).fetch()
		return fetchedTheme[0].name
	},

	chapterThemeBackgroundColour: function(){
		
		fetchedTheme = Themes.find({_id: this.chapterThemeId}).fetch()
		return fetchedTheme[0].backgroundColour
	},

	chapterThemeFontColour: function(){
		
		fetchedTheme = Themes.find({_id: this.chapterThemeId}).fetch()
		return fetchedTheme[0].fontColour
	},

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

	chapterImage: function() {
		// TEMPORARY - NEEDS TO BE REPLACED WHEN USERS CAN UPLOAD PHOTOS - CURRENTLY THROWS IN STOCK PHOTO FROM PUBLIC FOLDER
		minNumber = 1
		maxNumber = 15
		randNumber = Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber) 
		return randNumber
		// FUNCTION GENERATES INTEGER 1-15 RANDOMLY to pull utilize /public/images/stock/7.jpg for example -- code currently inline style
	}

	// bkgColour: function(){
	// 	hex = this.backgroundColour.substring(0, 7)
	// 	// return hex
	// 	console.log("hex")
	// 	console.log(hex)
		
	// 	colour1 = tinycolor(hex)

	// 	colourRGB = colour1.toRgbString()
	// 	console.log(colourRGB)	

	// 	return colourRGB
	// },


	
});



Template.chapter.rendered = function() {
    // Anything here will get executed right when the template
    // is finished rendering.


    $('.parallax').parallax("50%", 0.8);
    $('.parallax-content').parallax("50%", 0.3);

    console.log( "test.....")
};