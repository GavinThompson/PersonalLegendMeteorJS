Template.dashboardSide.helpers({

	currentUsername: function() {
		currentUser = Meteor.users.findOne( Meteor.userId() );
		if (currentUser) {
			username = currentUser.username;
		}else{
			username = null
		}
		return username;
	} 

})