Template.chapterCreate.rendered = function() {
	// Fancy dropdown "chosen" 
	$('.select-chosen').chosen({width: "100%"});

	// Date picker
	$('.input-datepicker, .input-daterange').datepicker({weekStart: 1}).on('changeDate', function(e){ $(this).datepicker('hide'); });
}


Template.chapterCreate.helpers({ 
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
})

Template.chapterCreate.events({

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


	'submit form': function(e, template) {
		e.preventDefault();

		console.log($(e.target).find('[name=published]'))
		var $subtitle = $(e.target).find('[name=subtitle]');
		var $body = $(e.target).find('[name=body]');
		var $dateSpan = $("#dateSpan");
		// var $backgroundColour = $(e.target).find('[name=backgroundColour]');
		var $publishStatus = $(e.target).find('[name=published]:checked');
		var $chapterThemeId = $(e.target).find('[name=chapterThemeId]');


		var chapter = {
			subtitle: $subtitle.val(),
			body: $body.val(),
			dateSpan: $dateSpan.val(),
			chapterThemeId: $chapterThemeId.val(),
			uploadedImgURL: null,
			published: convertToBoolean( $publishStatus.val() ),
			legendId: template.data._id
		};


		console.log("chapter: ")
		console.log(chapter)

		Meteor.call('chapter', chapter, function(error, chapterId){ 
			if(error){
				throwError(error.reason); 
				
				if (error.error === 302){
					Router.go('legendChapters', {_id: error.details})
				}
			}else{
				// console.log("chapterId")
				// console.log(chapterId)
				// else go to page
				Router.go('chapterAddImage', {_legendId: template.data._id, _id: chapterId});
			}
		});
	}
});