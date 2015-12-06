function askQuestions() {


var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var fullName = firstName + ' ' + lastName;

console.log('User\'s names is: ' + fullName);

$('h2').text('Hello ' + fullName);

var age = prompt('How old are you?');
age = parseInt(age);

if (age >= 18){
	console.log('User is an adult');
	alert('Welcome, adult!');

} else if (age>= 13) {

	console.log('User is a teenager');
	alert('Come back in a few years!');

	console.log('User is a child');
	alert('Go away, child!');

} 

/* if the user's first name is "General" and their last name is NOT "assembly", then greet the general! 
	(Hint: Use an alert() and a console.log ())
	PS - Test with anybody, and General Assembly, General Somebodyelse

	need an if 
*/ 

if (firstName === 'General' && lastName !== 'Assembly') {
	
	console.log('User is a General, not an Assembly');
	alert('Welcome, General!');
	
}
var faveColour = prompt('What is your favouirte colour?').toLowerCase();

if (faveColour == 'red' ||
	faveColour == 'green' ||
	faveColour == 'blue' ||
	faveColour == 'yellow'){

	$('h1').css('color', faveColour);
	}
}



// When the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	 //Hide all but the first thing
	 $('h3').not(':first-of-type').next().hide();

	 // When the user clicks on an h3
	 $('h3').on('click', function() {

	 	// Close all the sections
	 	$('h3').not(this).next().slideUp(100);

	 	// Toggle the next element
	 	$(this).next().slideToggle(100);

	 });

});