if( Meteor.isClient ){
	Meteor.startup(function () {
	    AccountsEntry.config({
	      logo: null,                  // if set displays logo above sign-in options
	      privacyUrl: '/privacy-policy',     // if set adds link to privacy policy and 'you agree to ...' on sign-up page
	      termsUrl: '/terms-of-use',         // if set adds link to terms  'you agree to ...' on sign-up page
	      homeRoute: '/',                   // mandatory - path to redirect to after sign-out
	      dashboardRoute: '/dashboard',      // mandatory - path to redirect to after successful sign-in
	      profileRoute: 'profileShow',
	      passwordSignupFields: 'USERNAME_AND_EMAIL',
	      showSignupCode: false
	    });
	  });

}



if( Meteor.isServer ){
	Meteor.startup(function () {
	    AccountsEntry.config({
	      // 
	    });
	  });

}



// https://github.com/Differential/accounts-entry:
// Signup codes
// We have added support for a signupCode in case you want to have a special code to handout to keep signups at a pace you want. This code is checked if you turn on the client and server side options listed below.
// The signup code is only checked for accounts-password logins, so know that OAuth logins will still allow people in.

// In CLIENT code only
// Since this is a young package, we are maintaining compatibility with accounts-ui (so if in a pinch accounts-entry is broken for you, you could easily switch to accounts-ui). We also use the UI for oauth configs from accounts-ui.

//   Meteor.startup(function () {
//     AccountsEntry.config({
//       logo: 'logo.png'                  // if set displays logo above sign-in options
//       privacyUrl: '/privacy-policy'     // if set adds link to privacy policy and 'you agree to ...' on sign-up page
//       termsUrl: '/terms-of-use'         // if set adds link to terms  'you agree to ...' on sign-up page
//       homeRoute: '/'                    // mandatory - path to redirect to after sign-out
//       dashboardRoute: '/dashboard'      // mandatory - path to redirect to after successful sign-in
//       profileRoute: 'profile'
//       passwordSignupFields: 'EMAIL_ONLY'
//       showSignupCode: true
//       showOtherLoginServices: true      // Set to false to hide oauth login buttons on the signin/signup pages. Useful if you are using something like accounts-meld or want to oauth for api access
//       extraSignUpFields: [{             // Add extra signup fields on the signup page
//         field: "name",                           // The database property you want to store the data in
//         name: "This Will Be The Initial Value",  // An initial value for the field, if you want one
//         label: "Full Name",                      // The html lable for the field
//         placeholder: "John Doe",                 // A placeholder for the field
//         type: "text",                            // The type of field you want
//         required: true                           // Adds html 5 required property if true
//        }]
//     });
//   });


// In SERVER code only
// Call AccountsEntry.config with a hash of optional configuration:

//   Meteor.startup(function () {
//     AccountsEntry.config({
//       signupCode: 's3cr3t',         // only restricts username+password users, not OAuth
//       defaultProfile:
//           someDefault: 'default'
//     });
//   });

	// The default configuration includes:

	//   wrapLinks: true                   // wraps accounts-entry links in <li> for bootstrap compatability purposes
	//   homeRoute: '/'                    // MUST BE SET - redirect to this path after sign-out
	//   dashboardRoute: '/dashboard'      // MUST BE SET - redirect to this path after sign-in