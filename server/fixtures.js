
// CHAPTER THEME
if (Themes.find().count() === 0) { 

	var chapterTheme1 = Themes.insert({
		name: "White",
		backgroundColour: "#FFF",
		fontColour: "#555",
		texture: null
	}); 

	var chapterTheme2 = Themes.insert({
		name: "OffWhite",
		backgroundColour: "#F2F2F2",
		fontColour: "#555",
		texture: null
	}); 

	var chapterTheme3 = Themes.insert({
		name: "Gray20",
		backgroundColour: "#333",
		fontColour: "#FFF",
		texture: null
	}); 

	var chapterTheme4 = Themes.insert({
		name: "Pink",
		backgroundColour: "#E5BDDC",
		fontColour: "#555",
		texture: null
	}); 

	var chapterTheme5 = Themes.insert({
		name: "Ghostwhite",
		backgroundColour: "#FFF",
		fontColour: "#555",
		texture: null
	}); 

	var chapterTheme6 = Themes.insert({
		name: "FlatNavy",
		backgroundColour: "#434658",
		fontColour: "#FFF",
		texture: null
	}); 

	var chapterTheme7 = Themes.insert({
		name: "Violet",
		backgroundColour: "rgb(208,194,220)",
		fontColour: "#FFF",
		texture: null
	}); 

	var chapterTheme8 = Themes.insert({
		name: "Lavender",
		backgroundColour: "rgb(226,216,236)",
		fontColour: "#555",
		texture: null
	}); 

	var chapterTheme9 = Themes.insert({
		name: "FlatPastelBlue",
		backgroundColour: "#81B3CC",
		fontColour: "#FFF",
		texture: null
	}); 

	var chapterTheme10 = Themes.insert({
		name: "SalmonPeach",
		backgroundColour: "#FFE5E2",
		fontColour: "#555",
		texture: null
	}); 

	var chapterTheme11 = Themes.insert({
		name: "Mint",
		backgroundColour: "#8FF2D9",
		fontColour: "#555",
		texture: null
	}); 

	var chapterTheme12 = Themes.insert({
		name: "Rosee",
		backgroundColour: "#BF5B6E",
		fontColour: "#FFF",
		texture: null
	}); 

	var chapterTheme13 = Themes.insert({
		name: "Beige",
		backgroundColour: "#F4E9CD",
		fontColour: "#555",
		texture: null
	}); 

	var chapterTheme14 = Themes.insert({
		name: "Sand",
		backgroundColour: "#BF9A5B",
		fontColour: "#FFF",
		texture: null
	}); 

	var chapterTheme15 = Themes.insert({
		name: "PaleYellow",
		backgroundColour: "#FBFDC1",
		fontColour: "#555",
		texture: null
	}); 
}


if (Legends.find().count() === 0) { 

	var now = new Date().getTime();

	var baseNumber = 4

	var numberIncrease = function(){
		var newNumber = baseNumber++
		return newNumber
	}

	titlesArray = ["The autumn trip that changed my life", "Golf is a good walk spoiled.", "Don't quack like a duck, soar like an eagle.", "Do one thing every day that scares you.", "Hold fast to dreams", "What's meant to be will always find a way", "The flower that blooms in adversity", "Sometimes you wake up", "Sometimes the fall kills you",  "And sometimes, when you fall, you fly", "Life is a broken-winged bird", "You never have to change anything", "You got up in the middle of the night to write", "If you're reading this...", "Congratulations, you're alive", "If that's not something to smile about", "The unexamined life is not worth living", "We have to go back", "It's not the load that breaks you down", "Pain is temporary", "Quitting lasts forever", "I was never really insane. Except.." , "The things you do for yourself...", "It is good to love many things", "What you do makes a difference", "Love is the absence of judgment", "Ancient Egyptians had fifty words for sand", "Eskimos have a hundred words for snow", "There are no words for that", "There are years that ask", "That means that this goodbye", "I dream my painting", "I paint my dream."]

	// create two users
	var testUserID = Meteor.users.insert({ 
		username: 'AdamRandor',
		email: 'test@test.com'
	});

	Accounts.setPassword(testUserID, 'testtesttest') 
	var testUser = Meteor.users.findOne(testUserID); 

	var legendFixtureArray = []


	var legend1 = Legends.insert({
		title: titlesArray[1],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend1  )

	var legend2 = Legends.insert({
		title: titlesArray[2],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend2  )

	var legend3 = Legends.insert({
		title: titlesArray[3],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend3  )

	var legend4 = Legends.insert({
		title: titlesArray[4],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend4  )

	var legend5 = Legends.insert({
		title: titlesArray[5],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend5  )

	var legend6 = Legends.insert({
		title: titlesArray[6],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend6  )

	var legend7 = Legends.insert({
		title: titlesArray[7],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend7  )

	var legend8 = Legends.insert({
		title: titlesArray[8],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend8  )

	var legend9 = Legends.insert({
		title: titlesArray[9],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend9  )

	var legend10 = Legends.insert({
		title: titlesArray[10],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend10 )

	var legend11 = Legends.insert({
		title: titlesArray[11],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend11 )

	var legend12 = Legends.insert({
		title: titlesArray[12],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend12 )

	var legend13 = Legends.insert({
		title: titlesArray[13],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend13 )

	var legend14 = Legends.insert({
		title: titlesArray[14],
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});
	legendFixtureArray.push( legend14 )

	console.log("legend fixture array")
	console.log( legendFixtureArray )



	// Begin Adding Chapters

	var addChapterSeeds = function(){

		legendsLength = legendFixtureArray.length

		for(i = 1; i < legendsLength; i++){
			Chapters.insert({
				legendId: legendFixtureArray[i],
				userId: testUser._id,
				author: testUser.username,
				subtitle: 'It was a good year on the Bayou.',
				dateSpan: 'Jun 04 1982',
				chapterThemeId: chapterTheme10,
				// backgroundColour: '#FFCC00',
				submitted: now - 5 * 3600 * 1000,
				body: "Accusamus sensorium the tribal man the medium is the messagesas vivendum gutenberg villagerpuum gutenberg villagectom sensoriumis global villagetia. His sensoriumium idque the tribal manem labitur marshall mcluhanatrix global villagetaram cool the medium is the messagedii predicting the web coolom acoustic space the literate man the tribal man luptatum predicting the webium. Conclusionemque sensoriumiis volutpat ad at soooooooo hot usu acoustic spacechios soooooooo hoteorum global villagetuum gutenberg village sensoriumibus percipit admodum the literate manes. The tribal man antiopam the medium is the message debitis cool soooooooo hot the tribal man gutenberg village predicting the web hotibus duo soooooooo hot marshall mcluhan. Sooooooooo coolius gutenberg villagerix gutenberg villagetim consulatu soooooooo hotii suavitate sensoriumium acoustic spacesi marshall mcluhan hotibus marshall mcluhan predicting the webim global villagexis eam marshall mcluhanuum sit the medium is the massage. Aperiri soooooooo hot the medium is the message hot the tribal man soooooooo hotem sensorium sooooooooo cool the literate man viderer appetere ne falli the medium is the massage. /n Accusamus sensorium the tribal man the medium is the messagesas vivendum gutenberg villagerpuum gutenberg villagectom sensoriumis global villagetia. His sensoriumium idque the tribal manem labitur marshall mcluhanatrix global villagetaram cool the medium is the messagedii predicting the web coolom acoustic space the literate man the tribal man luptatum predicting the webium. Conclusionemque sensoriumiis volutpat ad at soooooooo hot usu acoustic spacechios soooooooo hoteorum global villagetuum gutenberg village sensoriumibus percipit admodum the literate manes. The tribal man antiopam the medium is the message debitis cool soooooooo hot the tribal man gutenberg village predicting the web hotibus duo soooooooo hot marshall mcluhan. Sooooooooo coolius gutenberg villagerix gutenberg villagetim consulatu soooooooo hotii suavitate sensoriumium acoustic spacesi marshall mcluhan hotibus marshall mcluhan predicting the webim global villagexis eam marshall mcluhanuum sit the medium is the massage. Aperiri soooooooo hot the medium is the message hot the tribal man soooooooo hotem sensorium sooooooooo cool the literate man viderer appetere ne falli the medium is the massage."
			});

			Chapters.insert({
				legendId: legendFixtureArray[i],
				userId: testUser._id,
				author: testUser.username,
				subtitle: 'Wondered whatever happened on that long, long day.',
				dateSpan: 'Nov 04 1998',
				chapterThemeId: chapterTheme11,
				// backgroundColour: '#FFCC00',
				submitted: now - 6 * 3600 * 1000,
				body: "Accusamus sensorium the tribal man the medium is the messagesas vivendum gutenberg villagerpuum gutenberg villagectom sensoriumis global villagetia. His sensoriumium idque the tribal manem labitur marshall mcluhanatrix global villagetaram cool the medium is the messagedii predicting the web coolom acoustic space the literate man the tribal man luptatum predicting the webium. Conclusionemque sensoriumiis volutpat ad at soooooooo hot usu acoustic spacechios soooooooo hoteorum global villagetuum gutenberg village sensoriumibus percipit admodum the literate manes. The tribal man antiopam the medium is the message debitis cool soooooooo hot the tribal man gutenberg village predicting the web hotibus duo soooooooo hot marshall mcluhan. Sooooooooo coolius gutenberg villagerix gutenberg villagetim consulatu soooooooo hotii suavitate sensoriumium acoustic spacesi marshall mcluhan hotibus marshall mcluhan predicting the webim global villagexis eam marshall mcluhanuum sit the medium is the massage. Aperiri soooooooo hot the medium is the message hot the tribal man soooooooo hotem sensorium sooooooooo cool the literate man viderer appetere ne falli the medium is the massage. /n Accusamus sensorium the tribal man the medium is the messagesas vivendum gutenberg villagerpuum gutenberg villagectom sensoriumis global villagetia. His sensoriumium idque the tribal manem labitur marshall mcluhanatrix global villagetaram cool the medium is the messagedii predicting the web coolom acoustic space the literate man the tribal man luptatum predicting the webium. Conclusionemque sensoriumiis volutpat ad at soooooooo hot usu acoustic spacechios soooooooo hoteorum global villagetuum gutenberg village sensoriumibus percipit admodum the literate manes. The tribal man antiopam the medium is the message debitis cool soooooooo hot the tribal man gutenberg village predicting the web hotibus duo soooooooo hot marshall mcluhan. Sooooooooo coolius gutenberg villagerix gutenberg villagetim consulatu soooooooo hotii suavitate sensoriumium acoustic spacesi marshall mcluhan hotibus marshall mcluhan predicting the webim global villagexis eam marshall mcluhanuum sit the medium is the massage. Aperiri soooooooo hot the medium is the message hot the tribal man soooooooo hotem sensorium sooooooooo cool the literate man viderer appetere ne falli the medium is the massage."
			});

			Chapters.insert({
				legendId: legendFixtureArray[i],
				userId: testUser._id,
				author: testUser.username,
				subtitle: 'It was a good day to see red.',
				dateSpan: 'Jan 20 2006',
				chapterThemeId: chapterTheme12,
				// backgroundColour: '#FFCC00',
				submitted: now - 7 * 3600 * 1000,
				body: "Accusamus sensorium the tribal man the medium is the messagesas vivendum gutenberg villagerpuum gutenberg villagectom sensoriumis global villagetia. His sensoriumium idque the tribal manem labitur marshall mcluhanatrix global villagetaram cool the medium is the messagedii predicting the web coolom acoustic space the literate man the tribal man luptatum predicting the webium. Conclusionemque sensoriumiis volutpat ad at soooooooo hot usu acoustic spacechios soooooooo hoteorum global villagetuum gutenberg village sensoriumibus percipit admodum the literate manes. The tribal man antiopam the medium is the message debitis cool soooooooo hot the tribal man gutenberg village predicting the web hotibus duo soooooooo hot marshall mcluhan. Sooooooooo coolius gutenberg villagerix gutenberg villagetim consulatu soooooooo hotii suavitate sensoriumium acoustic spacesi marshall mcluhan hotibus marshall mcluhan predicting the webim global villagexis eam marshall mcluhanuum sit the medium is the massage. Aperiri soooooooo hot the medium is the message hot the tribal man soooooooo hotem sensorium sooooooooo cool the literate man viderer appetere ne falli the medium is the massage. /n Accusamus sensorium the tribal man the medium is the messagesas vivendum gutenberg villagerpuum gutenberg villagectom sensoriumis global villagetia. His sensoriumium idque the tribal manem labitur marshall mcluhanatrix global villagetaram cool the medium is the messagedii predicting the web coolom acoustic space the literate man the tribal man luptatum predicting the webium. Conclusionemque sensoriumiis volutpat ad at soooooooo hot usu acoustic spacechios soooooooo hoteorum global villagetuum gutenberg village sensoriumibus percipit admodum the literate manes. The tribal man antiopam the medium is the message debitis cool soooooooo hot the tribal man gutenberg village predicting the web hotibus duo soooooooo hot marshall mcluhan. Sooooooooo coolius gutenberg villagerix gutenberg villagetim consulatu soooooooo hotii suavitate sensoriumium acoustic spacesi marshall mcluhan hotibus marshall mcluhan predicting the webim global villagexis eam marshall mcluhanuum sit the medium is the massage. Aperiri soooooooo hot the medium is the message hot the tribal man soooooooo hotem sensorium sooooooooo cool the literate man viderer appetere ne falli the medium is the massage."
			});
		}

	}(); //run function
	
}

