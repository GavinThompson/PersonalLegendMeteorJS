Router.configure({ 
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('legends'); }
});

Router.map(function() { 
	this.route('legendsList', {path: '/'});

	this.route('legendPage', { 
		path: '/legends/:_id',
		data: function() { 
			return Legends.findOne(this.params._id); 
		}
	});

	this.route('legendCreate', {
		path: '/create'
	});

});

// Router.onBeforeAction('loading');
// unsure why this line doesn't work .... check out discover meteor 'Waiting on Data' section