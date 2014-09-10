
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

	// create two users
	var testUserID = Meteor.users.insert({ 
		username: 'AdamRandor',
		email: 'test@test.com',
		password: 'testtesttest'
	});
	var testUser = Meteor.users.findOne(testUserID); 


	var legend1 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend2 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend3 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend4 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend5 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend6 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend7 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend8 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend9 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend10 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend11 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend12 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend14 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	var legend15 = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: testUser._id,
		author: testUser.username,
		synopsis: "'This is a story about them,' says the man on the radio. And you are concerned, because this is not a story you were ever supposed to hear. Welcome to Night Vale. This is a story about them.",
		submitted: now - numberIncrease() * 3600 * 1000,
		chaptersCount: 3
	});

	



	// Begin Adding Chapters

	var addChapterSeeds = function(){

		totalLegends = Legends.find().count()


		findLegendID = function(number){
			legendID = "legend" + number
			return legendID
		}

		for(i = 1; i < totalLegends; i++){
			Chapters.insert({
				legendId: findLegendID(i),
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
				legendId: findLegendID(i),
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
				legendId: findLegendID(i),
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

