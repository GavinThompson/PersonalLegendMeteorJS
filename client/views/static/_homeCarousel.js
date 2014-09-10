Template._homeCarousel.rendered= function() {

	console.log("carousel1")
	$('.carousel.slide').carousel();
	console.log("carousel2")

}

Template._homeCarousel.helpers({ 
	legends: function() {
		return Legends.find({}, {sort: {submitted: -1}});
	},

	randomizedTitle: function() {

		titlesArray = ["The autumn trip that changed my life", "Golf is a good walk spoiled.", "Don't quack like a duck, soar like an eagle.", "Do one thing every day that scares you.", "Hold fast to dreams", "What's meant to be will always find a way", "The flower that blooms in adversity", "Sometimes you wake up", "Sometimes the fall kills you",  "And sometimes, when you fall, you fly", "Life is a broken-winged bird", "You never have to change anything", "You got up in the middle of the night to write", "If you're reading this...", "Congratulations, you're alive", "If that's not something to smile about", "The unexamined life is not worth living", "We have to go back", "It's not the load that breaks you down", "Pain is temporary", "Quitting lasts forever", "I was never really insane. Except.." , "The things you do for yourself...", "It is good to love many things", "What you do makes a difference", "Love is the absence of judgment", "Ancient Egyptians had fifty words for sand", "Eskimos have a hundred words for snow", "There are no words for that", "There are years that ask", "That means that this goodbye", "I dream my painting", "I paint my dream."]
		console.log(titlesArray)
		arrayLength = titlesArray.length
		console.log(arrayLength)
		minNumber = 1
		console.log(minNumber)
		randNumber = Math.floor(Math.random()*(arrayLength-minNumber+1)+minNumber) 
		console.log(randNumber)
		return titlesArray[randNumber]

	},

	randomImageNumber: function() { 
		// TEMPORARY - NEEDS TO BE REPLACED WHEN USERS CAN UPLOAD PHOTOS - CURRENTLY THROWS IN STOCK PHOTO FROM PUBLIC FOLDER
		console.log("rand test")
		minNumber = 1
		maxNumber = 15
		randNumber = Math.floor(Math.random()*(maxNumber-minNumber)+minNumber) 
		console.log(randNumber)
		return randNumber
		// FUNCTION GENERATES INTEGER 1-15 RANDOMLY to pull utilize /public/images/stock/7.jpg for example -- code currently inline style
	}

});