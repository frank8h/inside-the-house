/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'u': {
		name: 'Unknown',
		color: '#d9d9d9'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [

'scene black',

'centered 11:48 PM',

'wait 1000',

'centered New Message',

'wait 1000',

'centered Your life inside the house.',

{
'Input': {
'Text': 'What should I call you?',
'Validation': function(input){
return input.trim().length > 0;
},
'Save': function(input){
this.storage({
player:{
name:input
}
});
return true;
},
'Revert': function(){
this.storage({
player:{
name:''
}
});
},
'Warning':'Enter your name'
}
},

'u Nice to meet you, {{player.name}}.',

'u Please go outside.',

{
'Choice':{
'Dialog':'What will you do?',
'Open':{
'Text':'Go outside',
'Do':'jump Outside'
},
'Ignore':{
'Text':'Ignore',
'Do':'jump Ignore'
}
}
}

],

'Outside':[

'centered 11:48 PM',

'u There is a box outside.',

'end'

],

'Ignore':[

'centered You stayed inside.',

'u Are you sure?',

'end'

]

});