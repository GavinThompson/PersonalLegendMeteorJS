Themes = new Meteor.Collection('themes');

Themes.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Themes.deny({
	update: function(userId, theme, fieldNames) {
	    // may only edit the following two fields:
		return (_.without(fieldNames, 'name', 'backgroundColour', 'fontColour', 'texture' ).length > 0); 
		// REVIEW WHAT THE ABOVE DOES IN Discover Meteor
	}
});

Meteor.methods({
	theme: function(themeAttributes) {
		var user = Meteor.user();

    	// ensure the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to login to post new themes");
		}
		// ensure the post has a title
		if (!themeAttributes.name){
			throw new Meteor.Error(422, 'Please fill in a name');
		}
		if (!themeAttributes.backgroundColour){
			throw new Meteor.Error(422, 'Please fill in a background colour');
		}
		if (!themeAttributes.fontColour){
			throw new Meteor.Error(422, 'Please fill in a font colour');
		}
		if (!themeAttributes.texture){
			throw new Meteor.Error(422, 'Please upload a texture');
		}



	    // pick out the whitelisted keys
		var theme = _.extend(_.pick(themeAttributes, 'name', 'backgroundColour', 'fontColour', 'texture'), {
			name: themeAttributes.name,
			backgroundColour: themeAttributes.backgroundColour,
			fontColour: themeAttributes.fontColour,
			texture: themeAttributes.texture
		});

		// wait for 5 seconds
		if (! this.isSimulation) {
			var Future = Npm.require('fibers/future'); 
			var future = new Future(); 
			Meteor.setTimeout(function() {
				future.return(); 
			}, 5 * 1000); 
			future.wait();
		}
		
		var themeId = Themes.insert(theme);
		
		return themeId; 
	}
});