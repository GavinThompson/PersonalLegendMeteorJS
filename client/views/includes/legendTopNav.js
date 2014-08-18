Template.legendTopNav.helpers({ 


	ownLegend: function() {
		return this.userId == Meteor.userId(); 
	},

	navIndex: 0,

	navIndexInc: function(){
		return Template.legendTopNav.navIndex++;
	},

	chapterDivs: function(){
		return Chapters.find({legendId: this._id}, {sort: {dateSpan: 1}});
	}

});


Template.legendTopNav.events({ 
	// 
	'click .topNavLink': function( e ) {
		e.preventDefault();
		
		var chapterID = $(e.currentTarget).attr( "href" )
		console.log("chapterID")
		console.log(chapterID)
		$('html, body').animate({
			scrollTop: $( chapterID).offset().top - 80 
		}, 'slow', 'linear');
	},

	'mouseenter .topNavElement': function( e ) {
		e.preventDefault();

		console.log( e.target )
		$(e.target).css({
			"background-color": "rgb(119, 206, 214)",
			"border": "1px solid ghostwhite"
		})
	},

	'mouseleave .topNavElement': function( e ) {
		e.preventDefault();

		console.log( e.target )
		$(e.target).css({
			"background-color": "ghostwhite",
			"border": "1px solid rgb(119, 206, 214)"
		})
	}
});