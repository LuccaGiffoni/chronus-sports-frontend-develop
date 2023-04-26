import { Address } from "./address";

export interface Auth {
    email: string;
    password: string;
}

export interface RecoveryPassword {
    email: string;
}

export interface NewPassword {
    newPassword: string;
    confirmNewPassword: string;
}

export interface CustomerUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    gender?: string;
    hasCryptoWallet?: boolean,
    document: string;
    address: Address;
    birthday: string;
    cryptoWallet?: any;

}


export interface AthleteUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    document: string;
    address: Address;
    birthday: string;
    cryptoWallet?: any;
    legalGuardian?: {
        email: string;
        name: string;
        phone: string;
        cpf: string;
    }
}

export interface ClubUser {
    email: string;
    companyName?: string;
    stateRegistration?: string;
    hasCryptoWallet: boolean;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    document: string;
    address: Address;
    birthday: string;
    cryptoWallet?: any;
    legalGuardian: {
        email: string;
        name: string;
        phone: string;
        document: string;
        gender: string;
    }
}

export interface FederationUser {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    document: string;
    address: Address;
    birthday: string;
    cryptoWallet?: any;
    legalGuardian: {
        email: string;
        name: string;
        phone: string;
        document: string;
        gender: string;
    }
}

export interface ForgotPassword {
    email: string;
}

export interface NewPassword {
    newPassword: string;
    confirmNewPassword: string;
}

export interface SignIn {
    newPassword: string;
    confirmNewPassword: string;
}
