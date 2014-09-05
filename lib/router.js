

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
		layoutTemplate: 'basicLayout',
		path: '/'
	});

	this.route('home', {
		path: '/home',
		layoutTemplate: 'basicLayout'
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
		onBeforeAction: function (pause) {
		    AccountsEntry.signInRequired(this, pause);
		},
		waitOn: function() {
			return [Meteor.subscribe('chapters', this.params._id),Meteor.subscribe('themes')];
		},
		data: function() { 
			return Legends.findOne(this.params._id); }
	});

	this.route('legendChapters', {
		path: '/legends/:_id/chapters',
		layoutTemplate: 'dashboardLayout',
		onBeforeAction: function (pause) {
		    AccountsEntry.signInRequired(this, pause);
		},
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
		onBeforeAction: function (pause) {
			AccountsEntry.signInRequired(this, pause);
		},
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
		onBeforeAction: function (pause) {
			AccountsEntry.signInRequired(this, pause);
		},
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
		onBeforeAction: function (pause) {
	      AccountsEntry.signInRequired(this, pause);
	    },
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
	    layoutTemplate: 'dashboardLayout',
	    onBeforeAction: function (pause) {
          AccountsEntry.signInRequired(this, pause);
        }
	});

	this.route('legendCreate', {
		path: '/create',
		layoutTemplate: 'dashboardLayout',
		onBeforeAction: function (pause) {
			AccountsEntry.signInRequired(this, pause);
		}
	});

	this.route('dashboard', {
		path: '/dashboard',
		template: 'dashboardHome',
	    layoutTemplate: 'dashboardLayout',
	    onBeforeAction: function (pause) {
          AccountsEntry.signInRequired(this, pause);
        }
	});


	this.route('profileShow', {
	   path: '/@:username',
	   template: 'profileShow',
	   layoutTemplate: 'basicLayout',
	   waitOn: function () {
	     return Meteor.subscribe('user', this.params._id);
	   },
	   data: function() {
	     return Meteor.users.findOne({username: this.params.username});
	   }
	 });

	this.route('profileEdit', {
	   path: '/@:username/edit',
	   template: 'profileEdit',
	   layoutTemplate: 'dashboardLayout',
	   onBeforeAction: function (pause) {
         AccountsEntry.signInRequired(this, pause);
       },
	   waitOn: function () {
	     return Meteor.subscribe('user', this.params._id);
	   },
	   data: function() {
	     return Meteor.users.findOne({username: this.params.username});
	   }
	 });

	// complex route with name 'notFound' that for example matches '/non-sense/route/that-matches/nothing' and automatically 
	// renders template 'notFound' 
	// HINT:
		//// Define a global not found route as the very last route in your router
		//// Also this is different from the notFoundTemplate in your Iron Router
		//// configuration!

	this.route('pageNotFound', {
		path: '*',
		template: 'pageNotFound'
		// 404 as template name errors out in js
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