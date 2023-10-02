const body = document.getElementById("body");
window.addEventListener("load", () => {
  document.getElementById("style").href = "./styles2.css";
});
let totalCaseload = [];
const genders = ["Male", "Female"];

const maleNames = [
  "Josue",
  "Marco",
  "Jose",
  "Luis",
  "Angel",
  "Ricardo",
  "Daniel",
  "David",
  "Lorenzo",
  "Ahuitzotl",
  "Gumencindo",
  "Jesse",
  "Miguel",
  "Carlos",
  "Eric",
  "Hachicho",
  "Douglas",
  "Jimmithan",
  "Jonathan",
  "Ollin",
  "Omar",
  "Alejandro",
  "Paul",
];

const femaleNames = [
  "Mariana",
  "Haide",
  "Ruby",
  "Marisa",
  "Deloiza",
  "Melissa",
];

const lastNames = [
  "Hernandez",
  "Gatica",
  "Ortiz",
  "Lopez",
  "Martinez",
  "Garcia",
  "Gomez",
  "Cavazos",
];

const countriesOfOrigin = [
  {
    countryName: "Guatemala",
    languages: [
      "Akateco",
      "Jakalteco",
      "Mam",
      `K'iche`,
      `Q'eqchi`,
      "Kaqchikel",
    ],
    cities: [
      {
        cityName: "Guatemala",
        neighborhoods: ["Cayala", "Mixco"],
      },
      {
        cityName: "Peten",
        neighborhoods: ["San Benito", "San Jose de Los Negros"],
      },
      {
        cityName: "Alta Verapaz",
        neighborhoods: ["Oban", "Chisec"],
      },
      {
        cityName: "Teculutam",
        neighborhoods: ["Zacapa", "Teochitlan"],
      },
    ],
  },
  {
    countryName: "El Salvador",
    languages: ["Espanol"],
    cities: [
      {
        cityName: "San Miguel",
        neighborhoods: ["San Benito", "Ciudad Vieja"],
      },
      {
        cityName: "San Salvador",
        neighborhoods: ["Barrio San Esteban", "Colonia Manzano"],
      },
      {
        cityName: "La Union",
        neighborhoods: ["San Carlos", "Acajutla"],
      },
      {
        cityName: "Uzultan",
        neighborhoods: ["Jiquilisco", "Alegria"],
      },
    ],
  },

  {
    countryName: "Honduras",
    languages: ["Espanol"],
    cities: [
      {
        cityName: "Olancho",
        neighborhoods: ["San Francisco De La Paz", "La Union"],
      },
      {
        cityName: "San Pedro Sula",
        neighborhoods: ["Colonia Los Cedros", "Los Castanos"],
      },
      {
        cityName: "Yoro",
        neighborhoods: ["Arenal Morazan", "Santa Rita"],
      },
      {
        cityName: "La Paz",
        neighborhoods: ["San Pedro de Tutule", "San Juan"],
      },
    ],
  },
];

let hobbies = [
  "playing piano",
  "studying",
  "playing cards",
  "soccer",
  "baseball",
  "listening to music",
  "watching television",
];

function randomHobbies() {
  let skills = "";
  for (var i = 0; i < 2; i++) {
    const randomIdx = Math.floor(Math.random() * hobbies.length);
    skills += hobbies[randomIdx];
    if (i != 1) {
      console.log(skills.charAt(0).toUpperCase());
      skills.charAt(0);
      skills += " & ";
    } else {
      skills += ".";
    }
  }
  return skills;
}
function generateId() {
  const id = {};
  const idTypes = [
    "Foreign Passport",
    "State Id",
    "Legal Permanent Resident Card",
    "United States Passport",
  ];
  id.type = randomPlace(idTypes);
  id.issued = new Date();
  id.expires = new Date();
  return id;
}
randomHobbies();
let childLanguage;
let childCountry;
let childNeighborhood;
let childCity;

function randomCountry() {
  const randomIdx = Math.floor(Math.random() * countriesOfOrigin.length);
  const coo = countriesOfOrigin[randomIdx];
  childLanguage = randomLanguage(coo);
  return [childLanguage, coo];
}

function randomLanguage(country) {
  let spokenLanguage = "Espanol";
  console.log(country.languages, country.languages.length);

  if (country.languages.length > 1) {
    const languageIdx = Math.floor(Math.random() * country.languages.length);
    const d = Math.random() * 100;
    spokenLanguage = d > 60 ? country.languages[languageIdx] : "Espanol";
    console.log(spokenLanguage);
  }

  return spokenLanguage;
}

// function randomLanguage() {
//   const r = Math.random() *100
//   const randomIdx = Math.floor(Math.random() * languages.length)
//   const language =r > 10 ? 'Espanol' : languages[randomIdx]
//   return language

// }

const familyMembers = document.getElementById("family-members");

class FamilyMember {
  constructor(
    firstName,
    fathersFamilyName,
    mothersFamilyName,
    gender,
    relationship,
    category,
    language,
    birthday,
  ) {
    this.name = `${firstName}${fathersFamilyName} ${mothersFamilyName}`;
    this.firstName = firstName;
    this.fathersFamilyName = fathersFamilyName;
    this.mothersFamilyName = mothersFamilyName;
    this.gender = gender || randomGender();
    this.relationship = relationship;
    this.category = category;
    this.language = language || "Espanol";
    this.phone = randomPhoneNumber();
    this.birthday = generateBirthday(birthday);

    // this.phone = randomPhone();
    // this.address = address || randomAddress();
  }
}

function generateBirthday(generation) {
  const today = new Date();
  const randomDay = Math.floor(Math.random() * 30);
  const randomMonth = Math.floor(Math.random() * 12);
  const randomAge = Math.floor(generation + Math.random() * 6);
  today.setDate(randomDay);
  today.setMonth(randomMonth);
  today.setFullYear(today.getFullYear() - randomAge);
  return today;
}

function arrivalDates(journey) {
  const dateOfAdmission = new Date();
  const dateOfDeparture = new Date();
  const dateOfArrival = new Date();
  dateOfArrival.setDate(dateOfArrival.getDate() - 2);
  dateOfDeparture.setDate(dateOfAdmission.getDate() - journey - 2);
  console.log(
    "length of journey: ",
    journey,
    "date of admission: ",
    dateOfAdmission.toLocaleDateString(),
    "date of Deparature: ",
    dateOfDeparture.toLocaleDateString(),
    "date of Arrival: ",
    dateOfArrival.toLocaleDateString(),
  );
  return [
    dateOfAdmission.toLocaleDateString(),
    dateOfDeparture.toLocaleDateString(),
    dateOfArrival.toLocaleDateString(),
    journey,
  ];
}
function generateJourneyTime() {
  const d = Math.random() * 100;
  const longDays = Math.floor(25 + Math.random() * 45);
  const regularDays = Math.floor(12 + Math.random() * 8);
  const days = d > 10 ? regularDays : longDays;
  const [admission, departure, arrival, j] = arrivalDates(days);
  return [admission, departure, arrival, j];
}

function randomGender() {
  const randomIdx = Math.floor(Math.random() * genders.length);
  return genders[randomIdx];
}

function randomPhoneNumber() {
  const randomThree = Math.floor(Math.random() * 999).toString();
  const randomFour = Math.floor(Math.random() * 900 + 100).toString();
  return `(555)-${randomThree}-${randomFour}`;
}

function randomFirstNames(gender) {
  let firstNames = "";
  const arr =
    gender.toUpperCase() == "MALE"
      ? new Array(...maleNames)
      : new Array(...femaleNames);
  for (var i = 0; i < 2; i++) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    firstNames += arr[randomIdx] + " ";
    arr.splice([randomIdx], 1);
  }

  return firstNames;
}
function randomLastName() {
  let randomIdx = Math.floor(Math.random() * lastNames.length);
  return lastNames[randomIdx];
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
  "Ride Share Driver",
  "Wait Staff",
  "Bank Teller",
  "Case Manager",
  "Clinician",
  "Realtor",
  "Nurse",
  "Software Engineer",
  "Teacher",
  "Project Manager",
  "Program Manager",
  "Musician",
  "Band Director",
  "Social Media Influencer",
];
function getRandomCase() {
  const functionArr = [getCat1(), getCat2BMaternalAunt()];
  const randomIdx = Math.floor(Math.random() * functionArr.length);
  return functionArr[randomIdx];
}

function randomPlace(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return [arr[randomIdx], randomIdx];
}

function randomSalary() {
  return `$${(50000 + Math.floor(Math.random() * 50000)).toString()}`;
}

const demoKid = gE("demographic-name");
const demoDob = gE("demographic-dob");
const demoCoo = gE("demographic-coo");

function createFamily() {
  const boy = new FamilyMember(
    randomFirstNames("Male"),
    randomLastName(),
    randomLastName(),
    "Male",
    "Child",
    "",
    "Espanol",
    12,
  );

  const girl = new FamilyMember(
    randomFirstNames("Female"),
    boy.fathersFamilyName,
    boy.mothersFamilyName,
    "Female",
    "Child",
    "Espanol",
    "",
    12,
  );

  const maleSibling = new FamilyMember(
    randomFirstNames("Male"),
    boy.fathersFamilyName,
    boy.mothersFamilyName,
    "Male",
    "Brother",
    "2A",
    null,
    25,
  );
  const femaleSibling = new FamilyMember(
    randomFirstNames("Female"),
    boy.fathersFamilyName,
    boy.mothersFamilyName,
    "Female",
    "Sister",
    "2A",
    null,
    25,
  );

  const father = new FamilyMember(
    randomFirstNames("Male"),
    boy.fathersFamilyName,
    randomLastName(),
    "Male",
    "Father",
    "1",
    null,
    45,
  );

  const mother = new FamilyMember(
    randomFirstNames("Female"),
    boy.mothersFamilyName,
    randomLastName(),
    "Female",
    "Mother",
    "1",
    null,
    45,
  );

  const maternalGrandmother = new FamilyMember(
    randomFirstNames("Female"),
    mother.mothersFamilyName,
    randomLastName(),
    "Female",
    "Maternal Grandmother",
    "2A",
    null,
    45,
  );

  const maternalGrandfather = new FamilyMember(
    randomFirstNames("Male"),
    mother.fathersFamilyName,
    randomLastName(),
    "Male",
    "Maternal Grandfather",
    "2A",
    null,
    68,
  );

  const maternalAunt = new FamilyMember(
    randomFirstNames("Female"),
    mother.fathersFamilyName,
    mother.mothersFamilyName,
    "Female",
    "Maternal Aunt",
    "2B",
    null,
    40,
  );

  const maternalUncle = new FamilyMember(
    randomFirstNames("Male"),
    mother.fathersFamilyName,
    mother.mothersFamilyName,
    "Male",
    "Maternal Uncle",
    "2B",
    null,
    40,
  );
  const paternalGrandfather = new FamilyMember(
    randomFirstNames("Male"),
    father.fathersFamilyName,
    randomLastName(),
    "Male",
    "Paternal Grandfather",
    "2B",
    null,
    68,
  );

  const paternalGrandmother = new FamilyMember(
    randomFirstNames("Female"),
    father.mothersFamilyName,
    randomLastName(),
    "Female",
    "Paternal Grandmother",
    "2B",
    null,
    68,
  );

  const paternalGreatUncle = new FamilyMember(
    randomFirstNames("Male"),
    paternalGrandfather.fathersFamilyName,
    paternalGrandfather.mothersFamilyName,
    "Male",
    "Paternal Great Uncle",
    "3",
    null,
    68,
  );
  const paternalGreatAunt = new FamilyMember(
    randomFirstNames("Female"),
    paternalGrandfather.fathersFamilyName,
    paternalGrandfather.mothersFamilyName,
    "Female",
    "Paternal Great Aunt",
    "3",
    null,
    68,
  );
  const femaleGreatGrandparent = new FamilyMember(
    randomFirstNames("Female"),
    paternalGreatAunt.mothersFamilyName,
    randomLastName(),
    "Male",
    "Great-Grandmother",
    "3",
    null,
    90,
  );
  const maleGreatGrandparent = new FamilyMember(
    randomFirstNames("Male"),
    paternalGreatAunt.fathersFamilyName,
    randomLastName(),
    "Male",
    "Great-Grandmother",
    "3",
    null,
    90,
  );

  const paternalAunt = new FamilyMember(
    randomFirstNames("Female"),
    father.fathersFamilyName,
    father.mothersFamilyName,
    "Female",
    "Paternal Aunt",
    "2B",
    null,
    40,
  );

  const paternalUncle = new FamilyMember(
    randomFirstNames("Male"),
    father.fathersFamilyName,
    father.mothersFamilyName,
    "Male",
    "Paternal Uncle",
    "2B",
    null,
    40,
  );

  const paternalMale1stCousin = new FamilyMember(
    randomFirstNames("Male"),
    paternalUncle.fathersFamilyName,
    randomLastName(),
    "Male",
    "1st Counsin",
    "2B",
    null,
    25,
  );

  const paternalFemale1stCousin = new FamilyMember(
    randomFirstNames("Female"),
    paternalUncle.fathersFamilyName,
    randomLastName(),
    "Female",
    "1st Cousin",
    "2B",
    null,
    25,
  );
  const maternalMale1stCousin = new FamilyMember(
    randomFirstNames("Male"),
    maternalUncle.fathersFamilyName,
    randomLastName(),
    "Male",
    "1st Cousin",
    "2B",
    null,
    25,
  );

  const maternalFemale1stCousin = new FamilyMember(
    randomFirstNames("Female"),
    maternalUncle.fathersFamilyName,
    randomLastName(),
    "Female",
    "1st Cousin",
    "2B",
    null,
    25,
  );

  const femaleSpouse = new FamilyMember(
    randomFirstNames("Female"),
    randomLastName(),
    randomLastName(),
    "Female",
    "Sponsor's Spouse",
  );

  const maleSpouse = new FamilyMember(
    randomFirstNames("Male"),
    randomLastName(),
    randomLastName(),
    "Female",
    "Sponsor's Spouse",
  );
  const cat3MaleSpouse = new FamilyMember(
    randomFirstNames("Male"),
    randomLastName(),
    randomLastName(),
    "Male",
    "Sponsor Spouse",
  );

  const unrelatedFemale = new FamilyMember(
    randomFirstNames("Female"),
    cat3MaleSpouse.fathersFamilyName,
    randomLastName(),
    "Female",
    "Unrelated Sponsor",
    "3",
    null,
    30,
  );

  const unrelatedMale = new FamilyMember(
    randomFirstNames("Male"),
    randomLastName(),
    randomLastName(),
    "Male",
    "Unrelated Sponsor",
    "3",
    null,
    30,
  );

  const cat3FemaleSpouse = new FamilyMember(
    randomFirstNames("Female"),
    unrelatedMale.fathersFamilyName,
    randomLastName(),
    "Female",
    "Sponsor's Spouse",
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
    paternalGreatAunt,
    paternalGreatUncle,
    femaleGreatGrandparent,
    maleGreatGrandparent,
    femaleSpouse,
    maleSpouse,
    cat3FemaleSpouse,
    cat3MaleSpouse,
    unrelatedFemale,
    unrelatedMale,
  };

  return everyone;
}
function getCat1Mother() {
  console.log("getting Cat 1 Mother");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const {
    boy,
    girl,
    mother,
    father,
    maternalGrandfather,
    maternalGrandmother,
  } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = mother;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = maternalGrandfather;
  obj.maleCaregiver = maternalGrandmother;
  obj.maternalGrandfather = maternalGrandfather;
  obj.maternalGrandmother = maternalGrandmother;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 4536281736);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.mother.name,
      mother: obj.maternalGrandmother.name,
      father: obj.maternalGrandfather.name,
      dob: obj.mother.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat1Father() {
  console.log("getting Cat 1 Father");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const {
    boy,
    girl,
    mother,
    father,
    paternalGrandfather,
    paternalGrandmother,
  } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = father;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = paternalGrandmother;
  obj.maleCaregiver = paternalGrandfather;
  obj.paternalGrandfather = paternalGrandfather;
  obj.paternalGrandmother = paternalGrandmother;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 226382716);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.father.name,
      mother: obj.paternalGrandmother.name,
      father: obj.paternalGrandfather.name,
      dob: obj.father.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat2ASister() {
  console.log("getting Cat 2A Sister");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const { boy, girl, femaleSibling, mother, father } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = femaleSibling;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 2384927849);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.sponsor.name,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.sponsor.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat2ABrother() {
  console.log("getting Cat 2A Bother");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const { boy, girl, maleSibling, mother, father } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = maleSibling;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 8493728371);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.sponsor.name,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.sponsor.birthday,
      relationship: obj.sponsor.relationsihp,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat2BMaternalAunt() {
  console.log("getting Cat 2B Maternal Aunt");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const {
    boy,
    girl,
    maternalAunt,
    mother,
    father,
    maternalGrandmother,
    maternalGrandfather,
  } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = maternalAunt;
  obj.femaleGrandparent = maternalGrandmother;
  obj.maleGrandparent = maternalGrandfather;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 3372948302);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.mother.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.mother.birthday,
      relationship: obj.mother.relationship,
    },
    {
      childName: obj.sponsor.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.sponsor.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat2BMaternalUncle() {
  console.log("getting Cat 2B Maternal Uncle");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const {
    boy,
    girl,
    maternalUncle,
    mother,
    father,
    maternalGrandmother,
    maternalGrandfather,
  } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = maternalUncle;
  obj.femaleGrandparent = maternalGrandmother;
  obj.maleGrandparent = maternalGrandfather;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 1374974073);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
    },
    {
      childName: obj.mother.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.mother.birthday,
    },
    {
      childName: obj.sponsor.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.sponsor.birthday,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat2BPaternalUncle() {
  console.log("getting Cat 2B Paternal Uncle");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const {
    boy,
    girl,
    paternalUncle,
    mother,
    father,
    paternalGrandmother,
    paternalGrandfather,
  } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = paternalUncle;
  obj.femaleGrandparent = paternalGrandmother;
  obj.maleGrandparent = paternalGrandfather;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 842490174);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.father.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.mother.birthday,
      relationship: obj.father.relationship,
    },
    {
      childName: obj.sponsor.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.sponsor.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat2BPaternalAunt() {
  console.log("getting Cat 2B Paternal Uncle");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const {
    boy,
    girl,
    paternalAunt,
    mother,
    father,
    paternalGrandmother,
    paternalGrandfather,
  } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = paternalAunt;
  obj.femaleGrandparent = paternalGrandmother;
  obj.maleGrandparent = paternalGrandfather;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 9732739481);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.father.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.mother.birthday,
      relationship: obj.father.relationship,
    },
    {
      childName: obj.sponsor.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.sponsor.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat3greatAunt() {
  console.log("getting Cat 3 Paternal Great Aunt");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const {
    boy,
    girl,
    mother,
    father,
    paternalGrandmother,
    paternalGrandfather,
    paternalGreatAunt,
    femaleGreatGrandparent,
    maleGreatGrandparent,
  } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = paternalGreatAunt;
  obj.femaleGreatGrandparent = femaleGreatGrandparent;
  obj.maleGreatGrandparent = maleGreatGrandparent;
  obj.femaleGrandparent = paternalGrandmother;
  obj.maleGrandparent = paternalGrandfather;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 6482617392);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.father.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.father.birthday,
      relationship: obj.father.relationship,
    },
    {
      childName: obj.maleGrandparent.name,
      mother: obj.femaleGreatGrandparent.name,
      father: obj.maleGreatGrandparent.name,
      dob: obj.maleGrandparent.birthday,
      relationship: obj.maleGreatGrandparent.relationship,
    },
    {
      childName: obj.sponsor.name,
      mother: obj.femaleGreatGrandparent.name,
      father: obj.maleGreatGrandparent.name,
      dob: obj.sponsor.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat3greatUncle() {
  console.log("getting Cat 3 Paternal Great Uncle");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const {
    boy,
    girl,
    mother,
    father,
    paternalGrandmother,
    paternalGrandfather,
    paternalGreatUncle,
    femaleGreatGrandparent,
    maleGreatGrandparent,
  } = createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = paternalGreatUncle;
  obj.femaleGreatGrandparent = femaleGreatGrandparent;
  obj.maleGreatGrandparent = maleGreatGrandparent;
  obj.femaleGrandparent = paternalGrandmother;
  obj.maleGrandparent = paternalGrandfather;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.id = Date.now() + Math.floor(Math.random() * 5638257172);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.father.name,
      mother: obj.femaleGrandparent.name,
      father: obj.maleGrandparent.name,
      dob: obj.father.birthday,
      relationship: obj.father.relationship,
    },
    {
      childName: obj.maleGrandparent.name,
      mother: obj.femaleGreatGrandparent.name,
      father: obj.maleGreatGrandparent.name,
      dob: obj.maleGrandparent.birthday,
      relationship: obj.maleGreatGrandparent.relationship,
    },
    {
      childName: obj.sponsor.name,
      mother: obj.femaleGreatGrandparent.name,
      father: obj.maleGreatGrandparent.name,
      dob: obj.sponsor.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat3unrelatedFemale() {
  console.log("getting Cat 3 Unrelated Female");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const { boy, girl, mother, father, unrelatedFemale, cat3MaleSpouse } =
    createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = unrelatedFemale;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.sponsor.spouse = cat3MaleSpouse;
  obj.id = Date.now() + Math.floor(Math.random() * 4628366381);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.sponsor.name,
      mother: `${randomFirstNames("Female")} ${
        obj.sponsor.mothersFamilyName
      } ${randomLastName()}`,
      father: `${randomFirstNames("Male")} ${
        obj.sponsor.fathersFamilyName
      } ${randomLastName()}`,
      dob: obj.sponsor.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function getCat3UnrelatedMale() {
  console.log("getting Cat 3 Unrelated Male");

  const [admit, depart, arrive, j] = generateJourneyTime();
  const { boy, girl, mother, father, unrelatedMale, cat3FemaleSpouse } =
    createFamily();
  const genderArr = [boy, girl];
  const child = randomPlace(genderArr);
  console.log(child);
  const obj = {};
  const [childLanguage, coo] = randomCountry();
  let [randomCity, idx] = randomPlace(coo.cities);
  let neighborhood = randomPlace(coo.cities[idx].neighborhoods);
  obj.admitDate = admit;
  obj.departDate = depart;
  obj.arrivalDate = arrive;
  obj.journey = j;
  obj.language = childLanguage;
  obj.coo = coo.countryName;
  obj.city = randomCity;
  obj.neighborhood = neighborhood[0];
  obj.childName = child[0].name;
  obj.childFirstName = child[0].firstName;
  obj.childLastName =
    child[0].fathersFamilyName + " " + child[0].mothersFamilyName;
  obj.childGender = child[0].gender;
  obj.childDob = child[0].birthday;
  obj.sponsor = unrelatedMale;
  obj.mother = mother;
  obj.father = father;
  obj.femaleCaregiver = mother;
  obj.maleCaregiver = father;
  obj.hobbies = randomHobbies();
  obj.sponsor.employment = randomPlace(professions);
  obj.sponsor.salary = randomSalary();
  obj.sponsor.spouse = cat3FemaleSpouse;
  obj.id = Date.now() + Math.floor(Math.random() * 6482974829);
  const bcs = [
    {
      childName: obj.childFirstName + obj.childLastName,
      mother: obj.mother.name,
      father: obj.father.name,
      dob: obj.childDob,
      relationship: "Child",
    },
    {
      childName: obj.sponsor.name,
      mother: `${randomFirstNames("Female")} ${
        obj.sponsor.mothersFamilyName
      } ${randomLastName()}`,
      father: `${randomFirstNames("Male")} ${
        obj.sponsor.fathersFamilyName
      } ${randomLastName()}`,
      dob: obj.sponsor.birthday,
      relationship: obj.sponsor.relationship,
    },
  ];
  obj.birthCertificates = bcs;

  totalCaseload.push(obj);
  console.log(totalCaseload);
  renderKid(obj);
}

function gE(elem) {
  return document.getElementById(elem);
}

function renderKid(kid) {
  renderDemographics(kid);
}

// const aNumber = gE('a-number')
// const childsName = gE('child-name')
// const childsMother = gE('child-mother')
// const childsFather = gE('child-father')
// const childSponsor = gE('child-sponsor')
const familyRows = gE("family-rows");

const cases = [];

function createCaseload(rounds) {
  let count = 1;
  while (count < rounds) {
    cases.push(createFamily());
    count++;
  }
  cases.forEach((kid, idx) => renderCases(kid, idx));
}

function renderCases(child, idx) {
  console.log(child);
  const tableRow = document.createElement("tr");
  const kidName = document.createElement("td");
  const kidMom = document.createElement("td");
  const kidDad = document.createElement("td");
  const kidSponsor = document.createElement("td");

  tableRow.setAttribute("data-index", idx);

  kidName.textContent = child.boy.name;
  kidMom.textContent = child.mother.name;
  kidDad.textContent = child.father.name;
  kidSponsor.textContent = child.paternalAunt.name;

  tableRow.append(kidName, kidMom, kidDad, kidSponsor);
  familyRows.append(tableRow);
}

function renderDemographics(kid) {
  const bodyEl = document.getElementById("body");
  const container = document.createElement("div");
  container.classList.add("demographics-container", "document");
  const nameDemographic = document.createElement("div");
  const dobDemographic = document.createElement("div");
  const aNumberDemographic = document.createElement("div");
  const cooDemographic = document.createElement("div");
  const demographics = document.createElement("div");
  const header = document.createElement("div");
  header.classList.add("demographic-header");

  nameDemographic.append(header);
  nameDemographic.innerText = `Child's Name`;
  demographics.append(
    nameDemographic,
    dobDemographic,
    aNumberDemographic,
    cooDemographic,
  );
  demographics.innerHTML = `<style>
  .demographics-container {
    height: 200px;
    margin: 1rem;
    padding: 1rem;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1px solid black;
    border-radius: 5px;
}

.demographic-header {

    font-size: 20px;
    display: flex;
    text-align: center;
    border-bottom: 1px solid black;
}</style><div class="demographic-info">
<div class = "demographic-header">Child Name:</div>
<div id = "demographic-name">${kid.childName}</div>
   </div>
<div class="demographic-info">
<div class = "demographic-header">A#</div>
</div>
<div class="demographic-info">
<div class = "demographic-header">DOB:</div>
<div id="demographic-dob">${kid.childDob.toLocaleDateString()}</div>
</div>
<div class="demographic-info">
<div class = "demographic-header">COO:</div>
<div id="demographic-coo">${`Country of Origin: ${kid.coo} City: ${kid.city.cityName} Neighborhood: ${kid.neighborhood}`}</div>
</div>`;
  container.append(demographics);
  bodyEl.prepend(container);
}

// const cat1 = getCat1Mother();
// const cat1Dad = getCat1Father();
// const cat2ASister = getCat2ASister();
// const cat2ABrother = getCat2ABrother();
// const cat2BMaternalAunt = getCat2BMaternalAunt();
// const cat2BMaternalUncle = getCat2BMaternalUncle();
// const cat3greatAunt = getCat3greatAunt();
// const cat3greatUncle = getCat3greatUncle();
// const cat3unrelatedFemale = getCat3unrelatedFemale();
// const cat3unrelatedMale = getCat3UnrelatedMale();

const functionObj = [
  getCat1Mother,
  getCat2ASister,
  getCat2BMaternalAunt,
  getCat3greatAunt,
  getCat1Father,
  getCat2ABrother,
  getCat2BPaternalAunt,
  getCat3greatUncle,
  getCat1Mother,
  getCat2ASister,
  getCat2BMaternalUncle,
  getCat3UnrelatedMale,
  getCat1Father,
  getCat2ABrother,
  getCat2BPaternalUncle,
  getCat3unrelatedFemale,
];

function generateTonsOfCases(rounds) {
  let count = 1;
  for (var i = 0; count <= rounds; i++) {
    if (i >= functionObj.length - 1) {
      i = 1;
    }
    functionObj[i]();
    count++;
  }
}
console.log(generateId());
generateTonsOfCases(32);
