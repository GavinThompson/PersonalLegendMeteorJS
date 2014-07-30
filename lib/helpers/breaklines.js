UI.registerHelper('breaklines', function(text) {
    text = UI._escape(text)
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Spacebars.SafeString(text);
});