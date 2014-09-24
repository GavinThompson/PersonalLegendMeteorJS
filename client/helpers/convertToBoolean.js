convertToBoolean = function( string ){
	string = string.toLowerCase();
	var myBoolean = (string === "true");
	// if value is "true", will produce true ... if it's anything else (including "false") - will be false 
	return myBoolean;
};