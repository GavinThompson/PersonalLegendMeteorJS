

Router.configure({ 
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { 
		return [Meteor.subscribe('legends'), Meteor.subscribe('datemarkers')]; 
	}
});

Router.map(function() { 
	this.route('legendsList', {path: '/'});

	this.route('legendPage', { 
		path: '/legends/:_id',
		waitOn: function() {
			return Meteor.subscribe('datemarkers', this.params._id);
		},
		data: function() { 
			return Legends.findOne(this.params._id); 
		}
	});

	this.route('legendEdit', {
		path: '/legends/:_id/edit',
		layoutTemplate: 'dashboardLayout',
		data: function() { 
			return Legends.findOne(this.params._id); }
	});

	this.route('legendCreate', {
		path: '/create',
		layoutTemplate: 'dashboardLayout'
	});

	this.route('dashboard', {
		path: '/dashboard',
		template: 'dashboardHome',
	    layoutTemplate: 'dashboardLayout'
	});

	this.route('account', {
		path: '/account',
		template: 'dashboardAccount',
	    layoutTemplate: 'dashboardLayout'
	});
});

var requireLogin = function(pause) { 
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) 
			this.render(this.loadingTemplate);
		else 
			this.render('accessDenied');
		pause(); 
	}
}

// unsure why this line doesn't work .... check out discover meteor 'Waiting on Data' section
Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'legendCreate'});
Router.onBeforeAction(function() { clearErrors() });
