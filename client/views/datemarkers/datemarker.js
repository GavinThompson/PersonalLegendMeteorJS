Template.datemarker.helpers({ 
	submittedText: function() {
		return new Date(this.submitted).toString(); 
	},
	// test
	markerID: function(){
		// console.log(this._id)
		return this._id
	},

	index: 0,
	indexInc: function(){
		return Template.datemarker.index++;
	}


});



Template.datemarker.rendered = function() {
    // Anything here will get executed right when the template
    // is finished rendering.

    console.log( "test.....")

};