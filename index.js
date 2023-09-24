const childEl = document.getElementById('child-name');
const childMotherEl = document.getElementById('child-mother-name');
const childFatherEl = document.getElementById('child-father-name');
const childBirthDateEl = document.getElementById('child-birth-date');
const documentDate = document.getElementById('document-date');
const aNumber = document.getElementById('a-number');
const identityName = document.getElementById('identity-name');
const identityDob = document.getElementById('identity-dob');
const gender = document.getElementById('identity-gender');
const pcg1Name = document.getElementById('primary-caregiver-1');
const pcg1Dob = document.getElementById('primary-caregiver-1-dob');
const phone1 = document.getElementById('phone-1');
const pcgAddress = document.querySelector('.caregiver-address');
const pcgAddress2 = document.getElementById('primary-caregiver-address-2');
const cg1RelToSpons = document.getElementById(
  'caregiver-1-relationship-to-sponsor'
);
const cg1RelToChilc = document.getElementById(
  'caregiver-1-relationship-to-child'
);
const pcg2Name = document.getElementById('primary-caregiver-2');
const pcg2Dob = document.getElementById('primary-caregiver-2-dob');
const phone2 = document.getElementById('phone-2');
const cg2RelToSpons = document.getElementById(
  'caregiver-1-relationship-to-sponsor'
);
const cg2RelToChilc = document.getElementById(
  'caregiver-1-relationship-to-child'
);
const demographiCity = document.getElementById('demographic-city');
const childBirthplace = document.getElementById('child-birthplace');
const motherBirthplace = document.getElementById('mother-birthplace');

const childLeft = document.getElementById('date-child-left');
const childArrival = document.getElementById('doa');
const lastSchool = document.getElementById('last-school-date');
const maternalGmEL = document.getElementById('mother-mother-name');
const maternalGpEl = document.getElementById('mother-father-name-bc');
const motherBCname = document.getElementById('child-mother-name-bc');
const motherBdayBC = document.getElementById('mother-birth-date-bc');

const sponsorNameEl = document.getElementById('sponsor-name-bc');
const sponsorDobEl = document.getElementById('sponsor-birthday-bc');
const sponsorBirthplaceEl = document.getElementById('sponsor-birthplace');
const sponsorMomEl = document.getElementById('sponsor-mother-name-bc');
const sponsorDadEl = document.getElementById('sponsor-father-name-bc');

//FORIEGN ID HANDLERS//

const idName = document.getElementById('id-name');
const idDob = document.getElementById('id-dob');
const idCoo = document.getElementById('id-coo');
const idIssued = document.getElementById('id-issue-date');
const idExpires = document.getElementById('id-expiration-date');

//SPONSOR INFORMATION HANDLERS

const infoName = document.getElementById('info-name');
const infoDob = document.getElementById('info-dob');
const infoRel = document.getElementById('info-relationship');
const infoFace = document.getElementById('info-face');
const infoPhone = document.getElementById('info-phone');
const addressInfo = document.getElementById('info-address');

//UTILITY BILL HANDLERS//
const utilityName = document.getElementById('utility-name');
const billingDate = document.getElementById('billing-date');
const cities = [
  'Huehuetenango',
  'Quetzaltenango',
  'Guatemala City',
  'Coatepeque',
  'Mazatenango',
  'Escuintla',
  'Jalapa',
  'Jutiapa',
  'Zacapa',
  'Chiquimula',
];

const maleFirstNames = [
  'David',
  'Eric',
  'Roberto',
  'Luis',
  'Jose',
  'Jesus',
  'Gumecindo',
  'Isaiah',
  'Alejandro',
  'Lorenzo',
  'Enrique',
  'Juan',
  'Ahuitzotl',
];
let uacName = '';
let dadsName = '';
let momsName = '';
let maternalGrandma = '';
let maternalGrandpa = '';
let sponsorsName = '';
let caregiverCity;
let childANumber;

const femaleFirstNames = [
  'Vanessa',
  'Maria',
  'Carla',
  'Amalia',
  'Citlali',
  'Xochitl',
  'Lucila',
  'Camila',
  'Liz',
  'Gloria',
  'Karina',
  'Reyna',
  'Diamantina',
  'Cynthia',
  'Monserat',
  'Julieta',
  'Lila',
  'Aneli',
];

const people = [maleFirstNames, femaleFirstNames];
const lastNames = [
  'Hernandez',
  'Ortiz',
  'Flores',
  'Lopez',
  'Sanchez',
  'Manzanero',
  'Cervera',
  'Vargas',
  'Munoz',
  'Martinez',
  'Cervantes',
  'Perez',
  'Quintanilla',
  'Aguero',
  'Ramirez',
  'Rabago',
  'Cavazos',
];
function randomCity() {
  const randomIdx = Math.floor(Math.random() * cities.length);
  return cities[randomIdx];
}
function randomGender(person) {
  const randomNum = Math.floor(Math.random() * people.length);
  generateNames(randomNum, person);
  gender.textContent = randomNum === 0 ? 'Male' : 'Female';
}
function generateNames(idx, person) {
  let randomNum;
  for (var i = 0; i < 2; i++) {
    randomNum = Math.floor(Math.random() * people[idx].length);
    person += people[idx][randomNum] + ' ';
    people[idx].splice([randomNum], 1);
  }
  generateFamilyName(person);
  return person;
}

function generateFamilyName(name) {
  let randomNum;
  for (var i = 0; i < 2; i++) {
    randomNum = Math.floor(Math.random() * lastNames.length);
    name += lastNames[randomNum] + ' ';
    lastNames.splice([randomNum], 1);
  }
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
  renderNames();
}

function randomAnumber() {
  const randomThreeDigits = Math.floor(Math.random() * 900 + 100).toString();
  return [`123600${randomThreeDigits}`, `0${randomThreeDigits}`];
}

function renderDemographics() {}

function getInitials(child) {
  const nameArr = child.split(' ');
  const initials = nameArr.map((item) => {
    item.charAt(0).toUpperCase();
    return initials.join('');
  });
}
renderDemographics();

function renderNames() {
  const [anumber, lastFour] = randomAnumber();
  aNumber.innerText = anumber;
  const nameArr = uacName.split(' ');
  const initials = nameArr.map((item) => {
    return item.charAt(0);
  });
  document.title = `${lastFour}_${initials.join('').toUpperCase()}_Script`;
  childEl.textContent = uacName;
  childMotherEl.textContent = momsName;
  childFatherEl.textContent = dadsName;
  identityName.textContent = uacName;
  pcg1Name.textContent = momsName;
  pcg2Name.textContent = dadsName;
}
function generateBirthday(age) {
  const today = new Date();
  let randomAge = Math.floor(Math.random() * 4) + age;
  let randomMonth = Math.floor(Math.random() * 11);
  let randomDay = Math.floor(Math.random() * 30) + 1;

  today.setDate(randomDay);
  today.setMonth(randomMonth);
  today.setFullYear(today.getFullYear() - randomAge);

  return today;
}

function randomPhoneNumber() {
  const secondThree = Math.floor(Math.random() * 900 + 100);
  const lastFour = Math.floor(Math.random() * 10000);
  return `555-${secondThree}-${lastFour}`;
}

const childsBirthDay = generateBirthday(13);
childBirthDateEl.innerText = childsBirthDay.toLocaleDateString();
identityDob.innerText = childsBirthDay.toLocaleDateString();
const momsBirthday = generateBirthday(45);
const dadsBirthday = generateBirthday(45);
const sponsorsBirthday = generateBirthday(25);
pcg1Dob.innerHTML = momsBirthday.toLocaleDateString();
pcg2Dob.innerHTML = dadsBirthday.toLocaleDateString();

phone1.innerText = randomPhoneNumber();
phone2.innerText = randomPhoneNumber();

caregiverCity = randomCity();
pcgAddress.innerText = caregiverCity;
pcgAddress2.innerText = caregiverCity;
demographiCity.innerText = caregiverCity;
childBirthplace.innerText = caregiverCity;
motherBirthplace.innerText = caregiverCity;

function childLeaves() {
  const today = new Date();
  today.setDate(today.getDate() - 15);
  return today.toLocaleDateString();
}
function lastDayofSchool() {
  const today = new Date();
  today.setDate(today.getDate() - 20);
  return today.toLocaleDateString();
}
childLeft.innerText = childLeaves();
doa.innerText = new Date().toLocaleDateString();
lastSchool.innerText = lastDayofSchool();

function generateMothersLastName(child) {
  let momsLastNames;
  let familyName = child.split(' ')[3];
  let randomLastName = Math.floor(Math.random() * lastNames.length);
  momsLastNames = familyName + ' ' + lastNames[randomLastName];

  return momsLastNames;
}

function generateFathersLastName(child) {
  let dadsLastNames;
  let familyName = child.split(' ')[2];
  let randomLastName = Math.floor(Math.random() * lastNames.length);
  dadsLastNames = familyName + ' ' + lastNames[randomLastName];

  return dadsLastNames;
}

function generateMothersFirstNames() {
  let idx = Math.floor(Math.random() * femaleFirstNames.length);
  let firstNames = '';
  for (var i = 0; i < 2; i++) {
    firstNames += femaleFirstNames[idx] + ' ';
    femaleFirstNames.splice([idx], 1);
  }
  return firstNames;
}
function generateFathersFirstNames() {
  let idx = Math.floor(Math.random() * maleFirstNames.length);
  let firstNames = '';
  for (var i = 0; i < 2; i++) {
    firstNames += maleFirstNames[idx] + ' ';
    maleFirstNames.splice([idx], 1);
  }
  return firstNames;
}

function generateSiblingLastNames(sibling) {
  const nameArr = sibling.split(' ');
  let familyName = `${nameArr[2]} ${nameArr[3]}`;
  return familyName;
}

const maternalGrandmother = `${generateMothersFirstNames()}${generateMothersLastName(
  momsName
)}`;
const maternalGranfather = `${generateFathersFirstNames()}${generateFathersLastName(
  momsName
)}`;

maternalGmEL.textContent = maternalGrandmother;
maternalGpEl.textContent = maternalGranfather;
motherBCname.textContent = momsName;
motherBdayBC.textContent = momsBirthday.toLocaleDateString();

const sponsorFullName = `${generateMothersFirstNames()}${generateSiblingLastNames(
  momsName
)}`;

const sponsorDob = generateBirthday(42).toLocaleDateString();

sponsorNameEl.textContent = sponsorFullName;
sponsorDobEl.textContent = sponsorDob;
sponsorBirthplaceEl.textContent = caregiverCity;
sponsorMomEl.textContent = maternalGrandmother;
sponsorDadEl.textContent = maternalGranfather;

function getIssueDate() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 3);
  date.setDate(date.getDate() - 40);
  return date;
}

const sponsorIdIssue = getIssueDate();

function getExpirationDate(day) {
  const date = new Date(day);
  date.setFullYear(date.getFullYear() + 10);
  date.setDate(date.getDate() - 1);
  return date;
}

idName.textContent = sponsorFullName;
idDob.textContent = sponsorDob;
idCoo.textContent = 'Guatemala';
idIssued.textContent = sponsorIdIssue.toLocaleDateString();
idExpires.textContent = getExpirationDate(sponsorIdIssue).toLocaleDateString();

const sponsorPhone = randomPhoneNumber();

infoName.textContent = sponsorFullName;
infoDob.textContent = sponsorDob;
infoRel.textContent = 'Maternal Aunt';
infoFace.textContent = '2 years';
infoPhone.textContent = sponsorPhone;
addressInfo.textContent = '123 Anywhere, USA 34233';

function getBillingDate() {
  const today = new Date();
  today.setDate(1);
  return today;
}

billDate = getBillingDate().toLocaleDateString();
billingDate.textContent = billDate;
utilityName.textContent = sponsorFullName;

const bgCheckName = document.getElementById('bg-check-name');
const bgCheckDob = document.getElementById('bg-check-dob');

bgCheckName.textContent = sponsorFullName;
bgCheckDob.textContent = sponsorDob;
