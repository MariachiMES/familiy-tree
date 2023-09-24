const childEl = document.getElementById('child-name');
const childMotherEl = document.getElementById('child-mother-name');
const childFatherEl = document.getElementById('child-father-name');

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
let sponsorsName = '';

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
	uacName = name;
	generateDadsName(dadsName, name);
	generateMomsName(momsName, name);
}

randomGender(uacName);

function generateDadsName(person, child) {
	let familyName = child.split(' ')[2];
	let randomNum;
	for (var i = 0; i < 2; i++) {
		randomNum = Math.floor(Math.random() * people[0].length);
		person += people[0][randomNum] + ' ';
		people[0].splice([randomNum], 1);
	}
	let randomLastName = Math.floor(Math.random() * lastNames.length);
	person += familyName + ' ' + lastNames[randomLastName];
	dadsName = person;

	console.log(person);
}

function generateMomsName(person, child) {
	let familyName = child.split(' ')[3];
	let randomNum;
	for (var i = 0; i < 2; i++) {
		randomNum = Math.floor(Math.random() * people[1].length);
		person += people[1][randomNum] + ' ';
		people[1].splice([randomNum], 1);
	}
	let randomLastName = Math.floor(Math.random() * lastNames.length);
	person += familyName + ' ' + lastNames[randomLastName];
	momsName = person;
	console.log(person);
	renderNames();
}

function renderNames() {
	childEl.textContent = uacName;
	childMotherEl.textContent = momsName;
	childFatherEl.textContent = dadsName;
}
