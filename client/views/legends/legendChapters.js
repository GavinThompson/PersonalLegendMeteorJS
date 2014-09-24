Template.legendChapters.helpers({ 
	// chapters: function() {
	// 	return Chapters.find({legendId: this._id}, {sort: {dateSpan: 1}});
	// },

	// publishedChapters: function() {
	// 	return Chapters.find({legendId: this._id, published: true}, {sort: {dateSpan: 1}});
	// },

	// unpublishedChapters: function() {
	// 	return Chapters.find({legendId: this._id, published: !(true)}, {sort: {dateSpan: 1}});
	// }

	// publisherChapterRows: function(){
	// 	pubChaps = Chapters.find({legendId: this._id, published: true}, {sort: {dateSpan: 1}});
	// 	pubChapLength = pubChaps.length;

	// 	pubChapRows = Math.ceil( A / b )
	// 	return pubChapRows
	// },

	// unpublishedChapterRows: function(){
	// 	unpubChaps = Chapters.find({legendId: this._id, published: !(true)}, {sort: {dateSpan: 1}});
	// 	unpubChapLength = unpubChaps.length;

	// 	unpubChapRows = Math.ceil( A / b )
	// 	return unpubChapRows
	// }

});

Template.legendChapters.unpublishedRows = 1;

Template.legendChapters.publishedRows = 1

Template.legendChapters.chapters_with_index = function() {
    var chapters = Chapters.find({legendId: this._id}, {sort: {dateSpan: 1}});

    for(var i = 0; i=chapters.length; i++) {
        chapters[i].index = i;
    }

    return chapters;
};

Template.legendChapters.published_chapters_with_index = function() {
    var pubChapters = Chapters.find({legendId: this._id, published: true}, {sort: {dateSpan: 1}});

    for(var i = 0; i=pubChapters.length; i++) {
        pubChapters[i].index = i;
    }

    return pubChapters;
};

Template.legendChapters.unpublished_chapters_with_index = function() {
    var unpubChapters = Chapters.find({legendId: this._id, published: !(true)}, {sort: {dateSpan: 1}});

    for(var i = 0; i=unpubChapters.length; i++) {
        unpubChapters[i].index = i;
    }

    return unpubChapters;
};