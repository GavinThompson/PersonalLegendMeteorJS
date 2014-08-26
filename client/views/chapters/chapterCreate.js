
// Template.chapterCreate.rendered = function() {
	// console.log("chapterCreate rendered....")
	// console.log( $(".datepicker") )
	
	// $(".datepicker").glDatePicker(); 
	// Above causing error... not sure why
// }

Template.chapterCreate.events({


	'submit form': function(e, template) {
	    e.preventDefault();

		var $subtitle = $(e.target).find('[name=subtitle]');
		var $body = $(e.target).find('[name=body]');
		var $dateSpan = $(e.target).find('[name=dateSpan]');
		var $backgroundColour = $(e.target).find('[name=backgroundColour]');
		


		var chapter = {
			subtitle: $subtitle.val(),
			body: $body.val(),
			dateSpan: $dateSpan.val(),
			backgroundColour: $backgroundColour.val(),
			uploadedImgURL: null,
	    	legendId: template.data._id
	    };

	    console.log("chapter: ")
	    console.log(chapter)

		Meteor.call('chapter', chapter, function(error, chapterId) { 
			if(error){
				throwError(error.reason); 
				
				if (error.error === 302){
					Router.go('legendEdit', {_id: error.details})
				}
			}else{
				console.log("chapterId")
				console.log(chapterId)
	        	// else go to page
				Router.go('chapterAddImage', {_legendId: template.data._id, _id: chapterId});
	      	}
		});
	}
});