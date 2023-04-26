export const typesOfPeriod = [
    {
        name: "FEDERAÇÃO",
        image: "/assets/images/icoAuthRegisterFederation.svg",
        imageActive: "/assets/images/icoAuthRegisterFederationHover.svg"
    }, {
        name: "ATLETA",
        image: "/assets/images/icoAuthRegisterDefault.svg",
        imageActive: "/assets/images/icoAuthRegisterDefaultHover.svg"
    }, {
        name: "CLUBE",
        image: "/assets/images/icoAuthRegisterClub.svg",
        imageActive: "/assets/images/icoAuthRegisterClubHover.svg"
    },
];


export const typesOfAthlete = [
    {
        name: "AMADOR",
        image: "/assets/images/icoAuthRegisterDefault.svg",
        imageActive: "/assets/images/icoAuthRegisterDefaultHover.svg"
    }, {
        name: "PROFISSIONAL",
        image: "/assets/images/icoAuthRegisterDefault.svg",
        imageActive: "/assets/images/icoAuthRegisterDefaultHover.svg"
    }
];

export const states = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
];

export const typePeriod = [
    {
        id: 0,
        name: 'Defina o período do seu contrato',
        message: ""
    }, {
        id: 1,
        name: '1 ano - Percentual de 50% sobre a receita',
        message: 'O seu período selecionado foi de 1 ano. O seu percentual sobre a receita dos seus Ativos será de 50%.'
    }, {
        id: 2,
        name: '3 anos - Percentual de 60% sobre a receita',
        message: 'O seu período selecionado foi de 3 anos. O seu percentual sobre a receita dos seus Ativos será de 60%.'
    }, {
        id: 3,
        name: '5 anos - Percentual de 70% sobre a receita',
        message: 'O seu período selecionado foi de 5 anos. O seu percentual sobre a receita dos seus Ativos será de 70%.'
    },
];


export const types = [
    {
        name: "INVESTIDOR",
        image: "/assets/images/icoAuthRegisterInvestor.svg",
        imageActive: "/assets/images/icoAuthRegisterInvestorHover.svg"
    }, {
        name: "TORCEDOR",
        image: "/assets/images/icoAuthRegisterDefault.svg",
        imageActive: "/assets/images/icoAuthRegisterDefaultHover.svg"
    }, {
        name: "COLECIONADOR",
        image: "/assets/images/icoAuthRegisterDefault.svg",
        imageActive: "/assets/images/icoAuthRegisterDefaultHover.svg"
    }
];

export const initialStateForm = {
    postalCode: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: '',
    number: '',
    name: '',
    documentId: '',
    documentIdNumber: '',
    gender: '',
    tel: '',
    birthDate: '',
    email: '',
    password: '',
    passwordConfirm: ''
}

export const initialStateFormAthlete = {
    postalCode: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: '',
    number: '',
    name: '',
    documentId: '',
    documentIdNumber: '',
    gender: '',
    tel: '',
    birthDate: '',
    email: '',
    password: '',
    passwordConfirm: '',
    activity: '',
    retired: '',
    working: ''
}

export const initialStateFormAthleteStep3 = {
    postalCode: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: '',
    number: '',
    name: '',
    documentId: '',
    documentIdNumber: '',
    documentCompanyId: '',
    gender: '',
    tel: '',
    birthDate: '',
    email: '',
    password: '',
    passwordConfirm: '',
    activity: '',
    retired: '',
    working: '',
    companyName: '',
    pf: ['on'],
    pj: [],
    legalGuardian: {
        email: '',
        name: '',
        phone: '',
        documentId: ''
    }
}

export const initialStateFormFederationStep3 = {
    postalCode: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: '',
    number: '',
    name: '',
    documentId: '',
    documentIdNumber: '',
    gender: '',
    tel: '',
    birthDate: '',
    email: '',
    password: '',
    passwordConfirm: '',
    activity: '',
    retired: '',
    working: '',
    pf: ['on'],
    pj: [],
    legalGuardian: {
        email: '',
        name: '',
        phone: '',
        documentId: ''
    }
}


export const items = [
    {
        id: 1,
        name: 'Escolha seu clube aqui'
    },
    {
        id: 2,
        name: 'Athletico Paranaense'
    },
    {
        id: 3,
        name: 'Atlético Goianiense'
    },
    {
        id: 4,
        name: 'Atlético Mineiro'
    }, {
        id: 5,
        name: 'Avaí'
    }, {
        id: 6,
        name: 'Botafogo'
    }, {
        id: 7,
        name: 'Ceará'
    }, {
        id: 8,
        name: 'Chapecoense'
    }, {
        id: 9,
        name: 'Corinthians'
    }, {
        id: 10,
        name: 'Coritiba'
    }, {
        id: 11,
        name: 'Cuiabá'
    }, {
        id: 12,
        name: 'Fortaleza'
    }, {
        id: 13,
        name: 'Flamengo'
    }, {
        id: 14,
        name: 'Fluminense'
    }, {
        id: 15,
        name: 'Goiás'
    }, {
        id: 16,
        name: 'Internacional'
    }, {
        id: 17,
        name: 'Juventude'
    }, {
        id: 18,
        name: 'Palmeiras'
    }, {
        id: 19,
        name: 'Red Bull Bragantino'
    }, {
        id: 20,
        name: 'Santos'
    }, {
        id: 21,
        name: 'São Paulo'
    }, {
        id: 22,
        name: 'Sport'
    }, {
        id: 23,
        name: 'Vasco da Gama'
    },
]

export const gender = [
    {
        id: 0,
        name: 'Qual o seu gênero? *'
    }, {
        id: 1,
        name: 'Masculino'
    }, {
        id: 2,
        name: 'Feminino'
    }, {
        id: 3,
        name: 'Outro'
    },
];

export const modalidades = [
    {
        id: 0,
        name: 'Escolha sua modalidade aqui...'
    },
    {
        id: 1,
        name: 'Futebol'
    },
    {
        id: 2,
        name: 'Futebol de salão'
    },
    {
        id: 3,
        name: 'Futebol society'
    }, {
        id: 4,
        name: 'Fut-7'
    }, {
        id: 5,
        name: 'Futebol de rua'
    },


];


export const cryptoItems = [
    {
        id: 0,
        name: 'Possui carteira Crypto?'
    }, {
        id: 1,
        name: 'Sim'
    }, {
        id: 2,
        name: 'Não'
    },
]


export const typesCustomerRegistration = [
    {
        name: "INVESTIDOR",
        image: "/assets/images/icoAuthRegisterInvestor.svg",
        imageActive: "/assets/images/icoAuthRegisterInvestorHover.svg",
    },
    {
        name: "TORCEDOR",
        image: "/assets/images/icoAuthRegisterDefault.svg",
        imageActive: "/assets/images/icoAuthRegisterDefaultHover.svg",
    },
    {
        name: "COLECIONADOR",
        image: "/assets/images/icoAuthRegisterDefault.svg",
        imageActive: "/assets/images/icoAuthRegisterDefaultHover.svg",
    }
];

export const initialStateCustomerForm = {
    postalCode: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: '',
    number: '',
    name: '',
    documentId: '',
    documentIdNumber: '',
    gender: '',
    tel: '',
    birthDate: '',
    email: '',
    password: '',
    passwordConfirm: '',
}