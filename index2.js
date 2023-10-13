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
function renderSponsorId(kid) {
    const scriptHeadEl = document.getElementById(
        'script-script'
    )
    const sponsorBox =
        document.createElement('div')
    const sponsorId =
        document.createElement('div')
    sponsorBox.classList.add(
        'document',
        'sponsor-id-container'
    )
    sponsorId.classList.add('sponsor-id')
    sponsorId.textContent = kid.sponsor.id_type[0]
    const idHeader = document.createElement('div')
    idHeader.classList.add('id-header')
    idHeader.innerHTML = `<h3>${kid.sponsor.name}</h3>`
    const idBody = document.createElement('div')
    const idBodyLeft =
        document.createElement('div')
    const idBodyMiddle =
        document.createElement('div')
    idBody.classList.add('id-body')
    idBodyLeft.classList.add('id-body-left')
    idBodyMiddle.classList.add('id-body-middle')
    const imageDiv = document.createElement('div')
    imageDiv.classList.add('contact-card')
    const contactCard =
        document.createElement('img')
    contactCard.src = './IdPlaceholder.png'
    imageDiv.append(contactCard)
    idBodyLeft.append(imageDiv)
    const idFooter = document.createElement('div')
    idBody.append(idBodyLeft, idBodyMiddle)

    const idMiddleUl =
        document.createElement('ul')
    idMiddleUl.innerHTML = `<li><strong>Date of Birth: </strong>${kid.sponsor.birthday.toLocaleDateString()}</li>
    <li><strong>Date Issued: </strong>${kid.sponsor.id_issued.toLocaleDateString()}</li>
    <li><strong>Date of Expiry: </strong>${kid.sponsor.id_expires.toLocaleDateString()}</li>`
    idBodyMiddle.append(idMiddleUl)

    sponsorId.append(idHeader)
    sponsorId.append(idBody)
    sponsorBox.append(sponsorId)

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
    proofOfAddress.classList.add('document')

    const poaHeader =
        document.createElement('div')
    poaHeader.classList.add('poa-header')

    const poaLeft = document.createElement('div')
    poaLeft.classList.add('poa-left')
    poaLeft.innerHTML = `<h1><strong>ABC Utility</strong></h1>`
    const poaRight = document.createElement('div')
    poaRight.classList.add('poa-right')
    poaRight.innerHTML = `<h3><strong>Issue Date: </strong>${getOneMonthDate()}</h3>`
    const poaBody = document.createElement('div')
    poaBody.classList.add('poa-body')
    poaBody.innerHTML = `
    <ul>
        <li><h3>${child.sponsor.name}</h3></li>
        <li><h3>123 Main Street</h3></li>
        <li><h3>Anytown, USA</h3></li>
        <li><h3>00000</h3></li>
    </ul>`
    poaHeader.append(poaLeft, poaRight)
    proofOfAddress.append(poaHeader, poaBody)

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

    letterOfDesignation.classList.add(
        'document',
        'letter-of-designation'
    )
    const lodTitle = document.createElement('h2')
    lodTitle.textContent = 'Letter of Designation'
    const lodBody = document.createElement('div')
    lodBody.classList.add('lod-body')
    lodBody.innerHTML = `<h3>
    <strong>Child's Name: </strong> ${child.childName}
    </h3>
    <h3>
    <strong>Fathers Name: </strong> ${child.father.name}
    </h3>
    <h3>
    <strong>Mother's Name: </strong> ${child.mother.name}
    </h3>
    <h3>
    <strong>Sponsor's Name: </strong> ${child.sponsor.name}
    </h3>
    `

    letterOfDesignation.append(lodTitle, lodBody)

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
