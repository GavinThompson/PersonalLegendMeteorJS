Template.dashboardNav.helpers({
	welcomeUser: function() {
		currentUser = Meteor.users.findOne( Meteor.userId() );

		if (currentUser) {
			welcomeString = "Welcome " +currentUser.username;
		}else{
			welcomeString = "Welcome"
		}
		
		welcomeString = welcomeString.toUpperCase();
		return welcomeString;
	}
});

Template.dashboardNav.events({

	'click .dashboardMenuToggle': function(e, template) {
		e.preventDefault();
		App.sidebar('toggle-sidebar');
	}
});