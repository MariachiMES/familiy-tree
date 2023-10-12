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

export {
    idTypes,
    genders,
    maleNames,
    femaleNames,
    lastNames,
    countriesOfOrigin,
    hobbies
}
