const maleFirstNames = [
	'David',
	'Eric',
	'Robert',
	'Chuy',
	'Luis',
	'Jose',
	'Jesus',
	'Gumecindo',
];
let uacName = '';
let dadsName = '';
let momsName = '';
let maternalGrandma = '';
let maternalGrandpa = '';

const femaleFirstNames = ['Alina', 'Alana', 'Carla', 'Sarah', 'Amy'];

const people = [maleFirstNames, femaleFirstNames];
console.log(people[0]);
const lastNames = ['Hernandez', 'Ortiz', 'Flores', 'Tirado', 'Sanchez'];

function randomGender(person) {
	const randomNum = Math.floor(Math.random() * people.length);
	console.log(randomNum, person);
	generateNames(randomNum, person);
}
function generateNames(idx, person) {
	let randomNum;
	for (var i = 0; i < 2; i++) {
		randomNum = Math.floor(Math.random() * people[idx].length);
		person += people[idx][randomNum] + ' ';
		people[idx].splice([randomNum], 1);
	}
	generateFamilyName(person);
}

function generateFamilyName(name) {
	let randomNum;
	for (var i = 0; i < 2; i++) {
		randomNum = Math.floor(Math.random() * lastNames.length);
		name += lastNames[randomNum] + ' ';
		lastNames.splice([randomNum], 1);
	}
	console.log(name);
	generateParentsNames('male', dadsName, name);
}

randomGender(uacName);

function generateParentsNames(gender, person, child) {
	const idx = gender.toUpperCase() === 'MALE' ? 0 : 1;
	const familyName = child.split(' ')[2];
	let randomNum;
	for (var i = 0; i < 2; i++) {
		randomNum = Math.floor(Math.random() * people[idx].length);
		person += people[idx][randomNum] + ' ';
		people[idx].splice([randomNum], 1);
	}
	console.log(person, familyName);
}
