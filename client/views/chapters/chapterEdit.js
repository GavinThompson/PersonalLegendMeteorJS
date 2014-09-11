
Template.chapterEdit.rendered = function() {
	// Fancy dropdown "chosen" 
	$('.select-chosen').chosen({width: "100%"});

	// Date picker
	$('.input-datepicker, .input-daterange').datepicker({weekStart: 1}).on('changeDate', function(e){ $(this).datepicker('hide'); });
}


Template.chapterEdit.helpers({ 

	themeOptions: function() {
		return Themes.find().fetch()
	},

	currentUsername: function() {
		currentUser = Meteor.users.findOne( Meteor.userId() );
		if (currentUser) {
			username = currentUser.username;
		}else{
			username = null
		}
		return username;
	} 

});


Template.chapterEdit.events({ 
	// 
	'submit form': function(e, template) {
	    e.preventDefault();
	    if(!Meteor.user()) throw 'You must be logged in.';


	    var currentChapterId = this._id;
	    var currentLegendId = this.legendId;

		var $subtitle = $(e.target).find('[name=subtitle]');
		var $body = $(e.target).find('[name=body]');
		var $dateSpan = $("#dateSpan")
		// var $backgroundColour = $(e.target).find('[name=backgroundColour]');
		var $chapterThemeId = $(e.target).find('[name=chapterThemeId]');


		var chapterProperties = {
			subtitle: $subtitle.val(),
			body: $body.val(),
			dateSpan: $dateSpan.val(),
			// backgroundColour: $backgroundColour.val(),
			chapterThemeId: $chapterThemeId.val(),
			uploadedImgURL: null,
	    };
  
		Chapters.update(currentChapterId, 
			{$set:
				chapterProperties
			},	
			function(error){ 
				if(error){
			        // display the error to the user
					alert(error.reason); 
				}else{
			        Router.go('legendChapters', {_id: currentLegendId});
	        	}
			}
		); 
	},

	'click .delete': function(e) { 
		e.preventDefault();
		if (confirm("Delete this chapter?")) { 
			var currentChapterId = this._id;
			var currentLegendId = this.legendId;

			var dmCount = Legends.findOne( currentLegendId ).chaptersCount
			console.log("dmCOUNT")
			console.log(dmCount)

			var dmCountMinus = (dmCount - 1)
			console.log("dmCOUNTMinus")
			console.log(dmCountMinus)

			Chapters.remove(currentChapterId);
			Legends.update(chapter.legendId, {$set: {chaptersCount: dmCountMinus}});
			console.log("dmCOUNT After")
			console.log(Legends.findOne( currentLegendId ).chaptersCount)


			Router.go('legendChapters', {_id: currentLegendId});
		}
	}
});