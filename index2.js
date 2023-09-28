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

class FamilyMember {
  constructor(firstName, fathersFamilyName, mothersFamilyName, gender) {
    this.name = `${firstName}${fathersFamilyName} ${mothersFamilyName}`;
    this.firstName = firstName;
    this.fathersFamilyName = fathersFamilyName;
    this.mothersFamilyName = mothersFamilyName;
    this.gender = gender || randomGender();
    // this.phone = randomPhone();
    // this.address = address || randomAddress();
  }
}
function randomGender() {
  const randomIdx = Math.floor(Math.random() * genders.length);
  return genders[randomIdx];
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

const boy = new FamilyMember(
  randomFirstNames('Male'),
  randomLastName(),
  randomLastName(),
  'Male'
);

const girl = new FamilyMember(
  randomFirstNames('Female'),
  boy.fathersFamilyName,
  boy.mothersFamilyName,
  'Female'
);

const father = new FamilyMember(
  randomFirstNames('Male'),
  boy.fathersFamilyName,
  randomLastName(),
  'Male'
);

const mother = new FamilyMember(
  randomFirstNames('Female'),
  boy.mothersFamilyName,
  randomLastName(),
  'Female'
);

const maternalGrandmother = new FamilyMember(
  randomFirstNames('Female'),
  mother.mothersFamilyName,
  randomLastName(),
  'Female'
);

const maternalGrandfather = new FamilyMember(
  randomFirstNames('Male'),
  mother.fathersFamilyName,
  randomLastName(),
  'Male'
);

const maternalAunt = new FamilyMember(
  randomFirstNames('Female'),
  mother.fathersFamilyName,
  mother.mothersFamilyName,
  'Female'
);

const maternalUncle = new FamilyMember(
  randomFirstNames('Male'),
  mother.fathersFamilyName,
  mother.mothersFamilyName,
  'Male'
);
const paternalGrandfather = new FamilyMember(
  randomFirstNames('Male'),
  father.fathersFamilyName,
  randomLastName(),
  'Male'
);

const paternalGrandmother = new FamilyMember(
  randomFirstNames('Female'),
  father.mothersFamilyName,
  randomLastName(),
  'Female'
);

const paternalAunt = new FamilyMember(
  randomFirstNames('Female'),
  father.fathersFamilyName,
  father.mothersFamilyName,
  'Female'
);

const paternalUncle = new FamilyMember(
  randomFirstNames('Male'),
  father.fathersFamilyName,
  father.mothersFamilyName,
  'Male'
);

const paternalMale1stCousin = new FamilyMember(
  randomFirstNames('Male'),
  paternalUncle.fathersFamilyName,
  randomLastName(),
  'Male'
);

const paternalFemale1stCousin = new FamilyMember(
  randomFirstNames('Female'),
  paternalUncle.fathersFamilyName,
  randomLastName(),
  'Female'
);
const maternalMale1stCousin = new FamilyMember(
  randomFirstNames('Male'),
  maternalUncle.fathersFamilyName,
  randomLastName(),
  'Male'
);

const maternalFemale1stCousin = new FamilyMember(
  randomFirstNames('Female'),
  maternalUncle.fathersFamilyName,
  randomLastName(),
  'Female'
);
const siblings = [boy, girl];
const firstCousin = [
  paternalMale1stCousin,
  maternalMale1stCousin,
  maternalFemale1stCousin,
  paternalFemale1stCousin,
];
const cat2B = [
  maternalAunt,
  maternalUncle,
  paternalAunt,
  paternalUncle,
  maternalGrandfather,
  paternalGrandfather,
  maternalGrandmother,
  paternalGrandmother,
];

console.log(
  boy.name,
  father.name,
  paternalUncle.name,
  maternalUncle.name,
  maternalGrandfather.name,
  paternalGrandfather.name
);
