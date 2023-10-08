let totalCaseload = []
const idTypes = [
    'Foreign Passport',
    'State Id',
    'Legal Permanent Resident Card',
    'United States Passport'
]
const genders = ['Male', 'Female']

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
    'Paul'
]

const femaleNames = [
    'Samantha',
    'Vanessa',
    'Ruby',
    'Marisa',
    'Deloiza',
    'Melissa',
    'Debbie',
    'Selena',
    'Joanna',
    'Amalia',
    'Cynthia',
    'Laura',
    'Alejandra',
    'Kristina',
    'Elsa',
    'Naomi',
    'Jaqueline',
    'Venessa',
    'Inez',
    'Anita',
    'Teresa',
    'Imelda',
    'Rocketa',
    'Jana',
    'Corina',
    'Christina',
    'Nina',
    'Cecilia',
    'Alison',
    'Amanda',
    'Daniela',
    'Genevieve',
    'Ina',
    'Paty',
    'Aida',
    'Reyna',
    'Monica',
    'Sonja',
    'Julieta',
    'Julissa',
    'Lisa',
    'Guadalupe',
    'Norma',
    'Diamantina',
    'Tanya',
    'Sabrina',
    'Gabriela',
    'Iris',
    'Pamela',
    'Carla',
    'Clarissa'
]

const lastNames = [
    'Hernandez',
    'Gatica',
    'Ortiz',
    'Lopez',
    'Martinez',
    'Garcia',
    'Gomez',
    'Cavazos',
    'Zepeda',
    'Zapata',
    'Luna',
    'Medellin',
    'Moreno',
    'Lozano',
    'Cervantes',
    'Cardenas'
]

const countriesOfOrigin = [
    {
        countryName: 'Guatemala',
        languages: [
            'Akateco',
            'Jakalteco',
            'Mam',
            `K'iche`,
            `Q'eqchi`,
            'Kaqchikel'
        ],
        cities: [
            {
                cityName: 'Guatemala',
                neighborhoods: ['Cayala', 'Mixco']
            },
            {
                cityName: 'Peten',
                neighborhoods: [
                    'San Benito',
                    'San Jose de Los Negros'
                ]
            },
            {
                cityName: 'Alta Verapaz',
                neighborhoods: ['Oban', 'Chisec']
            },
            {
                cityName: 'Teculutam',
                neighborhoods: [
                    'Zacapa',
                    'Teochitlan'
                ]
            }
        ]
    },
    {
        countryName: 'El Salvador',
        languages: ['Espanol'],
        cities: [
            {
                cityName: 'San Miguel',
                neighborhoods: [
                    'San Benito',
                    'Ciudad Vieja'
                ]
            },
            {
                cityName: 'San Salvador',
                neighborhoods: [
                    'Barrio San Esteban',
                    'Colonia Manzano'
                ]
            },
            {
                cityName: 'La Union',
                neighborhoods: [
                    'San Carlos',
                    'Acajutla'
                ]
            },
            {
                cityName: 'Uzultan',
                neighborhoods: [
                    'Jiquilisco',
                    'Alegria'
                ]
            }
        ]
    },

    {
        countryName: 'Honduras',
        languages: ['Espanol'],
        cities: [
            {
                cityName: 'Olancho',
                neighborhoods: [
                    'San Francisco De La Paz',
                    'La Union'
                ]
            },
            {
                cityName: 'San Pedro Sula',
                neighborhoods: [
                    'Colonia Los Cedros',
                    'Los Castanos'
                ]
            },
            {
                cityName: 'Yoro',
                neighborhoods: [
                    'Arenal Morazan',
                    'Santa Rita'
                ]
            },
            {
                cityName: 'La Paz',
                neighborhoods: [
                    'San Pedro de Tutule',
                    'San Juan'
                ]
            }
        ]
    }
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
    for (var i = 0; i < 2; i++) {
        const randomIdx = Math.floor(
            Math.random() * hobbies.length
        )
        skills += hobbies[randomIdx]
        if (i != 1) {
            skills.charAt(0)
            skills += ' & '
        } else {
            skills += '.'
        }
    }
    return skills
}

function issueDate() {
    const issued = new Date()
    const randomDays = Math.floor(
        Math.random() * 30
    )
    const randomMonths = Math.floor(
        Math.random() * 11
    )
    const randomYears = Math.floor(
        2 + Math.random() * 5
    )
    issued.setDate(randomDays)
    issued.setMonth(randomMonths)
    issued.setFullYear(
        issued.getFullYear() - randomYears
    )
    return issued
}
function expirationDate(birthday, issue) {
    const dateOfExpiry = new Date(birthday)
    const issued = new Date(issue)
    dateOfExpiry.setDate(
        dateOfExpiry.getDate() - 1
    )
    dateOfExpiry.setFullYear(
        issued.getFullYear() + 5
    )
    return dateOfExpiry
}
function generateId(birthday, issued) {
    const id = {}

    id.issued = issueDate()
    id.expires = expirationDate(birthday, issued)
    return id
}

function randomCountry() {
    const randomIdx = Math.floor(
        Math.random() * countriesOfOrigin.length
    )
    const coo = countriesOfOrigin[randomIdx]
    childLanguage = randomLanguage(coo)
    return [childLanguage, coo]
}

function randomLanguage(country) {
    let spokenLanguage = 'Espanol'
    if (country.languages.length > 1) {
        const languageIdx = Math.floor(
            Math.random() *
                country.languages.length
        )
        const d = Math.random() * 100
        spokenLanguage =
            d > 60
                ? country.languages[languageIdx]
                : 'Espanol'
    }

    return spokenLanguage
}

// function randomLanguage() {
//   const r = Math.random() *100
//   const randomIdx = Math.floor(Math.random() * languages.length)
//   const language =r > 10 ? 'Espanol' : languages[randomIdx]
//   return language

// }

const familyMembers = document.getElementById(
    'family-members'
)

class FamilyMember {
    constructor(
        firstName,
        fathersFamilyName,
        mothersFamilyName,
        gender,
        relationship,
        category,
        language,
        birthday
    ) {
        this.name = `${firstName}${fathersFamilyName} ${mothersFamilyName}`
        this.firstName = firstName
        this.fathersFamilyName = fathersFamilyName
        this.mothersFamilyName = mothersFamilyName
        this.gender = gender || randomGender()
        this.relationship = relationship
        this.category = category
        this.language = language || 'Espanol'
        this.phone = randomPhoneNumber()
        this.birthday = generateBirthday(birthday)
    }
}

function generateBirthday(minAge) {
    const today = new Date()
    const randomDay = Math.floor(
        Math.random() * 30
    )
    const randomMonth = Math.floor(
        Math.random() * 12
    )
    const randomAge = Math.floor(
        minAge + Math.random() * 5
    )
    today.setDate(randomDay)
    today.setMonth(randomMonth)
    today.setFullYear(
        today.getFullYear() - randomAge
    )
    return today
}

const manifestBtn = document.getElementById(
    'manifest-button'
)
manifestBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const caseNum =
        document.getElementById('number')
    generateTonsOfCases(caseNum.value)
})

function arrivalDates(journey) {
    const dateOfAdmission = new Date()
    const dateOfDeparture = new Date()
    const dateOfArrival = new Date()
    dateOfArrival.setDate(
        dateOfArrival.getDate() - 2
    )
    dateOfDeparture.setDate(
        dateOfAdmission.getDate() - journey - 2
    )
    return [
        dateOfAdmission.toLocaleDateString(),
        dateOfDeparture.toLocaleDateString(),
        dateOfArrival.toLocaleDateString(),
        journey
    ]
}
function generateJourneyTime() {
    const d = Math.random() * 100
    const longDays = Math.floor(
        25 + Math.random() * 45
    )
    const regularDays = Math.floor(
        12 + Math.random() * 8
    )
    const days = d > 10 ? regularDays : longDays
    const [admission, departure, arrival, j] =
        arrivalDates(days)
    return [admission, departure, arrival, j]
}

function randomGender() {
    const randomIdx = Math.floor(
        Math.random() * genders.length
    )
    return genders[randomIdx]
}

function randomPhoneNumber() {
    const randomThree = Math.floor(
        100 + Math.random() * 899
    ).toString()
    const randomFour = Math.floor(
        1000 + Math.random() * 8999
    ).toString()
    return `(555)-${randomThree}-${randomFour}`
}

function randomFirstNames(gender) {
    let firstNames = ''
    const arr =
        gender.toUpperCase() == 'MALE'
            ? new Array(...maleNames)
            : new Array(...femaleNames)
    for (var i = 0; i < 2; i++) {
        const randomIdx = Math.floor(
            Math.random() * arr.length
        )
        firstNames += arr[randomIdx] + ' '
        arr.splice([randomIdx], 1)
    }

    return firstNames
}
function randomLastName() {
    let randomIdx = Math.floor(
        Math.random() * lastNames.length
    )
    return lastNames[randomIdx]
}

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
    const randomIdx = Math.floor(
        Math.random() * functionArr.length
    )
    return functionArr[randomIdx]
}

function randomPlace(arr) {
    const randomIdx = Math.floor(
        Math.random() * arr.length
    )
    return [arr[randomIdx], randomIdx]
}

function randomSalary() {
    return `$${(
        50000 + Math.floor(Math.random() * 50000)
    ).toString()}`
}

const demoKid = gE('demographic-name')
const demoDob = gE('demographic-dob')
const demoCoo = gE('demographic-coo')

function createFamily() {
    const boy = new FamilyMember(
        randomFirstNames('Male'),
        randomLastName(),
        randomLastName(),
        'Male',
        'Child',
        'Child',
        'Espanol',
        13
    )

    const girl = new FamilyMember(
        randomFirstNames('Female'),
        boy.fathersFamilyName,
        boy.mothersFamilyName,
        'Female',
        'Child',
        'Child',
        'Espanol',
        13
    )

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
        45
    )

    const mother = new FamilyMember(
        randomFirstNames('Female'),
        boy.mothersFamilyName,
        randomLastName(),
        'Female',
        'Mother',
        '1',
        null,
        45
    )

    const maternalGrandmother = new FamilyMember(
        randomFirstNames('Female'),
        mother.mothersFamilyName,
        randomLastName(),
        'Female',
        'Maternal Grandmother',
        '2A',
        null,
        45
    )

    const maternalGrandfather = new FamilyMember(
        randomFirstNames('Male'),
        mother.fathersFamilyName,
        randomLastName(),
        'Male',
        'Maternal Grandfather',
        '2A',
        null,
        68
    )

    const maternalAunt = new FamilyMember(
        randomFirstNames('Female'),
        mother.fathersFamilyName,
        mother.mothersFamilyName,
        'Female',
        'Maternal Aunt',
        '2B',
        null,
        40
    )

    const maternalUncle = new FamilyMember(
        randomFirstNames('Male'),
        mother.fathersFamilyName,
        mother.mothersFamilyName,
        'Male',
        'Maternal Uncle',
        '2B',
        null,
        40
    )
    const paternalGrandfather = new FamilyMember(
        randomFirstNames('Male'),
        father.fathersFamilyName,
        randomLastName(),
        'Male',
        'Paternal Grandfather',
        '2B',
        null,
        68
    )

    const paternalGrandmother = new FamilyMember(
        randomFirstNames('Female'),
        father.mothersFamilyName,
        randomLastName(),
        'Female',
        'Paternal Grandmother',
        '2B',
        null,
        68
    )

    const paternalGreatUncle = new FamilyMember(
        randomFirstNames('Male'),
        paternalGrandfather.fathersFamilyName,
        paternalGrandfather.mothersFamilyName,
        'Male',
        'Paternal Great Uncle',
        '3',
        null,
        68
    )
    const paternalGreatAunt = new FamilyMember(
        randomFirstNames('Female'),
        paternalGrandfather.fathersFamilyName,
        paternalGrandfather.mothersFamilyName,
        'Female',
        'Paternal Great Aunt',
        '3',
        null,
        68
    )
    const femaleGreatGrandparent =
        new FamilyMember(
            randomFirstNames('Female'),
            paternalGreatAunt.mothersFamilyName,
            randomLastName(),
            'Male',
            'Great-Grandmother',
            '3',
            null,
            90
        )
    const maleGreatGrandparent = new FamilyMember(
        randomFirstNames('Male'),
        paternalGreatAunt.fathersFamilyName,
        randomLastName(),
        'Male',
        'Great-Grandmother',
        '3',
        null,
        90
    )

    const paternalAunt = new FamilyMember(
        randomFirstNames('Female'),
        father.fathersFamilyName,
        father.mothersFamilyName,
        'Female',
        'Paternal Aunt',
        '2B',
        null,
        40
    )

    const paternalUncle = new FamilyMember(
        randomFirstNames('Male'),
        father.fathersFamilyName,
        father.mothersFamilyName,
        'Male',
        'Paternal Uncle',
        '2B',
        null,
        40
    )

    const paternalMale1stCousin =
        new FamilyMember(
            randomFirstNames('Male'),
            paternalUncle.fathersFamilyName,
            randomLastName(),
            'Male',
            '1st Counsin',
            '2B',
            null,
            25
        )

    const paternalFemale1stCousin =
        new FamilyMember(
            randomFirstNames('Female'),
            paternalUncle.fathersFamilyName,
            randomLastName(),
            'Female',
            '1st Cousin',
            '2B',
            null,
            25
        )
    const maternalMale1stCousin =
        new FamilyMember(
            randomFirstNames('Male'),
            maternalUncle.fathersFamilyName,
            randomLastName(),
            'Male',
            '1st Cousin',
            '2B',
            null,
            25
        )

    const maternalFemale1stCousin =
        new FamilyMember(
            randomFirstNames('Female'),
            maternalUncle.fathersFamilyName,
            randomLastName(),
            'Female',
            '1st Cousin',
            '2B',
            null,
            25
        )

    const femaleSpouse = new FamilyMember(
        randomFirstNames('Female'),
        randomLastName(),
        randomLastName(),
        'Female',
        "Sponsor's Spouse",
        '',
        null,
        null
    )

    const maleSpouse = new FamilyMember(
        randomFirstNames('Male'),
        randomLastName(),
        randomLastName(),
        'Female',
        "Sponsor's Spouse",
        '',
        null,
        null
    )
    const cat3MaleSpouse = new FamilyMember(
        randomFirstNames('Male'),
        randomLastName(),
        randomLastName(),
        'Male',
        'Unrelated',
        '',
        null,
        30
    )

    const unrelatedFemale = new FamilyMember(
        randomFirstNames('Female'),
        cat3MaleSpouse.fathersFamilyName,
        randomLastName(),
        'Female',
        'Unrelated Sponsor',
        '3',
        null,
        30
    )

    const unrelatedMale = new FamilyMember(
        randomFirstNames('Male'),
        randomLastName(),
        randomLastName(),
        'Male',
        'Unrelated Sponsor',
        '3',
        null,
        30
    )

    const cat3FemaleSpouse = new FamilyMember(
        randomFirstNames('Female'),
        unrelatedMale.fathersFamilyName,
        randomLastName(),
        'Female',
        'Unrelated',
        '',
        null,
        30
    )

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
        unrelatedMale
    }

    return everyone
}
function getCat1Mother() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        mother,
        father,
        maternalGrandfather,
        maternalGrandmother
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)

    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = mother
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = maternalGrandfather
    obj.maleCaregiver = maternalGrandmother
    obj.maternalGrandfather = maternalGrandfather
    obj.maternalGrandmother = maternalGrandmother
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = father
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Father'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Mother'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 4536281736)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.mother.name,
            mother: obj.maternalGrandmother.name,
            father: obj.maternalGrandfather.name,
            dob: obj.mother.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)

    renderKid(obj)
}

function getCat1Father() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        mother,
        father,
        paternalGrandfather,
        paternalGrandmother
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = father
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = paternalGrandmother
    obj.maleCaregiver = paternalGrandfather
    obj.paternalGrandfather = paternalGrandfather
    obj.paternalGrandmother = paternalGrandmother
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = mother
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Father'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Mother'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 226382716)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.father.name,
            mother: obj.paternalGrandmother.name,
            father: obj.paternalGrandfather.name,
            dob: obj.father.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)

    renderKid(obj)
}

function getCat2ASister() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        femaleSibling,
        mother,
        father,
        maleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = femaleSibling
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = maleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Father'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Mother'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 2384927849)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.sponsor.name,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.sponsor.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function getCat2ABrother() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        maleSibling,
        mother,
        father,
        femaleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = maleSibling
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = femaleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Father'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Mother'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 8493728371)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.sponsor.name,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.sponsor.birthday,
            relationship: obj.sponsor.relationsihp
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function getCat2BMaternalAunt() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        maternalAunt,
        mother,
        father,
        maternalGrandmother,
        maternalGrandfather,
        maleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = maternalAunt
    obj.femaleGrandparent = maternalGrandmother
    obj.maleGrandparent = maternalGrandfather
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = maleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Brother-in-Law'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Sister'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 3372948302)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.mother.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.mother.birthday,
            relationship: obj.mother.relationship
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function getCat2BMaternalUncle() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        maternalUncle,
        mother,
        father,
        maternalGrandmother,
        maternalGrandfather,
        femaleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = maternalUncle
    obj.femaleGrandparent = maternalGrandmother
    obj.maleGrandparent = maternalGrandfather
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = femaleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Brother-in-Law'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Sister'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 1374974073)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob
        },
        {
            childName: obj.mother.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.mother.birthday
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.sponsor.birthday
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function getCat2BPaternalUncle() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        paternalUncle,
        mother,
        father,
        paternalGrandmother,
        paternalGrandfather,
        femaleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = paternalUncle
    obj.femaleGrandparent = paternalGrandmother
    obj.maleGrandparent = paternalGrandfather
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = femaleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Brother'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Sister-in-Law'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 842490174)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.father.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.mother.birthday,
            relationship: obj.father.relationship
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function getCat2BPaternalAunt() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        paternalAunt,
        mother,
        father,
        paternalGrandmother,
        paternalGrandfather,
        maleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = paternalAunt
    obj.femaleGrandparent = paternalGrandmother
    obj.maleGrandparent = paternalGrandfather
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = maleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Brother'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Sister-in-Law'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 9732739481)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.father.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.mother.birthday,
            relationship: obj.father.relationship
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function getCat3greatAunt() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
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
        maleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = paternalGreatAunt
    obj.femaleGreatGrandparent =
        femaleGreatGrandparent
    obj.maleGreatGrandparent =
        maleGreatGrandparent
    obj.femaleGrandparent = paternalGrandmother
    obj.maleGrandparent = paternalGrandfather
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = maleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Aunt'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Relative by Marriage'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 6482617392)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.father.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.father.birthday,
            relationship: obj.father.relationship
        },
        {
            childName: obj.maleGrandparent.name,
            mother: obj.femaleGreatGrandparent
                .name,
            father: obj.maleGreatGrandparent.name,
            dob: obj.maleGrandparent.birthday,
            relationship:
                obj.maleGrandparent.relationship
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGreatGrandparent
                .name,
            father: obj.maleGreatGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function getCat3greatUncle() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
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
        femaleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = paternalGreatUncle
    obj.femaleGreatGrandparent =
        femaleGreatGrandparent
    obj.maleGreatGrandparent =
        maleGreatGrandparent
    obj.femaleGrandparent = paternalGrandmother
    obj.maleGrandparent = paternalGrandfather
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = femaleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Uncle'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Realtive by Marriage'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 5638257172)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.father.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.father.birthday,
            relationship: obj.father.relationship
        },
        {
            childName: obj.maleGrandparent.name,
            mother: obj.femaleGreatGrandparent
                .name,
            father: obj.maleGreatGrandparent.name,
            dob: obj.maleGrandparent.birthday,
            relationship:
                obj.maleGrandparent.relationship
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGreatGrandparent
                .name,
            father: obj.maleGreatGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function getCat3unrelatedFemale() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        mother,
        father,
        unrelatedFemale,
        cat3MaleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = unrelatedFemale
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = cat3MaleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Family Friend'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Family Friend'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 4628366381)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.sponsor.name,
            mother: `${randomFirstNames(
                'Female'
            )} ${
                obj.sponsor.mothersFamilyName
            } ${randomLastName()}`,
            father: `${randomFirstNames(
                'Male'
            )} ${
                obj.sponsor.fathersFamilyName
            } ${randomLastName()}`,
            dob: obj.sponsor.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function getCat3UnrelatedMale() {
    const [admit, depart, arrive, j] =
        generateJourneyTime()
    const {
        boy,
        girl,
        mother,
        father,
        unrelatedMale,
        cat3FemaleSpouse
    } = createFamily()
    const genderArr = [boy, girl]
    const child = randomPlace(genderArr)
    const obj = {}
    const [childLanguage, coo] = randomCountry()
    let [randomCity, idx] = randomPlace(
        coo.cities
    )
    let neighborhood = randomPlace(
        coo.cities[idx].neighborhoods
    )
    obj.admitDate = admit
    obj.departDate = depart
    obj.arrivalDate = arrive
    obj.journey = j
    obj.language = childLanguage
    obj.coo = coo.countryName
    obj.city = randomCity
    obj.neighborhood = neighborhood[0]
    obj.childName = child[0].name
    obj.childFirstName = child[0].firstName
    obj.childLastName =
        child[0].fathersFamilyName +
        ' ' +
        child[0].mothersFamilyName
    obj.childGender = child[0].gender
    obj.childDob = child[0].birthday
    obj.sponsor = unrelatedMale
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = mother
    obj.maleCaregiver = father
    obj.hobbies = randomHobbies()
    obj.sponsor.employment =
        randomPlace(professions)
    obj.sponsor.salary = randomSalary()
    obj.sponsor.spouse = cat3FemaleSpouse
    obj.sponsor.id_type = randomPlace(idTypes)
    obj.sponsor.id_issued = issueDate()
    obj.sponsor.id_expires = expirationDate(
        obj.sponsor.birthday,
        obj.sponsor.id_issued
    )
    obj.acg = cat3FemaleSpouse
    obj.acg.birthday = generateBirthday(
        getAge(
            obj.sponsor.birthday.toLocaleDateString()
        )
    )
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Family Friend'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Family Friend'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 6482974829)
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child'
        },
        {
            childName: obj.sponsor.name,
            mother: `${randomFirstNames(
                'Female'
            )} ${
                obj.sponsor.mothersFamilyName
            } ${randomLastName()}`,
            father: `${randomFirstNames(
                'Male'
            )} ${
                obj.sponsor.fathersFamilyName
            } ${randomLastName()}`,
            dob: obj.sponsor.birthday,
            relationship: obj.sponsor.relationship
        }
    ]
    obj.birthCertificates = bcs

    totalCaseload.push(obj)
    renderKid(obj)
}

function gE(elem) {
    return document.getElementById(elem)
}

function renderKid(kid) {
    // renderDemographics(kid);
    renderToManifest(kid)
}

const familyRows = gE('family-rows')
function createCaseload(rounds) {
    let count = 1
    while (count < rounds) {
        cases.push(createFamily())
        count++
    }
    cases.forEach((kid, idx) =>
        renderCases(kid, idx)
    )
}

function renderCases(child, idx) {
    let aNumber = document.getElementById(
        'starting-a-number'
    ).value
    if (
        typeof aNumber !== Number ||
        aNumber.length !== 9
    ) {
        alert('Invalid A Number')
        return
    }
    const tableRow = document.createElement('tr')
    const kidName = document.createElement('td')
    const kidMom = document.createElement('td')
    const kidDad = document.createElement('td')
    const kidSponsor =
        document.createElement('td')

    tableRow.setAttribute('data-index', idx)

    kidName.textContent = child.boy.name
    kidMom.textContent = child.mother.name
    kidDad.textContent = child.father.name
    kidSponsor.textContent =
        child.paternalAunt.name

    tableRow.append(
        kidName,
        kidMom,
        kidDad,
        kidSponsor
    )
    familyRows.append(tableRow)
}

// function renderDemographics(kid) {
//   const bodyEl = document.getElementById("body");
//   const container = document.createElement("div");
//   container.classList.add("demographics-container", "document");
//   const nameDemographic = document.createElement("div");
//   const dobDemographic = document.createElement("div");
//   const aNumberDemographic = document.createElement("div");
//   const cooDemographic = document.createElement("div");
//   const demographics = document.createElement("div");
//   const header = document.createElement("div");
//   header.classList.add("demographic-header");

//   nameDemographic.append(header);
//   nameDemographic.innerText = `Child's Name`;
//   demographics.append(
//     nameDemographic,
//     dobDemographic,
//     aNumberDemographic,
//     cooDemographic,
//   );

//   const containerClass = "demographics-container";
//   const headerClass = "demographic-header";
//   demographics.innerHTML = `<div class="demographic-info">
// <div class = ${headerClass}>Child Name:</div>
// <div id = "demographic-name">${kid.childName}</div>
//    </div>
// <div class="demographic-info">
// <div class = ${headerClass}>A#</div>
// </div>
// <div class="demographic-info">
// <div class = ${headerClass}>DOB:</div>
// <div id="demographic-dob">${kid.childDob.toLocaleDateString()}</div>
// </div>
// <div class="demographic-info">
// <div class = ${headerClass}>COO:</div>
// <div id="demographic-coo">${`Country of Origin: ${kid.coo} City: ${kid.city.cityName} Neighborhood: ${kid.neighborhood}`}</div>
// </div>`;
//   container.append(demographics);
//   bodyEl.prepend(container);
// }

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
    getCat3unrelatedFemale
]

const excelBtn = document.getElementById(
    'table-to-excel'
)

function renderToManifest(child) {
    excelBtn.classList.remove('hide')
    let aNumber = document.getElementById(
        'starting-a-number'
    )
    aNumber = Number(aNumber.value)
    const tableBodyEl = gE('child-data')
    const newRow = document.createElement('tr')

    const dataArr = [
        aNumber,
        child.childFirstName,
        child.childLastName,
        child.childDob.toLocaleDateString(),
        getAge(child.childDob),
        child.childGender,
        child.coo,
        'Good',
        'El Paso',
        child.sponsor.phone,
        child.sponsor.category
    ]
    newRow.setAttribute('data-child', child._id)
    tableBodyEl.append(newRow)
    newRow.addEventListener('mouseover', (e) => {
        console.log('mouseover')
        e.target.parentElement.style.backgroundColor =
            'rgba(0,0,0,0.1'
    })
    newRow.addEventListener('mouseout', (e) => {
        e.target.parentElement.style.backgroundColor =
            'white'
    })
    newRow.addEventListener(
        'click',
        getSingleScript
    )
    dataArr.forEach((cell, idx) => {
        const newCell =
            document.createElement('td')
        newCell.textContent = cell
        newRow.append(newCell)
        newRow.childNodes[0].textContent =
            aNumber + totalCaseload.length - 1
    })
}

function getSingleScript(e) {
    let singleCase = Number(
        e.target.parentElement.getAttribute(
            'data-child'
        )
    )
    let oneCase
    totalCaseload.forEach((thing) => {
        if (thing._id == singleCase) {
            oneCase = thing
        }
    })

    oneCase.a_number =
        e.target.parentElement.childNodes[0].textContent
    console.log(oneCase)
    renderScript(oneCase)
}

function renderScript(kidObj) {
    showScriptModal()
    renderDemographics(kidObj)
}

function renderDemographics(kid) {
    document.title = scriptName(kid.a_number)
    const scriptHeadEl = document.getElementById(
        'script-script'
    )
    scriptHeadEl.innerHTML = ''
    scriptHeadEl.classList.add('print')
    const cooH1 = document.createElement('h5')
    cooH1.textContent = 'Family in COO'
    const headerDiv =
        document.createElement('div')
    const demographicsDiv =
        document.createElement('div')
    const femaleCaregiverDiv =
        document.createElement('div')
    femaleCaregiverDiv.append(cooH1)
    const maleCaregiverDiv =
        document.createElement('div')
    headerDiv.classList.add('demographics-header')
    headerDiv.appendChild(demographicsDiv)
    const ulEl = document.createElement('ul')
    const fcgUl = document.createElement('ul')
    const mcgUl = document.createElement('ul')
    headerDiv.appendChild(femaleCaregiverDiv)
    headerDiv.appendChild(maleCaregiverDiv)
    demographicsDiv.classList.add('header-info')
    femaleCaregiverDiv.classList.add(
        'header-info'
    )
    maleCaregiverDiv.classList.add('header-info')
    femaleCaregiverDiv.append(fcgUl)
    maleCaregiverDiv.append(mcgUl)
    demographicsDiv.append(ulEl)
    const text = {
        "Child's Name": kid.childName,
        DOB: kid.childDob.toLocaleDateString(),
        'A#': kid.a_number,
        Age: getAge(kid.childDob),
        Gender: kid.childGender,
        COO: kid.coo,
        City: kid.city.cityName,
        Neighborhood: kid.neighborhood,
        'Date of departure from COO':
            kid.departDate,
        'Length of Journey': `${kid.journey} days`,
        'Date of Arrival to US': kid.arrivalDate,
        'Date of Admission': kid.admitDate,
        Debt: 'None',
        'Reason for Travel to US':
            'For a better future and education.',
        'Port of Entry': 'El Paso, TX',
        'Date last Attended School/Grade completed':
            '',
        Hobbies: kid.hobbies,
        'Religious Affiliation': 'Catholic',
        'Primary Language': kid.language
    }
    const femaleCaregiver = {
        Name: kid.femaleCaregiver.name,
        'Date of Birth':
            kid.femaleCaregiver.birthday.toLocaleDateString(),
        'Phone Number': kid.femaleCaregiver.phone,
        Address: `${kid.city.cityName}, ${kid.neighborhood}, ${kid.coo}`,
        'Relationship To Sponsor':
            kid.femaleCaregiver
                .relationship_to_sponsor,
        'Relationship To Child':
            kid.femaleCaregiver.relationship
    }

    const maleCaregiver = {
        Name: kid.maleCaregiver.name,
        'Date of Birth':
            kid.maleCaregiver.birthday.toLocaleDateString(),
        'Phone Number': kid.maleCaregiver.phone,
        Address: `${kid.city.cityName}, ${kid.neighborhood}, ${kid.coo}`,
        'Relationship To Sponsor':
            kid.maleCaregiver
                .relationship_to_sponsor,
        'Relationship To Child':
            kid.maleCaregiver.relationship
    }
    for (const child in text) {
        const liEl = document.createElement('li')
        liEl.style = 'list-style: none'
        liEl.textContent = `${child}: ${text[child]}`
        ulEl.append(liEl)
    }
    for (const child in femaleCaregiver) {
        const liEl = document.createElement('li')
        liEl.style = 'list-style: none'
        liEl.textContent = `${child}: ${femaleCaregiver[child]}`
        fcgUl.append(liEl)
    }
    for (const child in maleCaregiver) {
        const liEl = document.createElement('li')
        liEl.style = 'list-style: none'
        liEl.textContent = `${child}: ${maleCaregiver[child]}`
        fcgUl.append(liEl)
    }

    scriptHeadEl.append(headerDiv)
    renderSponsorInfo(kid)
}
function acgAge(kid) {
    console.log(kid.acg.birthday)
}
function renderSponsorInfo(kid) {
    const scriptHeadEl = document.getElementById(
        'script-script'
    )
    const sponsorPage =
        document.createElement('div')
    sponsorPage.classList.add('document')
    const sponsorH1 = document.createElement('h3')
    sponsorH1.textContent = 'Sponsor Information'
    sponsorPage.prepend(sponsorH1)
    const sponsorBox =
        document.createElement('div')
    sponsorBox.classList.add('sponsor-box')

    const sponsorInfo = {
        "Sponsor's Name": kid.sponsor.name,
        Occupation: kid.sponsor.employment[0],
        "ACG/HHM's Name": kid.acg.name,
        'Date of Birth':
            kid.sponsor.birthday.toLocaleDateString(),
        Schedule: '8am - 5pm',
        'ACG/HHM Date of Birth':
            kid.acg.birthday.toLocaleDateString(),
        'Relationship To Child':
            kid.sponsor.relationship,
        Salary: kid.sponsor.salary,
        'Relationship to Child':
            kid.acg.relationship,
        'Last Face to Face': '3 years',
        Bedrooms: '3 bedroom',
        'Relationship to Sponsor':
            kid.acg.relationship_to_sponsor,
        'Sponsor Phone Number': kid.sponsor.phone,
        Bathrooms: '2.5 bath',
        'ACG/HHM Phone Number': kid.acg.phone,

        "Sponsor's Address":
            '124 Main Street, Greensboro, NC 99999',
        Residence: '',
        'ACG/HHM Address':
            '124 Main Street, Greensboro, NC 99999'
    }

    for (const sponsor in sponsorInfo) {
        const infoDiv =
            document.createElement('div')
        const sponsorh5 =
            document.createElement('p')
        const sponsorh6 =
            document.createElement('p')
        sponsorh5.classList.add('sponsorh5')
        sponsorh6.classList.add('sponsorh6')
        sponsorh5.textContent = sponsor
        sponsorh6.textContent =
            sponsorInfo[sponsor]
        infoDiv.appendChild(sponsorh5)
        infoDiv.appendChild(sponsorh6)

        infoDiv.classList.add('sponsor-cell')
        sponsorBox.append(infoDiv)
    }
    scriptHeadEl.append(sponsorPage)
    scriptHeadEl.append(sponsorBox)
}
function renderBirthCertificates(child) {
    const sections = [
        {
            title: 'birth certificate container',
            classes: 'document'
        },
        {
            title: 'warning watermark',
            classes: 'warning',
            html: `<h1>TRAINING ONLY</h1>`
        },
        {
            title: 'borderbox',
            classes: 'bc-border'
        },
        {
            title: 'birth certificate header',
            classes: 'bc-header',
            html: `<h2>Registro Nacional de las Personas</h2>
      <h4>Republica de Guatemala</h4>
      <h3>Registro Civil de las Personas</h3>
      <h3>Certificado de Nacimiento</h3>`
        },
        {
            title: 'birth certificate info header',
            classes: 'bc-info-header',
            html: ` <h3>
              El infrascrito Rigistrador Civil de las Personas del Rigistro
              Nacional de las Personas del Municipio de Guatemala, Departamento
              de Guatemala,
            </h3>
            <h3>CERTIFICA</h3>
            <h3>
              que con fecha ****BC DATE**** en la partida AAA, folio BB del
              libro ZZZ del Registro Civil del Municipio de Guatemala,
              Departamento de Guatemala, quedo inscrito el nacimiento de:
            </h3>`
        },
        {
            title: 'birth certificate body',
            classes: 'bc-body'
        }
    ]
}
function getAge(dob) {
    var dob = new Date(dob)
    var month_diff = Date.now() - dob.getTime()

    var age_dt = new Date(month_diff)

    var year = age_dt.getUTCFullYear()

    var age = Math.abs(year - 1970)

    return age
}
function generateTonsOfCases(rounds) {
    const table =
        document.getElementById('child-data')
    table.innerHTML = ''
    let count = 1
    for (var i = 0; count <= rounds; i++) {
        if (i === functionObj.length) {
            i = 0
        }
        functionObj[i]()
        count++
    }
    console.log(totalCaseload)
}

const closeScriptBtn = document.getElementById(
    'close-script'
)
const scriptEl = document.getElementById('script')
closeScriptBtn.addEventListener(
    'click',
    hideScriptModal
)
function hideScriptModal() {
    scriptEl.classList.remove('active')
    document.title = 'Family Tree'
}
function showScriptModal() {
    scriptEl.classList.add('active')
}

function scriptName(aNumber) {
    return `${aNumber}_Mock_Script`
}
