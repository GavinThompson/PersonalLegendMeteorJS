convertToBoolean = function( string ){
	console.log("String test")
	console.log( string )
	var myBoolean = (string === "true");
	console.log("myBoolean Test")
	console.log(myBoolean)
	// if value is "true", will produce true ... if it's anything else (including "false") - will be false 
	return myBoolean;
}