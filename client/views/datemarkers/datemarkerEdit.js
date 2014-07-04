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
	},

	'click .delete': function(e) { 
		e.preventDefault();
		if (confirm("Delete this datemarker?")) { 
			var currentDatemarkerId = this._id;
			var currentLegendId = this.legendId;

			var dmCount = Legends.findOne( currentLegendId ).datemarkersCount
			console.log("dmCOUNT")
			console.log(dmCount)

			var dmCountMinus = (dmCount - 1)
			console.log("dmCOUNTMinus")
			console.log(dmCountMinus)

			Datemarkers.remove(currentDatemarkerId);
			Legends.update(datemarker.legendId, {$set: {datemarkersCount: dmCountMinus}});
			console.log("dmCOUNT After")
			console.log(Legends.findOne( currentLegendId ).datemarkersCount)


			Router.go('legendEdit', {_id: currentLegendId});
		}
	}
});