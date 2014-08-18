if (Legends.find().count() === 0) { 

	var now = new Date().getTime();

	// create two users
	var tomId = Meteor.users.insert({ 
		username: 'TomBombadil'
	});
	var tom = Meteor.users.findOne(tomId); 

	var skeletorId = Meteor.users.insert({
	    username: 'Skeletor'
	});
	
	var skeletor = Meteor.users.findOne(skeletorId);


	var skeletorId = Legends.insert({
		title: 'Skeletor Birthday Chronology',
		userId: skeletor._id,
		author: skeletor.username,
		synopsis: 'Smokinga idque prevention support cessation cessationo referrentur protection supportiis preventioni an smokinga evaluationix vis. Supportius supporte volumus quo preventionebus eu has appellantur molestie cetero cessation tobaccontius cu cu labitur iracundia. Utroque otru prevention lobortis smokingim protection evaluationus tobacco mei an otructos nonumes. Cessationus vis tobacco cessation protectionaram vim cessationator cessationium duo smoking protection otrumom cessation protectionebus habeo tobacco cessation. Ne tobacconix cum consulatu protectionatrix cessation abhorreant nostro smoking support suas preventiontri has protectionebus protection. Preventionatrix protectionom per smoking saepe otruxios cessationia preventionibus preventionius protectionii cessation cessation tobaccoches ipsum tobaccoquius protection. \n		Prevention evaluationae sea preventionius sed tobacco evaluationebus smokingus sint delicata in. Evaluation support preventionios smoking otruntae smokingos smokingios honestatis cessationibus protectionator numquam evaluation evaluation pri. Cessation disputationi prevention otru otru has sed ex cessation otrupate exerci veritus. Eu protectionis tobaccoctuum evaluationiis protection otructix evaluationeorum prevention evaluation otrunes hinc doming tobacco duo an protection. Sapientem smoking no forensibus cessationios support otru cotidieque quot cessationiis disputando congue. Supportaram everti tobacco otruria prevention protectionem supportium supportator cum protection sit cessationorum augue smokingius.',
		submitted: now - 7 * 3600 * 1000,
		chaptersCount: 2
	});

	Chapters.insert({
		legendId: skeletorId,
		userId: skeletor._id,
		author: skeletor.username,
		subtitle: 'Skeletor is born!! Bahahaah!',
		dateSpan: 'Jun 04 1982',
		backgroundColour: '#FFCC00',
		submitted: now - 5 * 3600 * 1000,
		body: 'Lorem dugtriotem eloquentiam kingdraquorum diam excadrilliorum qui braviarigem mundi cubonedi bagoniis skiploomtri turtwig volumus. Emboar drilbur squirtle helioliskaram flygon seviperium luxraigatrix lillipup deoxysiorum lunatone appetere sunkern flabebechiorum bronzong saepe heracross. Eirmod koffingius floatzel bibarel nosepassuum adversarium puruglinerum pri mothimiis weedle professor oako zoroark shedinjacteorum furfrou eu. Butterfreera gligariorum meowsticibus gibleriis mea rayquazante no turtwig mandibuzzius zorua. Tation scizoraram gigalith noibat sit arcaninedaram heracross azelf corsolases magnezone seviper braviary vocent illumise emolgararam croagunkatrix. Patratius hoppip usu aron zebstrika rhydon dewgong perfecto deerling mollis totodile garchomp ut. Archeops skarmory kricketot wingull tirtougaxix in nominati forretress dustox conceptam pichuxes invenire diam maiorum posse./n Mea lotadiis murkrow charmeleon chanseitius idque chimechochix ex mediocritatem mediocritatem baltoy chinchourus fletchlinges nec weepinbellium appetere. Slugma seismitoados adhuc blitzle mismagius accusam lopunnipates exerci heatran. Copiosae accusam poliwag te scolipedentos ex vero grovylentatrix greninjares tornadus utinam voluptatum electivire laboramus fletchinderis baltoinerum geoduderas. Deseruisse venomoth bunearinii fletchinder tation yveltalatrix conceptam shroomish froslasstri chatotator metapodi girafarig scaevola. Dwebble poliwhirlia deseruisse pericula jirachi dico elaboraret sylveon sneasel spinarakerum budew at ei vim gastrodon raticate. Metang togepi petililii gallade yveltal ledybadiis duo quod solrockem steelix zangoosemom indoctum bibarel wooper. Cubone pansearuum grovyle gravelerim shelgon chimcharus fraxure tollit galladectos piloswinesos cubchoogiis boldore iriure simipour. Feebas ei scolipede heracrossuum no ariadosuum machamptri scytherius sed no an.'
	});
	
	Chapters.insert({
		legendId: skeletorId,
		userId: skeletor._id,
		author: skeletor.username, 
		subtitle: 'Defeated by He-Man',
		dateSpan: 'Jun 04 2013',
		backgroundColour: '#551A8B',
		submitted: now - 3 * 3600 * 1000, 
		body: 'Farts bagas double-barrel double-barrel farts double-barreluum plasticii fartso double-barrelus summo admodum plastic plastic. Farts mentitum id double-barreli double-barreles bag tincidunt rectum dicam usu poop at double-barrel plasticius eam. Qui farts in rectum fartsa farts augue mei poop rectum fartsem congue. Poopus rectum bag poop fartsius rectum double-barrel errem poopas torquatos poop bagorum delicata pri. Bag lobortis double-barreleis poop poop poop omnis fartsiorum poopia est poopius plastic delicata disputando malis.\n Poop mei omittantur rectum partiendo bag tamquam double-barrelorum ex plastic rectum poop. Feugait fartsis quo errem vel double-barrelis double-barrel farts bageorum. Utroque delenit plastic no poopius id bag double-barrela farts farts tincidunt rectumii poop sapientem. Fartsas hendrerit mel poopium poopatrix vel poop double-barreleorum exerci farts fartsia plasticia. Eu persecuti dicant usu dico double-barrelii rectum poop viris rectum. Posse fartseis plastic double-barrel pri fartsium eum rectumii poop wisi plasticom cetero rectumas plastic. Ea fartsiis sit plasticuum poop bag rectum te sint farts double-barreleorum. Te rectum in rectumii double-barrel bag poop plastic farts plastic rectumuum quod his rectum rectum. Errem poop fartsibus double-barrel plastic farts bagus plastic rectumos poopatrix bagator fartse poop bagtri plastic double-barrelii fartserum.'
	});

	Legends.insert({
		title: 'Meteor',
		userId: tom._id,
		author: tom.username,
		synopsis: 'Smokinga idque prevention support cessation cessationo referrentur protection supportiis preventioni an smokinga evaluationix vis. Supportius supporte volumus quo preventionebus eu has appellantur molestie cetero cessation tobaccontius cu cu labitur iracundia. Utroque otru prevention lobortis smokingim protection evaluationus tobacco mei an otructos nonumes. Cessationus vis tobacco cessation protectionaram vim cessationator cessationium duo smoking protection otrumom cessation protectionebus habeo tobacco cessation. Ne tobacconix cum consulatu protectionatrix cessation abhorreant nostro smoking support suas preventiontri has protectionebus protection. Preventionatrix protectionom per smoking saepe otruxios cessationia preventionibus preventionius protectionii cessation cessation tobaccoches ipsum tobaccoquius protection. \n Prevention evaluationae sea preventionius sed tobacco evaluationebus smokingus sint delicata in. Evaluation support preventionios smoking otruntae smokingos smokingios honestatis cessationibus protectionator numquam evaluation evaluation pri. Cessation disputationi prevention otru otru has sed ex cessation otrupate exerci veritus. Eu protectionis tobaccoctuum evaluationiis protection otructix evaluationeorum prevention evaluation otrunes hinc doming tobacco duo an protection. Sapientem smoking no forensibus cessationios support otru cotidieque quot cessationiis disputando congue. Supportaram everti tobacco otruria prevention protectionem supportium supportator cum protection sit cessationorum augue smokingius.',
		submitted: now - 10 * 3600 * 1000,
		chaptersCount: 0
	});

	Legends.insert({
		title: 'The Meteor Book',
		userId: tom._id,
		author: tom.username,
		synopsis: 'Smokinga idque prevention support cessation cessationo referrentur protection supportiis preventioni an smokinga evaluationix vis. Supportius supporte volumus quo preventionebus eu has appellantur molestie cetero cessation tobaccontius cu cu labitur iracundia. Utroque otru prevention lobortis smokingim protection evaluationus tobacco mei an otructos nonumes. Cessationus vis tobacco cessation protectionaram vim cessationator cessationium duo smoking protection otrumom cessation protectionebus habeo tobacco cessation. Ne tobacconix cum consulatu protectionatrix cessation abhorreant nostro smoking support suas preventiontri has protectionebus protection. Preventionatrix protectionom per smoking saepe otruxios cessationia preventionibus preventionius protectionii cessation cessation tobaccoches ipsum tobaccoquius protection. \n Prevention evaluationae sea preventionius sed tobacco evaluationebus smokingus sint delicata in. Evaluation support preventionios smoking otruntae smokingos smokingios honestatis cessationibus protectionator numquam evaluation evaluation pri. Cessation disputationi prevention otru otru has sed ex cessation otrupate exerci veritus. Eu protectionis tobaccoctuum evaluationiis protection otructix evaluationeorum prevention evaluation otrunes hinc doming tobacco duo an protection. Sapientem smoking no forensibus cessationios support otru cotidieque quot cessationiis disputando congue. Supportaram everti tobacco otruria prevention protectionem supportium supportator cum protection sit cessationorum augue smokingius.',
		submitted: now - 12 * 3600 * 1000,
		chaptersCount: 0
	}); 
}

