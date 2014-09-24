
Template.chapterEdit.rendered = function() {
	// Fancy dropdown "chosen" 
	$('.select-chosen').chosen({width: "100%"});
	$('.select-chosen').val(this.data.chapterThemeId);
	$('.select-chosen').trigger("chosen:updated")

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
	},

	chosenChapterTheme: function(){
		
	}

});


Template.chapterEdit.events({ 
	'click .btn-toggle': function(e){
		$('#publishOption').toggleClass('btn-success').toggleClass('btn-default'); 
		$('#draftOption').toggleClass('btn-default').toggleClass('btn-success'); 

		// $('input[type="radio"]').not(':checked').prop("checked", true); 
		// - not working quite right on multiple clicks in quick succession 

		$hiddenRadios = $('input[type="radio"][name="published"]')

		var $checked = $hiddenRadios.filter(':checked');
	    var $next = $hiddenRadios.eq($hiddenRadios.index($checked) + 1);
	    if(!$next.length){
	        $next = $hiddenRadios.first();
	    }
	    $next.prop("checked", true);
	},	
	// 
	'submit form': function(e, template) {
	    e.preventDefault();
	    if(!Meteor.user()) throw 'You must be logged in.';


	    var currentChapterId = this._id;
	    var currentLegendId = this.legendId;

		var $subtitle = $(e.target).find('[name=subtitle]');
		var $body = $(e.target).find('[name=body]');
		var $dateSpan = $("#dateSpan")
		var $publishStatus = $(e.target).find('[name=published]:checked');
		var $chapterThemeId = $(e.target).find('[name=chapterThemeId]');


		var chapterProperties = {
			subtitle: $subtitle.val(),
			body: $body.val(),
			dateSpan: $dateSpan.val(),
			published: convertToBoolean( $publishStatus.val() ),
			chapterThemeId: $chapterThemeId.val(),
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