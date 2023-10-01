let totalCaseload = []
const genders = ['Male', 'Female'];


const maleNames = [
  'Josue',
  'Marco',
  'Jose',
  'Luis',
  'Angel',
  'Ricardo',
  'Daniel',
  'David',
  'Lorenzo',
  'Ahuitzotl',
  'Gumencindo',
  'Jesse',
  'Miguel',
  'Carlos',
  'Eric',
  'Hachicho',
  'Douglas',
  'Jimmithan',
  'Jonathan',
  'Ollin',
  'Omar',
  'Alejandro',
  'Paul',
];

const femaleNames = [
  'Mariana',
  'Haide',
  'Ruby',
  'Marisa',
  'Deloiza',
  'Melissa',
];

const lastNames = [
  'Hernandez',
  'Gatica',
  'Ortiz',
  'Lopez',
  'Martinez',
  'Garcia',
  'Gomez',
  'Cavazos',
];


const countriesOfOrigin = [
  {
    countryName: 'Guatemala',
    languages: ['Akateco', 'Jakalteco', 'Mam', `K'iche`, `Q'eqchi`, "Kaqchikel"],
    cities: [
      {
        cityName: 'Guatemala',
        neighborhoods: ['Cayala', 'Mixco']
      },
      {
        cityName: 'Peten',
        neighborhoods: ['San Benito', 'San Jose de Los Negros']
      },
      {
        cityName: 'Alta Verapaz',
        neighborhoods: ['Oban', 'Chisec']
      },
      {
        cityName: 'Teculutam',
        neighborhoods: ['Zacapa', "Teochitlan"]
      }
    ]
  },
  {
    countryName: 'El Salvador',
    languages: ["Espanol"],
    cities: [
      {
        cityName: 'San Miguel',
        neighborhoods: ['San Benito', 'Ciudad Vieja']
      },
      {
        cityName: 'San Salvador',
        neighborhoods: ['Barrio San Esteban', 'Colonia Manzano']
      },
      {
        cityName: 'La Union',
        neighborhoods: ['San Carlos', 'Acajutla']
      },
      {
        cityName: 'Uzultan',
        neighborhoods: ['Jiquilisco', "Alegria"]
      }
    ]
  },

  {
    countryName: 'Honduras',
    languages: ["Espanol"],
    cities: [
      {
        cityName: 'Olancho',
        neighborhoods: ['San Francisco De La Paz', 'La Union']
      },
      {
        cityName: 'San Pedro Sula',
        neighborhoods: ['Colonia Los Cedros', 'Los Castanos']
      },
      {
        cityName: 'Yoro',
        neighborhoods: ['Arenal Morazan', 'Santa Rita']
      },
      {
        cityName: 'La Paz',
        neighborhoods: ['San Pedro de Tutule', "San Juan"]
      }
    ]
  },
]

let hobbies = [
  'playing piano',
  'studying',
  'playing cards',
  'soccer',
  'baseball',
  'listening to music',
  'watching television'
]

function randomHobbies() {
  let skills = ''
  for(var i = 0; i < 2; i++){
    const randomIdx = Math.floor(Math.random() * hobbies.length)
    skills += hobbies[randomIdx]
    if(i != 1){
      console.log(skills.charAt(0).toUpperCase())
      skills.charAt(0)
      skills += ' & '
    }
    else {
      skills += '.'
    }
  }
  return skills
}

randomHobbies()
let childLanguage
let childCountry
let childNeighborhood
let childCity

function randomCountry(){
  const randomIdx = Math.floor(Math.random() * countriesOfOrigin.length)
  const coo = countriesOfOrigin[randomIdx]
  childLanguage = randomLanguage(coo)
  return [childLanguage, coo]
}

function randomLanguage(country) {
  let spokenLanguage = 'Espanol'
  console.log(country.languages, country.languages.length)

  if(country.languages.length > 1) {
    const languageIdx = Math.floor(Math.random() * country.languages.length)
    const d = Math.random() * 100
    spokenLanguage = d > 60 ? country.languages[languageIdx] : "Espanol"
    console.log(spokenLanguage)
  }

  return spokenLanguage
}




// function randomLanguage() {
//   const r = Math.random() *100
//   const randomIdx = Math.floor(Math.random() * languages.length)
//   const language =r > 10 ? 'Espanol' : languages[randomIdx]
//   return language

// }

const familyMembers = document.getElementById('family-members')

class FamilyMember {
  constructor(firstName, fathersFamilyName, mothersFamilyName, gender, relationship, category, language, birthday) {
    this.name = `${firstName}${fathersFamilyName} ${mothersFamilyName}`;
    this.firstName = firstName;
    this.fathersFamilyName = fathersFamilyName;
    this.mothersFamilyName = mothersFamilyName;
    this.gender = gender || randomGender();
    this.relationship = relationship;
    this.category = category;
    this.language = language || 'Espanol'
    this.phone = randomPhoneNumber() 
    this.birthday = generateBirthday(birthday);

    // this.phone = randomPhone();
    // this.address = address || randomAddress();
  }
}


function generateBirthday(generation){
const today = new Date()
const randomDay = Math.floor(Math.random() * 30)
const randomMonth = Math.floor(Math.random() *12)
const randomAge = Math.floor(generation + Math.random() * 6)
today.setDate(randomDay)
today.setMonth(randomMonth)
today.setFullYear(today.getFullYear() - randomAge)
return today
}

function arrivalDates(journey) {
  const dateOfAdmission = new Date() 
  const dateOfDeparture = new Date()
  const dateOfArrival = new Date()
  dateOfArrival.setDate(dateOfArrival.getDate()-2)
  dateOfDeparture.setDate(dateOfAdmission.getDate()-journey-2)
  console.log( 'length of journey: ', journey,'date of admission: ', dateOfAdmission.toLocaleDateString(), 'date of Deparature: ', dateOfDeparture.toLocaleDateString(), 'date of Arrival: ',dateOfArrival.toLocaleDateString())
  return [dateOfAdmission.toLocaleDateString(), dateOfDeparture.toLocaleDateString(), dateOfArrival.toLocaleDateString(), journey]
}
function generateJourneyTime() {
  const d = Math.random() * 100
  const longDays = Math.floor(25 + Math.random() * 45)
  const regularDays = Math.floor(12 + Math.random() * 8)
  const days = d > 10 ? regularDays : longDays 
  const [admission, departure, arrival, j] = arrivalDates(days)
  return [admission, departure, arrival, j]
}



function randomGender() {
  const randomIdx = Math.floor(Math.random() * genders.length);
  return genders[randomIdx];
}

function randomPhoneNumber() {
  const randomThree = Math.floor(Math.random() *999).toString()
  const randomFour = Math.floor(Math.random()*900 +100).toString()
  return `(555)-${randomThree}-${randomFour}`
}

function randomFirstNames(gender) {
  let firstNames = '';
  const arr =
    gender.toUpperCase() == 'MALE'
      ? new Array(...maleNames)
      : new Array(...femaleNames);
  for (var i = 0; i < 2; i++) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    firstNames += arr[randomIdx] + ' ';
    arr.splice([randomIdx], 1);
  }

  return firstNames;
}
function randomLastName() {
  let randomIdx = Math.floor(Math.random() * lastNames.length);
  return lastNames[randomIdx];
}

function createFamily () {
const boy = new FamilyMember(
  randomFirstNames('Male'),
  randomLastName(),
  randomLastName(),
  'Male',
  'Child',
  "",
  'Espanol',
  12
);

const girl = new FamilyMember(
  randomFirstNames('Female'),
  boy.fathersFamilyName,
  boy.mothersFamilyName,
  'Female',
  'Child',
  'Espanol',
  12
);

const maleSibling = new FamilyMember(
  randomFirstNames('Male'),
  boy.fathersFamilyName,
  boy.mothersFamilyName,
  'Male',
  'Brother',
  '2A',
  null,
  25
)
const femaleSibling = new FamilyMember(
  randomFirstNames('Female'),
  boy.fathersFamilyName,
  boy.mothersFamilyName,
  'Female',
  'Sister',
  '2A',
  null,
  25
)

const father = new FamilyMember(
  randomFirstNames('Male'),
  boy.fathersFamilyName,
  randomLastName(),
  'Male',
  'Father',
  '1',
  null,
  45,
);

const mother = new FamilyMember(
  randomFirstNames('Female'),
  boy.mothersFamilyName,
  randomLastName(),
  'Female',
  'Mother',
  '1',
  null,
  45,
);

const maternalGrandmother = new FamilyMember(
  randomFirstNames('Female'),
  mother.mothersFamilyName,
  randomLastName(),
  'Female',
  'Maternal Grandmother',
  '2A',
  null,
  45
);

const maternalGrandfather = new FamilyMember(
  randomFirstNames('Male'),
  mother.fathersFamilyName,
  randomLastName(),
  'Male',
  'Maternal Grandfather',
  '2A',
  null,
  68,
);

const maternalAunt = new FamilyMember(
  randomFirstNames('Female'),
  mother.fathersFamilyName,
  mother.mothersFamilyName,
  'Female',
  'Maternal Aunt',
  '2B',
  null,
  40
);

const maternalUncle = new FamilyMember(
  randomFirstNames('Male'),
  mother.fathersFamilyName,
  mother.mothersFamilyName,
  'Male',
  'Maternal Uncle',
  '2B',
  null,
  40
);
const paternalGrandfather = new FamilyMember(
  randomFirstNames('Male'),
  father.fathersFamilyName,
  randomLastName(),
  'Male',
  'Paternal Grandfather',
  '2B',
  null,
  68

);

const paternalGrandmother = new FamilyMember(
  randomFirstNames('Female'),
  father.mothersFamilyName,
  randomLastName(),
  'Female',
  'Paternal Grandmother',
  '2B',
  null,
  68
);

const paternalAunt = new FamilyMember(
  randomFirstNames('Female'),
  father.fathersFamilyName,
  father.mothersFamilyName,
  'Female',
  'Paternal Aunt',
  '2B',
  null,
  40
);

const paternalUncle = new FamilyMember(
  randomFirstNames('Male'),
  father.fathersFamilyName,
  father.mothersFamilyName,
  'Male',
  'Paternal Uncle',
  '2B',
  null,
  40
);

const paternalMale1stCousin = new FamilyMember(
  randomFirstNames('Male'),
  paternalUncle.fathersFamilyName,
  randomLastName(),
  'Male',
  '1st Counsin',
  '2B',
  null,
  25
);

const paternalFemale1stCousin = new FamilyMember(
  randomFirstNames('Female'),
  paternalUncle.fathersFamilyName,
  randomLastName(),
  'Female',
  '1st Cousin',
  '2B',
  null,
  25
);
const maternalMale1stCousin = new FamilyMember(
  randomFirstNames('Male'),
  maternalUncle.fathersFamilyName,
  randomLastName(),
  'Male',
  '1st Cousin',
  '2B',
  null,
  25
);

const maternalFemale1stCousin = new FamilyMember(
  randomFirstNames('Female'),
  maternalUncle.fathersFamilyName,
  randomLastName(),
  'Female',
  '1st Cousin',
  '2B',
  null,
  25
);
const everyone = {
  boy,
  girl,
  maleSibling,
  femaleSibling,
  mother,
  father,
  maternalAunt,
  maternalUncle,
  paternalAunt,
  paternalUncle,
  maternalGrandfather,
  paternalGrandfather,
  maternalGrandmother,
  paternalGrandmother,
  paternalMale1stCousin,
  maternalMale1stCousin,
  maternalFemale1stCousin,
  paternalFemale1stCousin,
}

return everyone
}

// const siblings = [boy, girl];
// const firstCousin = [
//   paternalMale1stCousin,
//   maternalMale1stCousin,
//   maternalFemale1stCousin,
//   paternalFemale1stCousin,
// ];
// const cat2B = [
//   maternalAunt,
//   maternalUncle,
//   paternalAunt,
//   paternalUncle,
//   maternalGrandfather,
//   paternalGrandfather,
//   maternalGrandmother,
//   paternalGrandmother,
// ];

const professions = [
  'Ride Share Driver', 
  'Wait Staff',
  'Bank Teller',
  'Case Manager',
  'Clinician',
  'Realtor',
  'Nurse',
  'Software Engineer',
  'Teacher',
  'Project Manager',
  'Program Manager',
  'Musician',
  'Band Director',
  'Social Media Influencer'
]
function getRandomCase() {
  const functionArr = [
    getCat1(),
    getCat2BMaternalAunt()
  ]
  const randomIdx = Math.floor(Math.random() * functionArr.length)
  return functionArr[randomIdx]
}

function randomPlace(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length)
  return [arr[randomIdx], randomIdx]
}

function randomSalary() {
  return `$${(50000 + Math.floor(Math.random() * 50000)).toString()}`
}

function getCat1Mother(){
  console.log('getting Cat 1')
  const [admit, depart, arrive, j] = generateJourneyTime()
  const {boy,girl, mother, father, maternalGrandfather, maternalGrandmother} = createFamily()
  const genderArr = [boy,girl]
  const child = randomPlace(genderArr)
  const obj = {}
  const [childLanguage, coo] = randomCountry()
  let [randomCity, idx] = randomPlace(coo.cities)
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods)
  obj.admitDate = admit
  obj.departDate = depart
  obj.arrivalDate =arrive
  obj.journey = j 
  obj.language = childLanguage
  obj.coo = coo.countryName
  obj.city = randomCity
  obj.neighborhood = neighborhood
  obj.childName = child[0].name
  obj.childFirstName = child[0].firstName
  obj.childLastName = child[0].fathersFamilyName + ' ' + child[0].mothersFamilyName
  obj.childGender = child[0].gender
  obj.childDob = child[0].birthday
  obj.sponsor = mother
  obj.mother = mother
  obj.father = father
  obj.maternalGrandfather = maternalGrandfather
  obj.maternalGrandmother = maternalGrandmother
  obj.id = Date.now() + Math.floor(Math.random() * 1999)
  console.log(obj)
  totalCaseload.push(obj)
  const bcs = [
    {childName : obj.childFirstName + obj.childLastName,
  mother: obj.mother.name,
father: obj.father.name,
dob: obj.childDob},
{
  childName: obj.mother.name,
  mother: obj.maternalGrandmother.name,
  father: obj.maternalGrandfather.name,
  dob: obj.mother.birthday
}
  ]
  obj.hobbies = randomHobbies()
  obj.birthCertificates = bcs
  obj.sponsor.employment = randomPlace(professions)
  obj.sponsor.salary = randomSalary()
  console.log('the sponsor is: ', obj.sponsor)
  console.log(totalCaseload)
}

function getCat2BMaternalAunt() {
  console.log('getting Cat 2B Maternal Aunt')
  const {boy, mother, father, maternalGrandfather, maternalGrandmother, maternalAunt} = createFamily()
  return [boy, mother, father, maternalGrandfather, maternalGrandmother, maternalAunt]
}

function gE(elem) {
 return document.getElementById(elem)
}

// const aNumber = gE('a-number')
// const childsName = gE('child-name')
// const childsMother = gE('child-mother')
// const childsFather = gE('child-father')
// const childSponsor = gE('child-sponsor')
const familyRows = gE('family-rows')

const cases = []

function createCaseload(rounds) {
  let count = 1
  while(count < rounds) {
    cases.push(createFamily())
    count ++
  }
  cases.forEach((kid, idx)=> renderCases(kid, idx))
}

function renderCases(child, idx) {
  console.log(child)
  const tableRow = document.createElement('tr')
  const kidName = document.createElement('td')
  const kidMom = document.createElement('td')
  const kidDad = document.createElement('td')
  const kidSponsor = document.createElement('td')

  tableRow.setAttribute('data-index', idx)

  kidName.textContent = child.boy.name
  kidMom.textContent = child.mother.name
  kidDad.textContent = child.father.name
  kidSponsor.textContent = child.paternalAunt.name

  tableRow.append(kidName, kidMom, kidDad, kidSponsor)
  familyRows.append(tableRow)
}


const what = getCat1Mother()
const why = getCat1Mother()

