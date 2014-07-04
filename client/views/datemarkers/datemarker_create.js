
// Template.datemarkerCreate.rendered = function() {
	// console.log("datemarkerCreate rendered....")
	// console.log( $(".datepicker") )
	
	// $(".datepicker").glDatePicker(); 
	// Above causing error... not sure why
// }

Template.datemarkerCreate.events({


	'submit form': function(e, template) {
	    e.preventDefault();

		var $subtitle = $(e.target).find('[name=subtitle]');
		var $body = $(e.target).find('[name=body]');
		var $dateSpan = $(e.target).find('[name=dateSpan]');
		var $backgroundColour = $(e.target).find('[name=backgroundColour]');


		var datemarker = {
			subtitle: $subtitle.val(),
			body: $body.val(),
			dateSpan: $dateSpan.val(),
			backgroundColour: $backgroundColour.val(),
	    	legendId: template.data._id
	    };

	    console.log("datemarker: ")
	    console.log(datemarker)

		Meteor.call('datemarker', datemarker, function(error, datemarkerId) { 
			if(error){
				throwError(error.reason); 
				
				if (error.error === 302){
					Router.go('legendEdit', {_id: error.details})
				}
			}else{
	        	// else go to page
				Router.go('legendEdit', {_id: template.data._id});
	      	}
		});
	}
});