Template.legendCreate.events({ 
	'submit form': function(e) {
	    e.preventDefault();
		var legend = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(), 
			message: $(e.target).find('[name=message]').val()
		}
	
	legend._id = Legends.insert(legend);
	
	Router.go('legendPage', legend);
	
	}
});