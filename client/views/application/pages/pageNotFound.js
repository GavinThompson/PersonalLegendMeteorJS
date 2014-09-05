Template.pageNotFound.helpers({
	weHaveToGoBackJack: function(){
		currentUser = Meteor.users.findOne( Meteor.userId() );
		if (currentUser) {
			path = 'dashboard'
		}else{
			path = 'root'
		}
		return path;
	}
})