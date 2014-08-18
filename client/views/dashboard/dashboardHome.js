var legendFound = null;


Template.dashboardHome.helpers({
    legendExists: function() {

    	var currentUser = Meteor.userId();

    	if( Legends.find({userId: currentUser}).fetch().length > 0){
    		legendFound = true;
    	}else{
    		legendFound = false;
    	}
        // legendFoundDep.depend();
        return legendFound;
    }
});