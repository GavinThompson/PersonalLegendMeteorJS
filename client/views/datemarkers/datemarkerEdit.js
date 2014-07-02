Template.datemarkerEdit.helpers({ 
	// 
});


Template.datemarkerEdit.events({ 
	// 
		'submit form': function(e, template) {
		    e.preventDefault();
		    if(!Meteor.user()) throw 'You must be logged in.';


		    var currentDatemarkerId = this._id;
		    var currentLegendId = this.legendId;

			var $subtitle = $(e.target).find('[name=subtitle]');
			var $body = $(e.target).find('[name=body]');
			var $dateSpan = $(e.target).find('[name=dateSpan]');
			var $backgroundColour = $(e.target).find('[name=backgroundColour]');


			var datemarkerProperties = {
				subtitle: $subtitle.val(),
				body: $body.val(),
				dateSpan: $dateSpan.val(),
				backgroundColour: $backgroundColour.val(),
		    	// legendId: this.legendId
		    };
		    // console.log(this);
		    // console.log("currentdatemarkerid:", this);
		    // console.log("currentdatemarkerid", currentDatemarkerId);
			// Datemarkers.update(currentDatemarkerId, currentLegendId {$set: datemarkerProperties}, function(error){ 
				Datemarkers.update(currentDatemarkerId, 
					{$set:
						datemarkerProperties
					},	
					function(error){ 
						if(error){
					        // display the error to the user
							alert(error.reason); 
						}else{
					        Router.go('legendEdit', {_id: currentLegendId});
			        	}
					}
				); 
		}

});