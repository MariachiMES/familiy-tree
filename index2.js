let totalCaseload = []

import {
    idTypes,
    genders,
    maleNames,
    femaleNames,
    lastNames,
    countriesOfOrigin,
    hobbies
} from './data.js'

function renderSavedCases(caseload) {}

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
    const childLanguage = randomLanguage(coo)
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
        this.app_generated = appGenerated()
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
        minAge + Math.random() * 4
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
    'Social Media Influencer',
    'Welder',
    'Case Aide',
    'Project Manager',
    'Program Manager',
    'Shift Manager',
    ''
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

function createFamily() {
    const boy = new FamilyMember(
        randomFirstNames('Male'),
        randomLastName(),
        randomLastName(),
        'Male',
        'Child',
        'Child',
        'Espanol',
        14
    )

    const girl = new FamilyMember(
        randomFirstNames('Female'),
        boy.fathersFamilyName,
        boy.mothersFamilyName,
        'Female',
        'Child',
        'Child',
        'Espanol',
        14
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
        70
    )

    const maternalGrandfather = new FamilyMember(
        randomFirstNames('Male'),
        mother.fathersFamilyName,
        randomLastName(),
        'Male',
        'Maternal Grandfather',
        '2A',
        null,
        70
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
        70
    )

    const paternalGrandmother = new FamilyMember(
        randomFirstNames('Female'),
        father.mothersFamilyName,
        randomLastName(),
        'Female',
        'Paternal Grandmother',
        '2B',
        null,
        70
    )

    const paternalGreatUncle = new FamilyMember(
        randomFirstNames('Male'),
        paternalGrandfather.fathersFamilyName,
        paternalGrandfather.mothersFamilyName,
        'Male',
        'Paternal Great Uncle',
        '3',
        null,
        65
    )
    const paternalGreatAunt = new FamilyMember(
        randomFirstNames('Female'),
        paternalGrandfather.fathersFamilyName,
        paternalGrandfather.mothersFamilyName,
        'Female',
        'Paternal Great Aunt',
        '3',
        null,
        65
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
    obj.sponsorGender = 'Female'
    obj.mother = mother
    obj.father = father
    obj.femaleCaregiver = maternalGrandmother
    obj.maleCaregiver = maternalGrandfather
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
    obj.app_generated = child[0].app_generated
    obj.acg = father
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Father'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Mother'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 4536281736)

    obj.complications = []

    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.mother.name,
            mother: obj.maternalGrandmother.name,
            father: obj.maternalGrandfather.name,
            dob: obj.mother.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
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
    obj.sponsorGender = 'Male'
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
    obj.app_generated = child[0].app_generated

    obj.acg = mother
    obj.acg.relationship_to_sponsor = 'Spouse'
    obj.maleCaregiver.relationship_to_sponsor =
        'Father'
    obj.femaleCaregiver.relationship_to_sponsor =
        'Mother'
    obj._id =
        Date.now() +
        Math.floor(Math.random() * 226382716)
    obj.complications = []
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }
    const bcs = [
        {
            childName:
                obj.childFirstName +
                obj.childLastName,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.childDob,
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.father.name,
            mother: obj.paternalGrandmother.name,
            father: obj.paternalGrandfather.name,
            dob: obj.father.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Female'
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
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.sponsor.name,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.sponsor.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Male'
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
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.sponsor.name,
            mother: obj.mother.name,
            father: obj.father.name,
            dob: obj.sponsor.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    obj.generada_desde_la_app = appGenerated()
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Female'
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
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.mother.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.mother.birthday,
            relationship: obj.mother.relationship,
            generada: obj.mother.app_generated
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    obj.generada_desde_la_app = appGenerated()
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != '' ||
        obj.mother.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Male'
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
            dob: obj.childDob,
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.mother.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.mother.birthday,
            relationship: obj.mother.relationship,
            generada: obj.mother.app_generated
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    obj.generada_desde_la_app = appGenerated()
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != '' ||
        obj.mother.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Male'
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
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.father.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.mother.birthday,
            relationship: obj.father.relationship,
            generada: obj.father.app_generated
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    obj.generada_desde_la_app = appGenerated()
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != '' ||
        obj.father.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Female'
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
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.father.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.mother.birthday,
            relationship: obj.father.relationship,
            generada: obj.father.app_generated
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    obj.generada_desde_la_app = appGenerated()
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != '' ||
        obj.father.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Female'
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
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.father.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.father.birthday,
            relationship: obj.father.relationship,
            generada: obj.father.app_generated
        },
        {
            childName: obj.maleGrandparent.name,
            mother: obj.femaleGreatGrandparent
                .name,
            father: obj.maleGreatGrandparent.name,
            dob: obj.maleGrandparent.birthday,
            relationship:
                obj.maleGrandparent.relationship,
            generada:
                obj.maleGrandparent.app_generated
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGreatGrandparent
                .name,
            father: obj.maleGreatGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    obj.generada_desde_la_app = appGenerated()
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != '' ||
        obj.father.app_generated != '' ||
        obj.maleGrandparent != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Male'
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
            relationship: 'Child',
            generada: obj.app_generated
        },
        {
            childName: obj.father.name,
            mother: obj.femaleGrandparent.name,
            father: obj.maleGrandparent.name,
            dob: obj.father.birthday,
            relationship: obj.father.relationship,
            generada: obj.father.app_generated
        },
        {
            childName: obj.maleGrandparent.name,
            mother: obj.femaleGreatGrandparent
                .name,
            father: obj.maleGreatGrandparent.name,
            dob: obj.maleGrandparent.birthday,
            relationship:
                obj.maleGrandparent.relationship,
            generada:
                obj.maleGrandparent.app_generated
        },
        {
            childName: obj.sponsor.name,
            mother: obj.femaleGreatGrandparent
                .name,
            father: obj.maleGreatGrandparent.name,
            dob: obj.sponsor.birthday,
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    obj.generada_desde_la_app = appGenerated()
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != '' ||
        obj.father.app_generated != '' ||
        obj.maleGrandparent != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Female'
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
            relationship: 'Child',
            generada: obj.app_generated
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
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    obj.generada_desde_la_app = appGenerated()
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
    obj.app_generated = child[0].app_generated
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
    obj.sponsorGender = 'Male'
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
            relationship: 'Child',
            generada: obj.app_generated
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
            relationship:
                obj.sponsor.relationship,
            generada: obj.sponsor.app_generated
        }
    ]
    obj.birthCertificates = bcs
    obj.complications = []
    obj.generada_desde_la_app = appGenerated()
    if (
        obj.app_generated != '' ||
        obj.sponsor.app_generated != ''
    ) {
        obj.complications.push(
            'Birth Certificates'
        )
    }
    if (obj.language != 'Espanol') {
        obj.complications.push('Language')
    }
    if (obj.journey > 20) {
        obj.complications.push('Long Journey')
    }
    const today = new Date()
    const date = new Date(obj.id_expires)
    if (today > date) {
        obj.complications.push('Expired ID')
    }

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
const heading = document.getElementById(
    'instructions'
)

function renderToManifest(child) {
    excelBtn.classList.remove('hide')
    heading.classList.remove('hide')
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
    const left = document.createElement('div')
    const middle = document.createElement('div')
    const right = document.createElement('div')
    const ulEl = document.createElement('ul')
    left.append(ulEl)
    left.classList.add('child-left')
    const ulElRight = document.createElement('ul')
    right.append(ulElRight)
    right.classList.add('child-right')
    middle.classList.add('child-middle')
    const ulElMiddle =
        document.createElement('ul')
    middle.append(ulElMiddle)
    const fcgUl = document.createElement('ul')
    const mcgUl = document.createElement('ul')
    headerDiv.appendChild(femaleCaregiverDiv)
    headerDiv.appendChild(maleCaregiverDiv)
    demographicsDiv.classList.add(
        'header-info',
        'child-info'
    )
    femaleCaregiverDiv.classList.add(
        'header-info'
    )
    maleCaregiverDiv.classList.add('header-info')
    femaleCaregiverDiv.append(fcgUl)
    maleCaregiverDiv.append(mcgUl)
    demographicsDiv.append(left, middle, right)
    const text1 = {
        "Child's Name": kid.childName,
        DOB: kid.childDob.toLocaleDateString(),
        'A#': kid.a_number,
        Age: getAge(kid.childDob),
        Gender: kid.childGender,
        'Date of departure from COO':
            kid.departDate,
        'Length of Journey': `${kid.journey} days`
    }

    const text3 = {
        COO: kid.coo,
        City: kid.city.cityName,
        Neighborhood: kid.neighborhood,
        'Reason for Travel to US':
            'For a better future and education.',
        'Port of Entry': 'El Paso, TX',
        'Date last Attended School/Grade completed':
            completedSchool(
                getAge(kid.childDob),
                kid
            ),
        'Date of Arrival to US': kid.arrivalDate,
        'Date of Admission': kid.admitDate
    }
    const text2 = {
        Debt: 'None',
        'Reason for Travel to US':
            'For a better future and education.',
        'Port of Entry': 'El Paso, TX',
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
    for (const child in text1) {
        const liEl = document.createElement('li')
        const keyEl =
            document.createElement('strong')
        const valueEl =
            document.createElement('p')

        keyEl.innerHTML = child
        valueEl.innerHTML = text1[child]
        liEl.style = 'list-style: none'
        liEl.append(keyEl, ' : ', valueEl)
        ulEl.append(liEl)
    }
    for (const child in text2) {
        const liEl = document.createElement('li')
        const keyEl =
            document.createElement('strong')
        const valueEl =
            document.createElement('p')

        keyEl.innerHTML = child
        valueEl.innerHTML = text2[child]
        liEl.style = 'list-style: none'
        liEl.append(keyEl, ' : ', valueEl)
        ulElRight.append(liEl)
    }
    for (const child in text3) {
        const liEl = document.createElement('li')
        const keyEl =
            document.createElement('strong')
        const valueEl =
            document.createElement('p')

        keyEl.innerHTML = child
        valueEl.innerHTML = text3[child]
        liEl.style = 'list-style: none'
        liEl.append(keyEl, ' : ', valueEl)
        ulElMiddle.append(liEl)
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

function completedSchool(data, kid) {
    const today = new Date()
    today.setDate(1)
    const depart = new Date(kid.departDate)
    today.setMonth(depart.getMonth() - 2)
    if (data == 14) {
        return (
            today.toLocaleDateString() +
            ' /' +
            ' 8th Grade'
        )
    }
    if (data == 15) {
        return (
            today.toLocaleDateString() +
            '/' +
            '9th Grade'
        )
    }
    if (data == 16) {
        return (
            today.toLocaleDateString() +
            '/' +
            '10th grade'
        )
    }
    if (data == 17) {
        return (
            today.toLocaleDateString() +
            '/' +
            '11th Grade'
        )
    }
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
    renderBirthCertificates(kid)
}
function renderBirthCertificates(child) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)

    const bcSections = [
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
      <h4>Republica de ${child.coo}</h4>
      <h3>Registro Civil de las Personas</h3>
      <h3>Certificado de Nacimiento</h3>`
        },
        {
            title: 'birth certificate info header',
            classes: 'bc-info-header',
            html: ` <h3>
              El infrascrito Rigistrador Civil de las Personas del Rigistro
              Nacional de las Personas del Municipio de ${
                  child.coo
              }, Departamento
              de ${child.coo},
            </h3>
            <h3>CERTIFICA</h3>
            <h3>
              que con fecha ${yesterday.toLocaleDateString()} en la partida AAA, folio BB del
              libro ZZZ del Registro Civil del Municipio de ${
                  child.coo
              },
              Departamento de ${
                  child.coo
              }, quedo inscrito el nacimiento de:
            </h3>`
        },
        {
            title: 'birth certificate body',
            classes: 'bc-body'
        }
    ]
    const scriptHeadEl = document.getElementById(
        'script-script'
    )
    const bcs = child.birthCertificates
    const bcContainer =
        document.createElement('div')
    bcs.forEach((bc) => {
        const bcTitle =
            document.createElement('h1')
        bcTitle.classList.add('bc-title')
        bcTitle.textContent = `${bc.relationship}'s Birth Certificate`
        const bcHeader =
            document.createElement('div')
        bcHeader.innerHTML = bcSections[3].html
        bcHeader.classList.add('bc-header')
        const bcInfo =
            document.createElement('div')
        bcInfo.innerHTML = bcSections[4].html
        bcInfo.classList.add('bc-info')
        const birthCert =
            document.createElement('div')
        const inscrito =
            document.createElement('div')
        inscrito.classList.add('inscrito')
        const inscritoTitle =
            document.createElement('strong')
        inscritoTitle.textContent =
            'Datos del Inscrito'
        const childName =
            document.createElement('h3')
        childName.textContent = bc.childName
        const childDob =
            document.createElement('h3')
        childDob.textContent =
            bc.dob.toLocaleDateString()
        const childPlaceOfBirth =
            document.createElement('h4')
        childPlaceOfBirth.textContent = `${child.neighborhood}, ${child.city.cityName}, ${child.coo}`
        const horizontalRule =
            document.createElement('hr')
        inscrito.append(
            inscritoTitle,
            childName,
            childDob,
            childPlaceOfBirth,
            horizontalRule
        )
        const datoDeMadre =
            document.createElement('div')
        datoDeMadre.classList.add('inscrito')
        const datoDeMadreTitle =
            document.createElement('strong')
        datoDeMadreTitle.textContent =
            'Datos de la Madre'
        const madreName =
            document.createElement('h3')
        madreName.textContent = bc.mother
        const madreDob =
            document.createElement('h3')
        const madreHr =
            document.createElement('hr')
        datoDeMadre.append(
            datoDeMadreTitle,
            madreName,
            madreHr
        )
        const datoDePadre =
            document.createElement('div')
        datoDePadre.classList.add('inscrito')
        const datoDePadreTitle =
            document.createElement('strong')
        datoDePadreTitle.textContent =
            'Datos del Padre'
        const padreName =
            document.createElement('h3')
        padreName.textContent = bc.father
        const padreHr =
            document.createElement('hr')
        datoDeMadre.append(
            datoDePadreTitle,
            padreName,
            padreHr
        )
        const generada =
            document.createElement('h4')
        generada.textContent = bc.generada
        birthCert.classList.add('bc', 'document')
        birthCert.append(
            bcTitle,
            bcHeader,
            bcInfo,
            inscrito,
            datoDeMadre,
            datoDePadre,
            generada
        )
        bcContainer.append(birthCert)
    })
    scriptHeadEl.append(bcContainer)
    renderSponsorId(child)
}

const passportMale = `
<svg
    height="100px"
    width="100px"
    version="1.1"
    id="_x32_"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xml:space="preserve"
>
    <style type="text/css">
        .st0 {
            fill: #000000;
        }
    </style>
    <g>
        <path
            class="st0"
            d="M432.871,404.268c-10.756-18.361-27.411-29.408-43.426-36.782c-16.038-7.367-31.903-11.337-41.438-14.935
c-7.56-2.808-15.799-7.195-21.676-11.948c-2.943-2.346-5.274-4.782-6.674-6.904c-1.446-2.13-1.885-3.784-1.885-4.894
c0-7.591,0-11.025,0-22.57c10.116-11.263,24.655-28.7,30.615-56.358c2.093-0.938,4.156-1.996,6.138-3.389
c4.96-3.412,9.154-8.365,12.708-15.106c3.59-6.771,6.756-15.427,10.138-27.27c1.706-6.011,2.51-11.226,2.51-15.874
c0-5.356-1.103-9.996-3.129-13.772c-1.743-3.293-4.127-5.661-6.592-7.419c32.73-73.058-9.289-131.94-9.289-131.94l12.335-31.709
c0,0-52.849,3.523-99.814-1.758c-135.694-15.247-143.277,79.858-143.277,122.13c0,25.326,3.784,40.045,7.061,48.06
c-0.663,0.871-1.378,1.631-1.929,2.644c-2.018,3.769-3.121,8.417-3.121,13.772c0.015,4.64,0.797,9.855,2.518,15.866
c4.529,15.769,8.611,25.944,13.9,33.422c2.652,3.71,5.654,6.69,8.931,8.954c1.996,1.393,4.06,2.451,6.138,3.389
c5.974,27.642,20.506,45.087,30.622,56.35c0,11.546,0,14.987,0,22.578c0.022,0.946-0.455,2.681-2.026,4.924
c-2.287,3.359-6.771,7.359-11.985,10.741c-5.192,3.404-11.106,6.287-16.074,8.03c-6.458,2.279-15.732,4.819-25.885,8.409
c-15.248,5.401-32.73,13.178-46.726,27.151c-14.018,13.914-23.985,34.316-23.902,62.324c0,3.561,0.156,7.256,0.484,11.062
c0.209,2.391,1.042,4.365,2.048,6.049c1.944,3.136,4.558,5.571,7.844,8.045c5.758,4.268,13.75,8.469,24.141,12.611
c31.062,12.342,83.614,23.836,153.855,23.85c57.073-0.007,102.495-7.612,134.168-17.072c15.836-4.738,28.208-9.908,37.095-15.025
c4.461-2.57,8.052-5.117,10.89-7.888c1.415-1.386,2.652-2.831,3.672-4.522c1.02-1.684,1.855-3.658,2.064-6.041
c0.32-3.814,0.469-7.493,0.469-11.039C444.38,431.754,440.045,416.477,432.871,404.268z M243.374,496.291
c-0.246-0.008-0.492-0.008-0.745-0.008l-24.812-58.228l0.32,0.253l22.57-28.216l3.702,15.575h0.991L243.374,496.291z
M212.975,426.704l-28.462-66.756c3.568-2.071,7.076-4.35,10.294-6.905c1.966-1.579,3.844-3.24,5.564-5.006l47.56,34.965
L212.975,426.704z M207.068,338.979c1.572-3.053,2.645-6.435,2.66-10.174c0-8.224,0-11.441,0-25.535v-2.979l-1.982-2.205
c-10.57-11.776-24.879-27.404-29.848-55.173l-0.79-4.447l-4.238-1.505c-2.696-0.96-4.744-1.951-6.548-3.195
c-2.644-1.869-5.05-4.425-7.858-9.653c-2.764-5.2-5.714-12.976-8.916-24.261c-1.423-4.924-1.915-8.76-1.915-11.605
c0-3.314,0.633-5.236,1.282-6.465c0.976-1.774,2.175-2.533,3.702-3.143c1.043-0.403,2.145-0.552,2.778-0.604l6.011,1.274
l8.633,14.92c0,0-0.469-74.205,7.047-79.851c9.393-7.054,63.426,14.093,79.858,14.093c16.446,0,68.7-22.905,77.974-15.97
c10.786,8.067,8.931,88.774,8.931,88.774l8.834-22.86l3.621-0.388c0.633,0.008,2.942,0.276,4.514,1.311
c0.879,0.574,1.609,1.236,2.272,2.443c0.641,1.229,1.274,3.151,1.274,6.458c0.014,2.853-0.492,6.689-1.899,11.62
c-4.276,15.046-8.104,23.806-11.628,28.663c-1.758,2.458-3.367,3.986-5.162,5.244c-1.788,1.244-3.851,2.235-6.548,3.195
l-4.238,1.505l-0.782,4.447c-4.953,27.769-19.27,43.397-29.84,55.173l-1.996,2.205v2.979c0,14.094,0,17.311,0,25.535
c0.015,3.724,1.035,7.143,2.592,10.235l-48.857,35.895L207.068,338.979z M269.341,496.35c-0.246,0.015-0.462,0.022-0.716,0.022
l-2.033-70.704h1.028l3.695-15.575l22.562,28.208l0.32-0.246L269.341,496.35z M299.024,426.704l-34.95-43.694l47.516-34.928
c3.247,3.315,6.994,6.294,11.054,8.968c1.564,1.021,3.248,1.862,4.886,2.793L299.024,426.704z"
        />
    </g>
</svg>`
const passportFemale = `<svg
height="100px"
width="100px"
version="1.1"
id="_x32_"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 512 512"
xml:space="preserve"
>
<style type="text/css">
	.st0 {
		fill: #000000;
	}
</style>
<g>
	<path
		class="st0"
		d="M394.907,363.894c-0.07-0.028-0.14-0.056-0.21-0.084c-9.137-3.446-18.077-5.976-25.948-8.13
c-5.243-1.433-9.961-2.698-13.932-3.908c-4.565-23.544-0.594-62.145,18.399-119.131C385.638,195.369,445.692,0,256,0
C66.308,0,130.55,194.222,138.784,232.641c10.199,47.592,25.193,96.734,19.014,118.425c-9.298,3.236-19.839,7.459-30.842,13.925
c-38.182-8.172-96.643,29.269-84.808,100.291c1.216,8.487,19.098,15.68,44.578,21.489c1.95,0.713,3.873,1.44,5.984,2.153
C128.257,500.948,186.808,511.979,256,512c57.958-0.007,106.877-7.529,141.794-16.973c8.752-2.37,16.609-4.858,23.55-7.396
c27.55-5.949,47.235-13.429,48.507-22.348C480.707,400.146,432.438,363.265,394.907,363.894z M358.899,443.808
c-5.369,0-52.792-16.63-102.899,3.055c-50.107-19.685-97.53-3.055-102.899-3.055c-4.271,0-8.507-46.451-14.589-67.22
c15.463-8.424,30.031-12.345,42.257-16.624c8.032-2.866,14.75-5.892,20.042-10.932c2.622-2.517,4.789-5.593,6.173-9.067
c1.391-3.474,2.013-7.263,2.006-11.212c0-8.354,0-18.798,0-33.107v-3.027l-2.02-2.243c-10.737-11.961-25.278-27.829-30.318-56.05
l-0.797-4.509l-4.306-1.538c-2.741-0.979-4.83-1.979-6.655-3.244c-2.691-1.901-5.131-4.494-7.984-9.814
c-2.816-5.284-5.802-13.177-9.066-24.634c-1.433-5.012-1.943-8.905-1.943-11.799c0.007-3.356,0.65-5.327,1.308-6.564
c0.992-1.804,2.209-2.572,3.761-3.194c1.062-0.405,2.188-0.559,2.831-0.615l7.626,1.622c2.845,4.53,4.201,8.92,4.201,8.92
s-5.369-16.106,8.948-37.58c13.953-20.929,73.812-2.796,111.63-56.559c36.958,43.599,37.79,14.946,51.219,35.084
c14.316,21.475,8.948,59.055,8.948,59.055s1.566-5.005,4.823-9.842l6.62-0.706c0.497-0.014,3.007,0.231,4.663,1.335
c0.902,0.573,1.636,1.244,2.307,2.482c0.657,1.238,1.3,3.202,1.314,6.564c0,2.894-0.518,6.781-1.944,11.799
c-4.341,15.295-8.235,24.187-11.807,29.122c-1.789,2.488-3.425,4.054-5.243,5.326c-1.824,1.266-3.914,2.265-6.654,3.244
l-4.306,1.538l-0.796,4.509c-5.04,28.22-19.581,44.089-30.318,56.05l-2.02,2.243v3.027c0,14.316,0,24.753,0,33.107
c-0.014,5.194,2.006,9.856,4.774,13.582c4.187,5.62,10.003,9.78,16.336,13.408c6.347,3.607,13.29,6.571,19.818,9.018
c7.801,2.894,17.742,5.173,28.611,8.346c0.616,0.182,1.245,0.378,1.86,0.559C367.826,392.583,363.38,443.808,358.899,443.808z"
	/>
</g>
</svg>`

function renderSponsorId(kid) {
    const scriptHeadEl = document.getElementById(
        'script-script'
    )
    const sponsorBox =
        document.createElement('div')
    // const sponsorId =
    //     document.createElement('div')
    // sponsorBox.classList.add(
    //     'document',
    //     'sponsor-id-container'
    // )
    // sponsorId.classList.add('sponsor-id')
    // sponsorId.textContent = kid.sponsor.id_type[0]
    // const idHeader = document.createElement('div')
    // idHeader.classList.add('id-header')
    // idHeader.innerHTML = `<h3>${kid.sponsor.name}</h3>`
    // const idBody = document.createElement('div')
    // const idBodyLeft =
    //     document.createElement('div')
    // const idBodyMiddle =
    //     document.createElement('div')
    // idBody.classList.add('id-body')
    // idBodyLeft.classList.add('id-body-left')
    // idBodyMiddle.classList.add('id-body-middle')
    // const imageDiv = document.createElement('div')
    // imageDiv.classList.add('contact-card')
    // const contactCard =
    //     document.createElement('img')
    // contactCard.src = './IdPlaceholder.png'
    // imageDiv.append(contactCard)
    // idBodyLeft.append(imageDiv)
    // const idFooter = document.createElement('div')
    // idBody.append(idBodyLeft, idBodyMiddle)

    sponsorBox.innerHTML = `<style>
    .passport-container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        width: 100%;
        height: auto;
    }

    .passport-left {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .passport-right {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .passport-cover {
        background-color: green;
        height: 300px;
        width: 210px;
        border: 1px solid black;
        border-radius: 5px;
        text-align: center;
        color: gold;
        display: grid;
        grid-template-rows: 1fr 2fr 5fr 2fr 1fr;
    }

    .passport-open {
        margin: 1rem;
        background-color: lightblue;
        height: 420px;
        width: 300px;
        border: 1px solid black;
        border-radius: 5px;
    }
    .passport-open {
        display: grid;
        grid-template-rows: 1fr 1fr;
    }
    .passport-top {
        display: flex;
        border-bottom: 1px solid black;
        width: 300px;
    }
    .number {
        text-align: center;
        font-size: 2rem;
        color: rgb(231, 0, 0);
        writing-mode: vertical-rl;
        text-orientation: mixed;
        transform: rotate(180deg);
        left: 0;
        margin-left: 0;
        opacity: 0.5;
    }
    .watermark {
        opacity: 0.1;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        display: flex;
        width: 100%;
    }

    .passport-bottom {
        display: grid;
        grid-template-rows: 1fr 6fr 2fr;
        width: 300px;
    }
    .bottom-header {
        text-align: center;
    }
    .bottom-body {
        display: grid;
        grid-template-columns: 1fr 0.8fr 0.8fr;
    }
    .bottom-footer {
        font-size: 12px;
        width: 300px;
        text-align: center;
    }

    ul {
        list-style: none;
        font-size: 10px;
    }
    li {
        margin-bottom: 1rem;
    }

    .passport-picture {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<div class="passport-container document">
    <div class="passport-left">
        <div class="passport-cover">
            <div class="cover-spacer"></div>
            <div class="cover-top">PASSPORT</div>
            <div class="cover-logo">
                <svg
                    width="120px"
                    height="120px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                >
                    <title>globe</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs></defs>
                    <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                        sketch:type="MSPage"
                    >
                        <g
                            id="Icon-Set"
                            sketch:type="MSLayerGroup"
                            transform="translate(-204.000000, -671.000000)"
                            fill="#000000"
                        >
                            <path
                                d="M231.596,694.829 C229.681,694.192 227.622,693.716 225.455,693.408 C225.75,691.675 225.907,689.859 225.957,688 L233.962,688 C233.783,690.521 232.936,692.854 231.596,694.829 L231.596,694.829 Z M223.434,700.559 C224.1,698.95 224.645,697.211 225.064,695.379 C226.862,695.645 228.586,696.038 230.219,696.554 C228.415,698.477 226.073,699.892 223.434,700.559 L223.434,700.559 Z M220.971,700.951 C220.649,700.974 220.328,701 220,701 C219.672,701 219.352,700.974 219.029,700.951 C218.178,699.179 217.489,697.207 216.979,695.114 C217.973,695.027 218.98,694.976 220,694.976 C221.02,694.976 222.027,695.027 223.022,695.114 C222.511,697.207 221.822,699.179 220.971,700.951 L220.971,700.951 Z M209.781,696.554 C211.414,696.038 213.138,695.645 214.936,695.379 C215.355,697.211 215.9,698.95 216.566,700.559 C213.927,699.892 211.586,698.477 209.781,696.554 L209.781,696.554 Z M208.404,694.829 C207.064,692.854 206.217,690.521 206.038,688 L214.043,688 C214.093,689.859 214.25,691.675 214.545,693.408 C212.378,693.716 210.319,694.192 208.404,694.829 L208.404,694.829 Z M208.404,679.171 C210.319,679.808 212.378,680.285 214.545,680.592 C214.25,682.325 214.093,684.141 214.043,686 L206.038,686 C206.217,683.479 207.064,681.146 208.404,679.171 L208.404,679.171 Z M216.566,673.441 C215.9,675.05 215.355,676.789 214.936,678.621 C213.138,678.356 211.414,677.962 209.781,677.446 C211.586,675.523 213.927,674.108 216.566,673.441 L216.566,673.441 Z M219.029,673.049 C219.352,673.027 219.672,673 220,673 C220.328,673 220.649,673.027 220.971,673.049 C221.822,674.821 222.511,676.794 223.022,678.886 C222.027,678.973 221.02,679.024 220,679.024 C218.98,679.024 217.973,678.973 216.979,678.886 C217.489,676.794 218.178,674.821 219.029,673.049 L219.029,673.049 Z M223.954,688 C223.9,689.761 223.74,691.493 223.439,693.156 C222.313,693.058 221.168,693 220,693 C218.832,693 217.687,693.058 216.562,693.156 C216.26,691.493 216.1,689.761 216.047,688 L223.954,688 L223.954,688 Z M216.047,686 C216.1,684.239 216.26,682.507 216.562,680.844 C217.687,680.942 218.832,681 220,681 C221.168,681 222.313,680.942 223.438,680.844 C223.74,682.507 223.9,684.239 223.954,686 L216.047,686 L216.047,686 Z M230.219,677.446 C228.586,677.962 226.862,678.356 225.064,678.621 C224.645,676.789 224.1,675.05 223.434,673.441 C226.073,674.108 228.415,675.523 230.219,677.446 L230.219,677.446 Z M231.596,679.171 C232.936,681.146 233.783,683.479 233.962,686 L225.957,686 C225.907,684.141 225.75,682.325 225.455,680.592 C227.622,680.285 229.681,679.808 231.596,679.171 L231.596,679.171 Z M220,671 C211.164,671 204,678.163 204,687 C204,695.837 211.164,703 220,703 C228.836,703 236,695.837 236,687 C236,678.163 228.836,671 220,671 L220,671 Z"
                                id="globe"
                                sketch:type="MSShapeGroup"
                            ></path>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="cover-bottom">USA</div>
            <div class="cover-spacer"></div>
        </div>
    </div>
    <div class="passport-right">
        <div class="passport-open">
            <div class="passport-top">
                <div class="number">DS32156</div>
                <div class="watermark">
                    <svg
                        version="1.0"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="200px"
                        height="200px"
                        viewBox="0 0 64 64"
                        enable-background="new 0 0 64 64"
                        xml:space="preserve"
                    >
                        <path
                            fill="#231F20"
                            d="M32,0C15.776,0,2.381,12.077,0.292,27.729c-0.002,0.016-0.004,0.031-0.006,0.047
                           c-0.056,0.421-0.106,0.843-0.146,1.269c-0.019,0.197-0.029,0.396-0.045,0.594c-0.021,0.28-0.044,0.56-0.058,0.842
                           C0.014,30.983,0,31.49,0,32c0,17.673,14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M33.362,58.502
                           c-0.72,0.787-1.901,1.414-2.675,0.67c-0.653-0.644-0.099-1.44,0-2.353c0.125-1.065-0.362-2.345,0.666-2.676
                           c0.837-0.259,1.468,0.322,2.009,1.012C34.187,56.175,34.239,57.526,33.362,58.502z M43.446,49.87
                           c-1.18,0.608-2.006,0.494-3.323,0.673c-2.454,0.309-4.394,1.52-6.333,0c-0.867-0.695-0.978-1.451-1.65-2.341
                           c-1.084-1.364-1.355-3.879-3.01-3.322c-1.058,0.356-1.026,1.415-1.654,2.335c-0.81,1.156-0.607,2.793-2.005,2.993
                           c-0.974,0.138-1.499-0.458-2.321-1c-0.922-0.614-1.104-1.348-2.002-1.993c-0.934-0.689-1.69-0.693-2.654-1.334
                           c-0.694-0.463-0.842-1.304-1.673-1.334c-0.751-0.022-1.289,0.346-1.664,0.996c-0.701,1.214-0.942,4.793-2.988,4.665
                           c-1.516-0.103-4.758-3.509-5.994-4.327c-0.405-0.273-0.78-0.551-1.158-0.763c-1.829-3.756-2.891-7.952-2.997-12.385
                           c0.614-0.515,1.239-0.769,1.819-1.493c0.927-1.13,0.481-2.507,1.673-3.335c0.886-0.604,1.602-0.507,2.669-0.658
                           c1.529-0.222,2.491-0.422,3.988,0c1.459,0.409,2.016,1.246,3.326,1.992c1.415,0.81,2.052,1.766,3.66,2.001
                           c1.166,0.165,1.966-0.901,2.988-0.337c0.824,0.458,1.406,1.066,1.341,2.001c-0.1,1.218-2.522,0.444-2.659,1.662
                           c-0.183,1.558,2.512-0.194,3.992,0.33c0.974,0.355,2.241,0.294,2.325,1.334c0.081,1.156-1.608,0.837-2.657,1.335
                           c-1.162,0.541-1.771,0.996-3.004,1.329c-1.125,0.298-2.312-0.628-2.987,0.329c-0.53,0.742-0.343,1.489,0,2.335
                           c0.787,1.931,3.349,1.352,5.322,0.657c1.383-0.488,1.641-1.726,2.997-2.329c1.438-0.641,2.554-1.335,3.981-0.663
                           c1.178,0.556,0.849,2.05,2.006,2.663c1.253,0.668,2.432-0.729,3.663,0c0.957,0.569,0.887,1.521,1.655,2.327
                           c0.894,0.942,1.41,1.702,2.668,2c1.286,0.299,2.072-1.071,3.327-0.671c0.965,0.315,1.755,0.68,1.987,1.672
                           C46.465,48.634,44.744,49.198,43.446,49.87z M45.839,33.841c-1.154,1.16-2.156,1.539-3.771,1.893c-1.433,0.315-3.443,1.438-3.772,0
                           c-0.251-1.148,1.029-1.558,1.893-2.359c0.959-0.895,1.854-0.983,2.826-1.892c0.87-0.802,0.756-2.031,1.893-2.359
                           c1.109-0.32,2.182-0.019,2.825,0.947C48.652,31.438,47.006,32.681,45.839,33.841z M59.989,29.319
                           c-0.492,0.508-0.462,1.044-0.965,1.542c-0.557,0.539-1.331,0.307-1.738,0.968c-0.358,0.577-0.13,1.057-0.194,1.735
                           c-0.041,0.387-1.924,1.256-2.313,0.385c-0.214-0.481,0.281-0.907,0-1.353c-0.263-0.401-0.555-0.195-0.899,0.181
                           c-0.359,0.388-0.772,0.958-1.221,1.172c-0.589,0.273-0.196-2.25-0.395-3.088c-0.146-0.663,0.01-1.08,0.198-1.736
                           c0.25-0.91,0.938-1.206,1.155-2.125c0.194-0.806,0.033-1.295,0-2.123c-0.039-0.906-0.015-1.427-0.188-2.314
                           c-0.192-0.937-0.252-1.525-0.771-2.316c-0.418-0.624-0.694-1.001-1.354-1.352c-0.16-0.088-0.31-0.146-0.452-0.191
                           c-0.34-0.113-0.659-0.128-1.098-0.193c-0.888-0.132-1.522,0.432-2.314,0c-0.462-0.255-0.606-0.575-0.96-0.967
                           c-0.404-0.434-0.511-0.789-0.967-1.158c-0.341-0.276-0.552-0.437-0.965-0.581c-0.79-0.263-1.342-0.082-2.126,0.196
                           c-0.77,0.268-1.058,0.707-1.739,1.155c-0.522,0.303-0.893,0.371-1.348,0.774c-0.276,0.242-1.59,1.177-2.127,1.155
                           c-0.544-0.021-0.851-0.343-1.338-0.382c-0.065-0.008-0.13-0.008-0.204,0c0,0,0,0-0.005,0c-0.473,0.036-0.696,0.269-1.146,0.382
                           c-1.107,0.276-1.812-0.115-2.905,0.197c-0.712,0.2-0.993,0.766-1.73,0.771c-0.841,0.005-1.125-0.743-1.932-0.968
                           c-0.442-0.118-0.702-0.129-1.157-0.19c-0.749-0.108-1.178-0.119-1.926-0.191H24.86c-0.016,0.006-0.591,0.058-0.688,0
                           c-0.422-0.286-0.722-0.521-1.244-0.773c-0.575-0.283-0.919-0.428-1.547-0.584l0.026-0.381c0,0,0-0.847-0.121-1.207
                           c-0.115-0.361-0.24-0.361,0-1.086c0.248-0.722,0.679-1.182,0.679-1.182c0.297-0.228,0.516-0.305,0.769-0.58
                           c0.51-0.539,0.717-0.998,0.774-1.739c0.067-0.972-1.205-1.367-0.97-2.316c0.209-0.826,0.904-0.98,1.547-1.543
                           c0.779-0.67,1.468-0.758,2.12-1.542c0.501-0.593,0.911-0.965,0.97-1.738c0.053-0.657-0.23-1.068-0.57-1.538
                           C28.356,2.175,30.157,2,32,2c14.919,0,27.29,10.893,29.605,25.158c-0.203,0.352-0.001,0.796-0.27,1.193
                           C60.979,28.894,60.436,28.85,59.989,29.319z"
                        />
                    </svg>
                </div>
            </div>
            <div class="passport-bottom">
                <div class="bottom-header">>>>>>>>PASSPORT>>>>>>></div>
                <div class="bottom-body">
                    <div class="passport-picture">
                    ${
                        kid.sponsorGender.toUpperCase() ===
                        'MALE'
                            ? passportMale
                            : passportFemale
                    }
                    </div>
                    <div class="passport-info-1">
                        <ul>
                            <li>Name: ${
                                kid.sponsor.name
                            }</li>
                            <li>DOB: ${kid.sponsor.birthday.toLocaleDateString()}</li>
                            <li>Date Issued: ${kid.sponsor.id_issued.toLocaleDateString()}</li>
                        </ul>
                    </div>
                    <div class="passport-info-2">
                        <ul>
                            <li>Expiration Date: ${kid.sponsor.id_expires.toLocaleDateString()}</li>
                            <li>Sex: ${
                                kid.sponsorGender
                            }</li>
                            <li>Passport Number: DS32156</li>
                        </ul>
                    </div>
                </div>
                <div class="bottom-footer">
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>DS32156
                    <br />
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                </div>
            </div>
        </div>
    </div>
</div>
`

    scriptHeadEl.append(sponsorBox)

    if (
        kid.sponsor.relationship === 'Mother' ||
        kid.sponsor.relationship === 'Father'
    ) {
        renderPublicRecordsCheck(kid)
    } else {
        renderProofOfAddress(kid)
    }
}

function renderProofOfAddress(child) {
    const scriptHeadEl = document.getElementById(
        'script-script'
    )

    const proofOfAddress =
        document.createElement('div')
    proofOfAddress.innerHTML = `<style>
    body{
        margin-top:20px;

    }

    .invoice {
        background: #fff;
        padding: 20px;
        color: black;
    }

    .invoice-company {
        font-size: 20px
        color: black;
    }

    .invoice-header {
        margin: 0 -20px;
        background: #f0f3f4;
        padding: 20px;
    }

    .invoice-date,
    .invoice-from,
    .invoice-to {
        display: table-cell;
        width: 1%
    }

    .invoice-from,
    .invoice-to {
        padding-right: 20px;
    }

    .invoice-date .date,
    .invoice-from strong,
    .invoice-to strong {
        font-size: 16px;
        font-weight: 600
    }

    .invoice-date {
        text-align: right;
        padding-left: 20px
    }

    .invoice-price {
        background: #f0f3f4;
        display: table;
        width: 100%
    }

    .invoice-price .invoice-price-left,
    .invoice-price .invoice-price-right {
        display: table-cell;
        padding: 20px;
        font-size: 20px;
        font-weight: 600;
        width: 75%;
        position: relative;
        vertical-align: middle
    }

    .invoice-price .invoice-price-left .sub-price {
        display: table-cell;
        vertical-align: middle;
        padding: 0 20px
    }

    .invoice-price small {
        font-size: 12px;
        font-weight: 400;
        display: block
    }

    .invoice-price .invoice-price-row {
        display: table;
        float: left
    }

    .invoice-price .invoice-price-right {
        width: 25%;
        background: #2d353c;
        color: #fff;
        font-size: 28px;
        text-align: right;
        vertical-align: bottom;
        font-weight: 300
    }

    .invoice-price .invoice-price-right small {
        display: block;
        opacity: .6;
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 12px
    }

    .invoice-footer {
        border-top: 1px solid #ddd;
        padding-top: 10px;
        font-size: 10px
    }

    .invoice-note {
        color: #999;
        margin-top: 80px;
        font-size: 85%
    }

    .invoice>div:not(.invoice-footer) {
        margin-bottom: 20px
    }

    .btn.btn-white, .btn.btn-white.disabled, .btn.btn-white.disabled:focus, .btn.btn-white.disabled:hover, .btn.btn-white[disabled], .btn.btn-white[disabled]:focus, .btn.btn-white[disabled]:hover {
        color: #2d353c;
        background: #fff;
        border-color: #d9dfe3;
    }
</style>
<div class="container document">
    <div class="col-md-12">
        <div class="invoice">
            <!-- begin invoice-company -->
            <div class="invoice-company text-inverse f-w-600">
                DS Utility, Inc (TRAINING)
            </div>
            <!-- end invoice-company -->
            <!-- begin invoice-header -->
            <div class="invoice-header">
                <div class="invoice-from">
                    <address class="m-t-5 m-b-5">
                        <strong class="text-inverse">DS Utility, Inc.</strong><br />
                        1234 Main Street<br />
                        Sponsor City, Sponsor State, Sponsor Zip<br />
                        Phone: (123) 000-0000<br />
                        Fax: (123) 000-0001
                    </address>
                </div>
                <div class="invoice-to">
                    <address class="m-t-5 m-b-5">
                        <strong class="text-inverse"
                            >${
                                child.sponsor.name
                            } </strong
                        ><br />
                       ADDRESS<br />
                        CITY, ST, ZIP<br />
                        Phone: ${
                            child.sponsor.phone
                        }
                        <br />
                    </address>
                </div>
                <div class="invoice-date">
                    <small>Invoice / MONTH period</small>
                    <div class="date text-inverse m-t-5">${getOneMonthDate()}</div>
                    <div class="invoice-detail">
                        #0000123DSS<br />
                        Electric Bill
                    </div>
                </div>
            </div>
            <!-- end invoice-header -->
            <!-- begin invoice-content -->
            <div class="invoice-content">
                <!-- begin table-responsive -->
                <div class="table-responsive">
                    <table class="table table-invoice">
                        <thead>
                            <tr>
                                <th>DESCRIPTION</th>
                                <th
                                    class="text-center"
                                    width="10%"
                                >
                                    WATER
                                </th>
                                <th
                                    class="text-center"
                                    width="10%"
                                >
                                    WASTE
                                </th>
                                <th
                                    class="text-right"
                                    width="20%"
                                >
                                    ELECTRICITY
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span class="text-inverse">Water, Electricity, Waste</span
                                    ><br />
                                    <small
                                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit. Sed id sagittis arcu.</small
                                    >
                                </td>
                                <td class="text-center">$50.00</td>
                                <td class="text-center">$20.00</td>
                                <td class="text-right">$90.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- end table-responsive -->
                <!-- begin invoice-price -->
                <div class="invoice-price">
                    <div class="invoice-price-left">
                        <div class="invoice-price-row"></div>
                    </div>
                    <div class="invoice-price-right">
                        <small>TOTAL</small> <span class="f-w-600">$160.00</span>
                    </div>
                </div>
                <!-- end invoice-price -->
            </div>
            <!-- end invoice-content -->
            <!-- begin invoice-note -->
            <div class="invoice-note">
                * Make all checks payable to DS Utility<br />
                * Payment is due within 30 days<br />
                * If you have any questions concerning this invoice, contact AC
                Slater at T: 123.555.0000 E: BadBunny@greensborolive.com
            </div>
            <!-- end invoice-note -->
            <!-- begin invoice-footer -->
            <div class="invoice-footer">
                <p class="text-center m-b-5 f-w-600">THANK YOU FOR YOUR BUSINESS</p>
                <p class="text-center">
                    <span class="m-r-10"
                        ><i class="fa fa-fw fa-lg fa-globe"></i> dsutility.com</span
                    >
                    <span class="m-r-10"
                        ><i class="fa fa-fw fa-lg fa-phone-volume"></i> T:
                        123-000-0000</span
                    >
                    <span class="m-r-10"
                        ><i class="fa fa-fw fa-lg fa-envelope"></i>
                        training@dsutility.com</span
                    >
                </p>
            </div>
            <!-- end invoice-footer -->
        </div>
    </div>`

    scriptHeadEl.append(proofOfAddress)
    renderPublicRecordsCheck(child)
}
function getOneMonthDate() {
    const today = new Date()
    today.setDate(1)
    return today.toLocaleDateString()
}

function renderPublicRecordsCheck(child) {
    const checks = [
        {
            firstName: child.sponsor.firstName,
            lastName: `${child.sponsor.fathersFamilyName} ${child.sponsor.mothersFamilyName}`,
            dateOfBirth:
                child.sponsor.birthday.toLocaleDateString()
        },
        {
            firstName:
                child.sponsor.firstName.split(
                    ' '
                )[0],
            lastName:
                child.sponsor.fathersFamilyName,
            dateOfBirth:
                child.sponsor.birthday.toLocaleDateString()
        },
        {
            firstName:
                child.sponsor.firstName.split(
                    ' '
                )[1],
            lastName:
                child.sponsor.fathersFamilyName,
            dateOfBirth:
                child.sponsor.birthday.toLocaleDateString()
        },
        {
            firstName:
                child.sponsor.firstName.split(
                    ' '
                )[0],
            lastName:
                child.sponsor.mothersFamilyName,
            dateOfBirth:
                child.sponsor.birthday.toLocaleDateString()
        },
        {
            firstName:
                child.sponsor.firstName.split(
                    ' '
                )[1],
            lastName:
                child.sponsor.mothersFamilyName,
            dateOfBirth:
                child.sponsor.birthday.toLocaleDateString()
        },
        {
            firstName:
                child.sponsor.firstName.split(
                    ' '
                )[0],
            lastName: `${child.sponsor.fathersFamilyName} ${child.sponsor.mothersFamilyName}`,
            dateOfBirth:
                child.sponsor.birthday.toLocaleDateString()
        },
        {
            firstName:
                child.sponsor.firstName.split(
                    ' '
                )[1],
            lastName: `${child.sponsor.fathersFamilyName} ${child.sponsor.mothersFamilyName}`,
            dateOfBirth:
                child.sponsor.birthday.toLocaleDateString()
        }
    ]
    const today = new Date()

    const scriptHeadEl = document.getElementById(
        'script-script'
    )

    const publicRecordsCheck =
        document.createElement('div')
    publicRecordsCheck.classList.add(
        'document',
        'public-records-check'
    )
    const prcTitle = document.createElement('h2')
    prcTitle.textContent =
        'Public Records Check ' +
        today.toLocaleDateString()
    publicRecordsCheck.append(prcTitle)
    checks.forEach((check) => {
        const newCheck =
            document.createElement('div')
        newCheck.classList.add('new-check')

        newCheck.innerHTML = `<ul>
            <li><h3><strong>Name</strong> : ${check.firstName} ${check.lastName}</h3></li>
            <li><h3><strong>Date of Birth: </strong> ${check.dateOfBirth}</h3></li>
            <li><h3><strong>Results: </strong> CLEAR</h3></li>
            </ul>`
        publicRecordsCheck.append(newCheck)
    })

    scriptHeadEl.append(publicRecordsCheck)
    if (
        child.sponsor.relationship === 'Mother' ||
        child.sponsor.relationship === 'Father'
    ) {
        return
    }
    renderLOD(child)
}

function renderLOD(child) {
    console.log(child.sponsor.relationship)
    const scriptHeadEl = document.getElementById(
        'script-script'
    )
    const letterOfDesignation =
        document.createElement('div')

    letterOfDesignation.innerHTML = `<style>
    .lod-el {
        padding: 3rem;
    }
</style>
<div class="lod-el document">
<h4>Carta De Designacion</h4>
    <p>
        Yo, ${child.mother.name}, con domicilio en ${child.coo}, otorgo por este
        medio el poder a ${child.sponsor.name}, para
        actual como tutor legal de ${child.childName}, menor de edad, con fecha
        de nacimiento ${child.childDob}.
    </p>
    <p>
        Esta designacion se realiza con el fin de garantizar el bienestar,
        cuidado y proteccion adecuada de ${child.childName} en situatcions en
        las que no me encuentre disponible para ejercer como su tutor legal
    </p>

    <h7>Nombre de la madre: ${child.mother.name}</h7>
    <h7>Nombre del padre: ${child.father.name}</h7>
    <br />
    <h7>Nombre del apoderado: ${child.sponsor.name}</h7>
</div>`

    scriptHeadEl.append(letterOfDesignation)
    localStorage.removeItem('caseload')
    localStorage.setItem(
        'caseload',
        JSON.stringify(totalCaseload)
    )
}

function getAge(dob) {
    var dob = new Date(dob)
    var month_diff = Date.now() - dob.getTime()

    var age_dt = new Date(month_diff)

    var year = age_dt.getUTCFullYear()

    var age = Math.abs(year - 1970)

    return age
}
function appGenerated() {
    const d = Math.floor(Math.random() * 100)
    const app =
        d > 85 ? 'Generada Desde La App' : ''
    return app
}
function generateTonsOfCases(rounds) {
    const numCases =
        document.getElementById('number')
    const startingA = document.getElementById(
        'starting-a-number'
    )
    if (
        numCases.value == '' ||
        typeof Number(numCases) != 'number'
    ) {
        alert(
            'Specify, some number of cases, please \n -david'
        )
        return
    }
    if (startingA.value.length !== 9) {
        alert(
            'this A# looks suuuuuuuuuuuuuuuuuuuuuper sus.  just saying. \n -david'
        )
        return
    }
    if (totalCaseload.length > 0) {
        const deleteCases = confirm(
            'ARE YOU SURE YOU WANT TO DELETE ALL THIS INFORMATION AND GENERATE NEW CASES??!!?!?!?! CLICK OK TO DELETE OLD CASES AND GENERATE NEW CASES\n\n love, \n david'
        )
        if (!deleteCases) {
            return
        }
    }

    totalCaseload = []
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
    const storedCases =
        localStorage.getItem('caseload')
    if (storedCases) {
        localStorage.removeItem('caseload')
    }
    localStorage.setItem(
        'caseload',
        JSON.stringify(totalCaseload)
    )
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

let savedCaseload =
    localStorage.getItem('caseload')
if (savedCaseload) {
    savedCaseload = JSON.parse(savedCaseload)
    console.log(savedCaseload)
    savedCaseload.forEach((child) =>
        console.log(child)
    )
}
