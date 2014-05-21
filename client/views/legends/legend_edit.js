Template.legendEdit.events({ 
	'submit form': function(e) {
	    e.preventDefault();
		var currentLegendId = this._id;
		var legendProperties = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val()
		}
		
		Legends.update(currentLegendId, {$set: legendProperties}, function(error) { 
			if (error) {
		        // display the error to the user
				alert(error.reason); 
			} else {
		        Router.go('legendPage', {_id: currentLegendId});
        	}
		}); 
	},

	'click .delete': function(e) { 
		e.preventDefault();
		if (confirm("Delete this legend?")) { 
			var currentLegendId = this._id;
			Legends.remove(currentLegendId);
			Router.go('legendsList');
		}
	}
});