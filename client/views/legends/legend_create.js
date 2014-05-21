Template.legendCreate.events({ 

	'submit form': function(e) {
	    e.preventDefault();

		var legend = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(), 
			message: $(e.target).find('[name=message]').val()
		}
	
		// Meteor.call('post', post, function(error, id) { if (error)
		Meteor.call('post', legend, function(error, id) {

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