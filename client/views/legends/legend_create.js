Template.legendCreate.events({ 

	'submit form': function(e) {
	    e.preventDefault();

		var legend = {
			title: $(e.target).find('[name=title]').val(), 
			synopsis: $(e.target).find('[name=synopsis]').val()
		}
	
		Meteor.call('legend', legend, function(error, id) {

			if(error){
				// display the error to the user
				throwError(error.reason);

				if (error.error === 302){
					Router.go('legendPage', {_id: error.details})
				}
				// 
			}else{
				// else go to page
				Router.go('legendPage', {_id: id});
			}
		});
	}
	
});