

// 
Router.configure({ 
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { 
		return [Meteor.subscribe('legends'), Meteor.subscribe('chapters'), Meteor.subscribe('user'), Meteor.subscribe('themes')]; 
	}
});
// 

Router.map(function() { 
	this.route('root', {
		template: 'home',
		path: '/'
	});

	this.route('home', {
		path: '/home'
	});

	this.route('legendPage', { 
		path: '/legends/:_id',
		layoutTemplate: 'legendLayout',
		waitOn: function() {
			return [Meteor.subscribe('chapters', this.params._id),Meteor.subscribe('themes')];
		},
		data: function() { 
			return Legends.findOne(this.params._id); 
		}
	});

	this.route('legendEdit', {
		path: '/legends/:_id/edit',
		layoutTemplate: 'dashboardLayout',
		waitOn: function() {
			return [Meteor.subscribe('chapters', this.params._id),Meteor.subscribe('themes')];
		},
		data: function() { 
			return Legends.findOne(this.params._id); }
	});

	this.route('chapterCreate', { 
		path: '/legends/:_id/chapters/create',
		layoutTemplate: 'dashboardLayout',
		template: 'chapterCreate',
		waitOn: function() { 
			return Meteor.subscribe('themes');
		},
		data: function() { 
			return Legends.findOne(this.params._id); 
		}
	});

	this.route('chapterEdit', { 
		path: '/legends/:_legendId/chapters/:_id/edit',
		layoutTemplate: 'dashboardLayout',
		template: 'chapterEdit',
		waitOn: function() { 
			return [Meteor.subscribe('chapters', this.params._legendId),Meteor.subscribe('themes')];
		},
		data: function() { 
			return Chapters.findOne(this.params._id); 
		}
	});

	this.route('chapterAddImage', { 
		path: '/legends/:_legendId/chapters/:_id/addimage',
		layoutTemplate: 'dashboardLayout',
		template: 'chapterAddImage',
		waitOn: function() { 
			return Meteor.subscribe('chapters', this.params._legendId);
		},
		data: function() { 
			return Chapters.findOne(this.params._id); 
		}
	});

	this.route('manage', {
		path: '/manage',
		template: 'legendManagement',
	    layoutTemplate: 'dashboardLayout'
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


	this.route('profileShow', {
	   path: '/@:username',
	   waitOn: function () {
	     return Meteor.subscribe('user', this.params._id);
	   },
	   data: function() {
	     return Meteor.users.findOne({username: this.params.username});
	   }
	 });

	
});

// 
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