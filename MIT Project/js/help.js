/* global POP, HELPER */
/* global VERSION */

var HELP = new HELP_CLASS();

function HELP_CLASS() {
	
	//shortcuts
	this.help_shortcuts = function () {
		POP.add({title: "F9", value: 'Quick save'});
		POP.add({title: "F10", value: 'Quick load'});
		POP.add({title: "S", value: 'Save'});
		POP.add({title: "T", value: 'Trim'});
		POP.add({title: "D", value: 'Duplicate layer'});
		POP.add({title: "Del", value: 'Delete selection'});
		POP.add({title: "F", value: 'Auto adjust colors'});
		POP.add({title: "G", value: 'Grid on/off'});
		POP.add({title: "L", value: 'Rotate left'});
		POP.add({title: "N", value: 'New layer'});
		POP.add({title: "R", value: 'Resize'});
		POP.add({title: "-", value: 'Zoom out'});
		POP.add({title: "+", value: 'Zoom in'});
		POP.add({title: "CTRL + Z", value: 'Undo'});
		POP.add({title: "CTRL + A", value: 'Select all'});
		POP.add({title: "CTRL + V", value: 'Paste'});
		POP.add({title: "Arrow keys", value: 'Move active layer'});
		POP.show('Keyboard Shortcuts', '');
	};
	//about
	this.help_about = function () {
		var email = 'sajedul.islam.tushar@gmail.com';
		POP.add({title: "Name:", value: "MIT Project - Online Graphic Designer and Photo Editor"});
		POP.add({title: "Version:", value: VERSION});
		POP.add({title: "Author:", value: 'Sajedul Islam'});
		POP.add({title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'});
		POP.add({title: "GitHub:", html: '<a href="https://sajedulislam.github.io/MIT%20Project/index.html">https://sajedulislam.github.io/MIT%20Project/index.html</a>'});
		POP.show('About', '');
	};
	
}
