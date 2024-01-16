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

let narratives = {
    1: {
        Mother: {
            narrative: {
                sponsor: [
                    'Mother Narrative 1',
                    'Mother Narrative 2',
                    'Mother Narrative 3',
                    'Mother Narrative 4',
                    'Mother Narrative 5',
                    'Mother Narrative 6'
                ],
                child: {
                    Male: [
                        'Male child cat 1 narrative 1.',
                        'Male child cat 1 narrative 2',
                        'Male Child cat 1 narrative 3',
                        'Male Child cat 1 narrative 4',
                        'Male Child cat 1 narrative 5',
                        'Male Child cat 1 narrative 6'
                    ],
                    Female: [
                        'Female child cat 1 narrative 1.',
                        'Female cat 1 narrative 2',
                        'Female Child cat 1 narrative 3',
                        'Female Child cat 1 narrative 4',
                        'Female Child cat 1 narrative 5',
                        'Female Child cat 1 narrative 6'
                    ]
                }
            }
        },
        Father: {
            narrative: {
                sponsor: [
                    'Father Narrative 1',
                    'Father Narrative 2',
                    'Father Narrative 3',
                    'Father Narrative 4',
                    'Father Narrative 5',
                    'Father Narrative 6'
                ],
                child: {
                    Male: [
                        'Male child cat 1 narrative 1',
                        'Male child cat 1 narrative 2',
                        'Male child cat 1 narrative 3',
                        'Male child cat 1 narrative 4',
                        'Male child cat 1 narrative 5',
                        'Male child cat 1 narrative 6'
                    ],
                    Female: []
                }
            }
        }
    },
    '2A': {
        Brother: {
            narrative: {
                sponsor: [
                    'Brother narrative 1',
                    'Brother narrative 2',
                    'Brother Narrative 3',
                    'Brother Narrative 4',
                    'Brother Narrative 5',
                    'Brother Narrative 6'
                ],
                child: {
                    Male: [
                        'Male Child cat 2a Brother narrative 1',
                        'Male child cat 2a Brother Narrative 2',
                        'Male child cat 2a brother narrative 3',
                        'Male child cat 2a brother narrative 4',
                        'Male child cat 2a brother narrative 5',
                        'Male child cat 2a brother narrative 6'
                    ],
                    Female: [
                        'Female child cat 2a Brother narrative 1',
                        'Female child cat 2a Brother narrative 2',
                        'Female child cat 2a Brother narrative 3',
                        'Female child cat 2a Brother narrative 4',
                        'Female child cat 2a Brother narrative 5',
                        'Female child cat 2a Brother narrative 6'
                    ]
                }
            }
        },
        Sister: {
            narrative: {
                sponsor: [
                    'Sister Narrative 1',
                    'Sister Narrative 2',
                    'Sister Narrative 3',
                    'Sister Narrative 4',
                    'Sister Narrative 5',
                    'Sister Narrative 6'
                ],
                child: {
                    Male: [
                        'Male child cat 2a sister narrative 1',
                        'Male child cat 2a sister narrative 2',
                        'Male child cat 2a sister narrative 3',
                        'Male child cat 2a sister narrative 4',
                        'Male child cat 2a sister narrative 5',
                        'Male child cat 2a sister narrative 6'
                    ],
                    Female: [
                        'Female child cat 2a sister narrative 1',
                        'Female child cat 2a sister narrative 2',
                        'Female child cat 2a sister narrative 3',
                        'Female child cat 2a sister narrative 4',
                        'Female child cat 2a sister narrative 5',
                        'Female child cat 2a sister narrative 6'
                    ]
                }
            }
        }
    },
    '2B': {
        'Maternal Aunt': {
            narrative: {
                sponsor: [
                    'Aunt Narrative 1',
                    'Aunt Narrative 2',
                    'Aunt Narrative 3',
                    'Aunt Narrative 4',
                    'Aunt Narrative 5',
                    'Aunt Narrative 6'
                ],
                child: {
                    Male: [
                        'Male child cat 2b aunt narrative 1',
                        'Male child cat 2b aunt narrative 2',
                        'Male child cat 2b aunt narrative 3',
                        'Male child cat 2b aunt narrative 4',
                        'Male child cat 2b aunt narrative 5',
                        'Male child cat 2b aunt narrative 6'
                    ],
                    Female: [
                        'Female child cat 2b aunt narrative 1',
                        'Female child cat 2b aunt narrative 2',
                        'Female child cat 2b aunt narrative 3',
                        'Female child cat 2b aunt narrative 4',
                        'Female child cat 2b aunt narrative 5',
                        'Female child cat 2b aunt narrative 6'
                    ]
                }
            }
        },
        'Maternal Uncle': {
            narrative: {
                sponsor: [
                    'Maternal Uncle Narrative 1',
                    'Maternal Uncle Narrative 2',
                    'Maternal Uncle Narrative 3',
                    'Maternal Uncle Narrative 4',
                    'Maternal Uncle Narrative 5',
                    'Maternal Uncle Narrative 6'
                ],
                child: {
                    Male: [
                        'Male child cat 2b Maternal Uncle Narrative 1',
                        'Male child cat 2b Maternal Uncle Narrative 2',
                        'Male child cat 2b Maternal Uncle Narrative 3',
                        ,
                        'Male child cat 2b Maternal Uncle Narrative 4',
                        ,
                        'Male child cat 2b Maternal Uncle Narrative 5',
                        ,
                        'Male child cat 2b Maternal Uncle Narrative 6',
                        ,
                        'Male child cat 2b Maternal Uncle Narrative 4'
                    ],
                    Female: [
                        'Female child cat 2b Maternal Uncle Narrative 1',
                        'Female child cat 2b Maternal Uncle Narrative 2',
                        'Female child cat 2b Maternal Uncle Narrative 3',
                        'Female child cat 2b Maternal Uncle Narrative 4',
                        'Female child cat 2b Maternal Uncle Narrative 5',
                        'Female child cat 2b Maternal Uncle Narrative 6'
                    ]
                }
            }
        },
        'Paternal Aunt': {
            narrative: {
                sponsor: [
                    'Paternal Aunt narrative 1',
                    'Paternal Aunt narrative 2',
                    'Paternal Aunt narrative 3',
                    'Paternal Aunt narrative 4',
                    'Paternal Aunt narrative 5',
                    'Paternal Aunt narrative 6'
                ],
                child: {
                    Male: [
                        'Male child Paternal Aunt narrative 1',
                        'Male child Paternal Aunt narrative 2',
                        'Male child Paternal Aunt narrative 3',
                        'Male child Paternal Aunt narrative 4',
                        'Male child Paternal Aunt narrative 5',
                        'Male child Paternal Aunt narrative 6'
                    ],
                    Female: [
                        'Female child Paternal Aunt Narrative 1',
                        'Female child Paternal Aunt Narrative 2',
                        'Female child Paternal Aunt Narrative 3',
                        'Female child Paternal Aunt Narrative 4',
                        'Female child Paternal Aunt Narrative 5',
                        'Female child Paternal Aunt Narrative 6'
                    ]
                }
            }
        },
        'Paternal Uncle': {
            narrative: {
                sponsor: [
                    'Paternal Uncle Narrative 1',
                    'Paternal Uncle Narrative 2',
                    'Paternal Uncle Narrative 3',
                    'Paternal Uncle Narrative 4',
                    'Paternal Uncle Narrative 5',
                    'Paternal Uncle Narrative 6'
                ],
                child: {
                    Male: [
                        'Male child paternal uncle narrative 1',
                        'Male child paternal uncle narrative 2',
                        'Male child paternal uncle narrative 3',
                        'Male child paternal uncle narrative 4',
                        'Male child paternal uncle narrative 5',
                        'Male child paternal uncle narrative 6'
                    ],
                    Female: []
                }
            }
        }
    },
    3: {
        'Maternal Great Aunt': {
            narrative: {
                sponsor: [
                    'Maternal Great Aunt Narrative 1',
                    'Maternal Great Aunt Narrative 2',
                    'Maternal Great Aunt Narrative 3',
                    'Maternal Great Aunt Narrative 4',
                    'Maternal Great Aunt Narrative 5',
                    'Maternal Great Aunt Narrative 6'
                ],
                child: {
                    Male: [
                        'Male Child Maternal Great Aunt Narrative 1',
                        'Male Child Maternal Great Aunt Narrative 2',
                        'Male Child Maternal Great Aunt Narrative 3',
                        'Male Child Maternal Great Aunt Narrative 4',
                        'Male Child Maternal Great Aunt Narrative 5',
                        'Male Child Maternal Great Aunt Narrative 6'
                    ],
                    Female: [
                        'Female Child Maternal Great Aunt Narrative 1',
                        'Female Child Maternal Great Aunt Narrative 2',
                        'Female Child Maternal Great Aunt Narrative 3',
                        'Female Child Maternal Great Aunt Narrative 4',
                        'Female Child Maternal Great Aunt Narrative 5',
                        'Female Child Maternal Great Aunt Narrative 6'
                    ]
                }
            }
        },
        'Maternal Great Uncle': {
            narrative: {
                sponsor: [
                    'Maternal Great Uncle Narrative 1',
                    'Maternal Great Uncle Narrative 2',
                    'Maternal Great Uncle Narrative 3',
                    'Maternal Great Uncle Narrative 4',
                    'Maternal Great Uncle Narrative 5',
                    'Maternal Great Uncle Narrative 6'
                ],
                child: {
                    Male: [
                        'Male Child Maternal Great Uncle Narrative 1',
                        'Male Child Maternal Great Uncle Narrative 2',
                        'Male Child Maternal Great Uncle Narrative 3',
                        'Male Child Maternal Great Uncle Narrative 4',
                        'Male Child Maternal Great Uncle Narrative 5',
                        'Male Child Maternal Great Uncle Narrative 6'
                    ],
                    Female: [
                        'Female Child Maternal Great Uncle Narrative 1',
                        'Female Child Maternal Great Uncle Narrative 2',
                        'Female Child Maternal Great Uncle Narrative 3',
                        'Female Child Maternal Great Uncle Narrative 4',
                        'Female Child Maternal Great Uncle Narrative 5',
                        'Female Child Maternal Great Uncle Narrative 6'
                    ]
                }
            }
        },
        'Paternal Great Aunt': {
            narrative: {
                sponsor: [
                    'Paternal Great Aunt Narrative 1',
                    'Paternal Great Aunt Narrative 2',
                    'Paternal Great Aunt Narrative 3',
                    'Paternal Great Aunt Narrative 4',
                    'Paternal Great Aunt Narrative 5',
                    'Paternal Great Aunt Narrative 6'
                ],
                child: {
                    Male: [
                        'Male Child Paternal Great Aunt Narrative 1',
                        'Male Child Paternal Great Aunt Narrative 2',
                        'Male Child Paternal Great Aunt Narrative 3',
                        'Male Child Paternal Great Aunt Narrative 4',
                        'Male Child Paternal Great Aunt Narrative 5',
                        'Male Child Paternal Great Aunt Narrative 6'
                    ],
                    Female: [
                        'Female Child Paternal Great Aunt Narrative 1',
                        'Female Child Paternal Great Aunt Narrative 2',
                        'Female Child Paternal Great Aunt Narrative 3',
                        'Female Child Paternal Great Aunt Narrative 4',
                        'Female Child Paternal Great Aunt Narrative 5',
                        'Female Child Paternal Great Aunt Narrative 6'
                    ]
                }
            }
        },
        'Paternal Great Uncle': {
            narrative: {
                sponsor: [
                    'Paternal Great Uncle Narrative 1',
                    'Paternal Great Uncle Narrative 2',
                    'Paternal Great Uncle Narrative 3',
                    'Paternal Great Uncle Narrative 4',
                    'Paternal Great Uncle Narrative 5',
                    'Paternal Great Uncle Narrative 6'
                ],
                child: {
                    Male: [
                        'Male Child Paternal Great Uncle Narrative 1',
                        'Male Child Paternal Great Uncle Narrative 2',
                        'Male Child Paternal Great Uncle Narrative 3',
                        'Male Child Paternal Great Uncle Narrative 4',
                        'Male Child Paternal Great Uncle Narrative 5',
                        'Male Child Paternal Great Uncle Narrative 6'
                    ],
                    Female: [
                        'Female Child Paternal Great Uncle Narrative 1',
                        'Female Child Paternal Great Uncle Narrative 2',
                        'Female Child Paternal Great Uncle Narrative 3',
                        'Female Child Paternal Great Uncle Narrative 4',
                        'Female Child Paternal Great Uncle Narrative 5',
                        'Female Child Paternal Great Uncle Narrative 6'
                    ]
                }
            }
        },
        'Unrelated Male': {
            narrative: {
                sponsor: [
                    'Unrelated Male Narrative 1',
                    'Unrelated Male Narrative 2',
                    'Unrelated Male Narrative 3',
                    'Unrelated Male Narrative 4',
                    'Unrelated Male Narrative 5',
                    'Unrelated Male Narrative 6'
                ],
                child: {
                    Male: [
                        'Male Child unrelated male narrative 1',
                        'Male Child unrelated male narrative 2',
                        'Male Child unrelated male narrative 3',
                        'Male Child unrelated male narrative 4',
                        'Male Child unrelated male narrative 5',
                        'Male Child unrelated male narrative 6'
                    ],
                    Female: [
                        'Female Child unrelated male narrative 1',
                        'Female Child unrelated male narrative 2',
                        'Female Child unrelated male narrative 3',
                        'Female Child unrelated male narrative 4',
                        'Female Child unrelated male narrative 5',
                        'Female Child unrelated male narrative 6'
                    ]
                }
            }
        },
        'Unrelated Female': {
            narrative: {
                sponsor: [
                    'Unrelated female narrative 1',
                    'Unrelated female narrative 2',
                    'Unrelated female narrative 3',
                    'Unrelated female narrative 4',
                    'Unrelated female narrative 5',
                    'Unrelated female narrative 6'
                ],
                child: {
                    Male: [
                        'Male child unrelated female narrative 1',
                        'Male child unrelated female narrative 2',
                        'Male child unrelated female narrative 3',
                        'Male child unrelated female narrative 4',
                        'Male child unrelated female narrative 5',
                        'Male child unrelated female narrative 6'
                    ],
                    Female: [
                        'Female child unrelated female narrative 1',
                        'Female child unrelated female narrative 2',
                        'Female child unrelated female narrative 3',
                        'Female child unrelated female narrative 4',
                        'Female child unrelated female narrative 5',
                        'Female child unrelated female narrative 6'
                    ]
                }
            }
        }
    }
}

export {
    idTypes,
    genders,
    maleNames,
    femaleNames,
    lastNames,
    countriesOfOrigin,
    hobbies,
    narratives
}
