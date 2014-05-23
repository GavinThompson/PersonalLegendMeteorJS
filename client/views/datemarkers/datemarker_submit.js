Template.datemarkerSubmit.events({
	'submit form': function(e, template) {
	    e.preventDefault();

		var $body = $(e.target).find('[name=body]'); 
		var datemarker = {
	    	body: $body.val(),
	    	legendId: template.data._id
	    };

		Meteor.call('datemarker', datemarker, function(error, datemarkerId) { 
			if(error){
				throwError(error.reason); 
			}else{
	        	$body.val('');
	      	}
		});
	}
});