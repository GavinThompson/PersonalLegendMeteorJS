Template.legendPage.helpers({ 
	datemarkers: function() {
		// var dms = Datemarkers.find({legendId: this._id}, {sort: {dateSpan: 1}});
		// console.log("dms")
		// console.log(dms)
		// console.log("ID")
		// console.log(this._id)
		return Datemarkers.find({legendId: this._id}, {sort: {dateSpan: 1}});
	}
});



Template.legendPage.rendered = function() {
    // Anything here will get executed right when the template
    // is finished rendering.

    console.log( "Init Skrollr ... begin")
	var skroll = skrollr.init()
	console.log( "Init Skrollr ... end")

};