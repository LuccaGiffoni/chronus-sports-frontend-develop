import * as Yup from 'yup';


export function cpfOrDniValidation(value: any) {
    if (!value) {
        return true; // Valor vazio não é obrigatório
    }
    // Remove qualquer caractere não numérico
    const cleanValue = value.replace(/[^\d]/g, '');
    // Verifica se o valor é um CPF válido
    if (cleanValue.length === 11) {
        let sum = 0;
        let rest;
        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cleanValue.substring(i - 1, i)) * (11 - i);
        }
        rest = (sum * 10) % 11;
        if (rest === 10 || rest === 11) {
            rest = 0;
        }
        if (rest !== parseInt(cleanValue.substring(9, 10))) {
            return false;
        }
        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cleanValue.substring(i - 1, i)) * (12 - i);
        }
        rest = (sum * 10) % 11;
        if (rest === 10 || rest === 11) {
            rest = 0;
        }
        if (rest !== parseInt(cleanValue.substring(10, 11))) {
            return false;
        }
        return true;
    }
    // Verifica se o valor é um DNI válido
    if (cleanValue.length === 8) {
        return true; // Adicione aqui a validação específica do DNI para o país em questão
    }
    return false;
}

export function fullNameValidation(value: any) {
    if (!value) {
        return true;
    }

    const lastName = value.trim().split(' ');
    return lastName.length >= 2;
}

function cnpjValidation(cnpj: string) {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    return cnpjRegex.test(cnpj);
}

export const customerRegisterValidation = Yup.object({
    name: Yup.string().min(2, 'Must be 2 characters or then').test('fullName', 'O campo nome precisa ter um nome e um sobrenome', fullNameValidation).required('Nome é obrigatório'),
    documentId: Yup.string().test('cpfOrDni', 'CPF ou DNI inválido', cpfOrDniValidation),
    documentIdNumber: Yup.string().min(1, 'Must be 1 characters or then'),
    tel: Yup.string().required('Telefone/Celular é obrigatório'),
    password: Yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres.').max(20, 'A senha deve ter no máximo 20 caracteres.').matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.').test('caractere-especial', 'A senha deve conter pelo menos um caractere especial (#, !, $, &).', (value: string | undefined) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(value ?? '');
    }).required('A senha é obrigatória.'),
    passwordConfirm: Yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres.').max(20, 'A senha deve ter no máximo 20 caracteres.').matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.').matches(/[a-z]/, 'A senha deve conter pelo menos uma letra maiúscula.').test('caractere-especial', 'A senha deve conter pelo menos um caractere especial (#, !, $, &).', (value: string | undefined) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(value ?? '');
    }).required('A senha é obrigatória.').oneOf(
        [Yup.ref('password'), null] as any,
        'As senhas devem ser iguais'
    ),
    postalCode: Yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido').required('CEP é obrigatório'),
    address: Yup.string().required('Endereço é obrigatório'),
    neighborhood: Yup.string().required('Bairro é obrigatório'),
    city: Yup.string().required('Cidade é obrigatório'),
    state: Yup.string().required('Estado é obrigatório'),
    number: Yup.string().required('Número é obrigatório'),
    email: Yup.string().email('Endereço de e-mail inválido').required('Endereço de e-mail é obrigatório')

})

export const customerRegisterAtlhetePJValidation = Yup.object({
    legalGuardian: Yup.object().shape({
        name: Yup.string().min(2, 'Must be 2 characters or then').test('fullName', 'O campo nome precisa ter um nome e um sobrenome', fullNameValidation).required('Nome é obrigatório'),
        documentId: Yup.string().test('cpfOrDni', 'CPF ou DNI inválido', cpfOrDniValidation).required('CPF ou DNI é obrigatório'),
        email: Yup.string().email('Endereço de e-mail inválido').required('Endereço de e-mail é obrigatório')
    }),
    companyName: Yup.string().required('Razão social é obrigatório'),
    documentId: Yup.string().test('cpfOrDni', 'CPF ou DNI inválido', cpfOrDniValidation),
    documentCompanyId: Yup.string().required('CNPJ é obrigatório').test('cnpj', 'CNPJ inválido', cnpjValidation),
    documentIdNumber: Yup.string().min(1, 'Must be 1 characters or then'),
    tel: Yup.string().required('Telefone/Celular é obrigatório'),
    password: Yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres.').max(20, 'A senha deve ter no máximo 20 caracteres.').matches(/[0-9]/, 'A senha deve conter pelo menos um número.').matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.').test('caractere-especial', 'A senha deve conter pelo menos um caractere especial (#, !, $, &).', (value: string | undefined) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(value ?? '');
    }).required('A senha é obrigatória.'),
    passwordConfirm: Yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres.').max(20, 'A senha deve ter no máximo 20 caracteres.').matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.').matches(/[a-z]/, 'A senha deve conter pelo menos uma letra maiúscula.').test('caractere-especial', 'A senha deve conter pelo menos um caractere especial (#, !, $, &).', (value: string | undefined) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(value ?? '');
    }).required('A senha é obrigatória.').oneOf(
        [Yup.ref('password'), null] as any,
        'As senhas devem ser iguais'
    ),
    postalCode: Yup.string().matches(/^\d{5}-\d{3}$/, 'CEP inválido').required('CEP é obrigatório'),
    address: Yup.string().required('Endereço é obrigatório'),
    neighborhood: Yup.string().required('Bairro é obrigatório'),
    city: Yup.string().required('Cidade é obrigatório'),
    state: Yup.string().required('Estado é obrigatório'),
    number: Yup.string().required('Número é obrigatório'),
    email: Yup.string().email('Endereço de e-mail inválido').required('Endereço de e-mail é obrigatório')

})


export const signinValidation = Yup.object({
    email: Yup.string().email('Endereço de e-mail inválido').required('Endereço de e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória.'),
})

export const recoveryPasswordValidation = Yup.object({
    email: Yup.string().email('Endereço de e-mail inválido').required('Endereço de e-mail é obrigatório'),
})


export const newPasswordValidation = Yup.object({
    newPassword: Yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres.').max(20, 'A senha deve ter no máximo 20 caracteres.').matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.').test('caractere-especial', 'A senha deve conter pelo menos um caractere especial (#, !, $, &).', (value: string | undefined) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(value ?? '');
    }).required('A senha é obrigatória...'),
    confirmNewPassword: Yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres.').max(20, 'A senha deve ter no máximo 20 caracteres.').matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.').matches(/[a-z]/, 'A senha deve conter pelo menos uma letra maiúscula.').test('caractere-especial', 'A senha deve conter pelo menos um caractere especial (#, !, $, &).', (value: string | undefined) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(value ?? '');
    }).required('A senha é obrigatória........').oneOf(
        [Yup.ref('newPassword'), null] as any,
        'As senhas devem ser iguais'
    ),
})


export const newsletterValidation = Yup.object({
    email: Yup.string().email('Endereço de e-mail inválido').required('Endereço de e-mail é obrigatório')

})