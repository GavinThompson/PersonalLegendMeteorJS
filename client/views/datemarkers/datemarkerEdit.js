Template.datemarkerEdit.helpers({ 
	testttt: function() {
		// console.log(this)
		// console.log(this._id)
		// var currentDatemarkerId = Router.current().params._id
		// console.log(currentDatemarkerId)
		// console.log( Datemarker.find({_id: currentDatemarkerId}))
		// return Datemarkers.find({_id: currentDatemarkerId});
	}
	// 
});


Template.datemarkerEdit.events({ 
	// 
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
		    	// legendId: template.data._id
		    };

		    console.log("datemarker: ")
		    console.log(datemarker)

			// Meteor.call('datemarker', datemarker, function(error, datemarkerId) { 
			// 	if(error){
			// 		throwError(error.reason); 
					
			// 		if (error.error === 302){
			// 			Router.go('legendPage', {_id: error.details})
			// 		}
			// 	}else{
		 //        	// else go to page
			// 		Router.go('legendPage', {_id: template.data._id});
		 //      	}
			// });
		}

});