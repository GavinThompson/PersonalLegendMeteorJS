Template.legendPage.helpers({ 
	chapters: function() {
		return Chapters.find({legendId: this._id}, {sort: {dateSpan: 1}});
	},

	legendFirstDate: function(){
		// 
	},

	legendLastDate: function(){
		// 
	}
});



Template.legendPage.rendered = function() {
    // Anything here will get executed right when the template
    // is finished rendering.

    console.log( "Init Skrollr ... begin")
	var skroll = skrollr.init()
	console.log( "Init Skrollr ... end")

};