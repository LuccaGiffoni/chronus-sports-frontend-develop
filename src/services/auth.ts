import { AthleteUser, Auth, ClubUser, CustomerUser, NewPassword, RecoveryPassword } from '@/types/user';
import { Toast } from '@/utils/toast';

async function signup(data: CustomerUser | AthleteUser | ClubUser, path: string): Promise<any> {
    const response = await fetch("https://api.easysports.click" + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.status !== 200) {
        const json = await response.json();
        if (json?.erros) {

            if (json.erros[0].includes('|')) {
                throw new Error(json.erros[0].split('|')[1]);
            } else {
                throw new Error(json.erros[0]);
            }


        }
        throw new Error('Erro ao cadastrar usuário.');
    }

    if (response.ok) {
        return response.text();
    }

}

async function signin(data: Auth | RecoveryPassword | NewPassword, path: string, method?: string): Promise<any> {
    try {
        const response = await fetch("https://chronussportswebapi-dev.eba-ssacuemn.us-east-1.elasticbeanstalk.com" + path, {
            method: method || 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 400) {
            const { erros } = await response.json();
            if (erros) {
                throw new Error(erros[0].split('|')[1]);
            }
        }
        if (response.status === 500) {
            Toast.error('Desculpe, ocorreu um erro interno no servidor e a solicitação não pôde ser concluída. Tente novamente.');
        }

        if (response.status === 404) {
            Toast.error('Desculpe, ocorreu um erro a solicitação não pôde ser concluída. Tente novamente.');
        }


        if (response.ok) {
            const contentType = response.headers.get('content-type');
            if (contentType?.includes('application/json')) {
                return response.json();
            } else if (contentType?.includes('text/plain') || contentType?.includes('text/html')) {
                return response.text();
            } else {
                throw new Error(`Unsupported content type: ${contentType}`);
            }
        }
    } catch (error: any) {
        Toast.error(error.message);
        console.error('Erro ao fazer login:', error);
    }
}

async function newPassword(data: Auth | RecoveryPassword | NewPassword, path: string, method?: string): Promise<any> {
    try {
        const response = await fetch("https://chronussportswebapi-dev.eba-ssacuemn.us-east-1.elasticbeanstalk.com" + path, {
            method: method || 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 400) {
            const { erros } = await response.json();
            if (erros) {
                throw new Error(erros[0].split('|')[1]);
            }
        }
        if (response.status === 500) {
            Toast.error('Desculpe, ocorreu um erro interno no servidor e a solicitação não pôde ser concluída. Tente novamente.');
            throw new Error('Desculpe, ocorreu um erro interno no servidor e a solicitação não pôde ser concluída. Tente novamente.');
        }

        if (response.status === 404) {
            Toast.error('Desculpe, ocorreu um erro a solicitação. Tente novamente.');
            throw new Error(`Desculpe, ocorreu um erro a solicitação. Tente novamente.`);
        }


        if (response.ok) {
            const contentType = response.headers.get('content-type');
            if (contentType?.includes('application/json')) {
                return response.json();
            } else if (contentType?.includes('text/plain') || contentType?.includes('text/html')) {
                return response.text();
            } else {
                throw new Error(`Unsupported content type: ${contentType}`);
            }
        } else {
            Toast.error(response.statusText);
        }
    } catch (error: any) {
        Toast.error(error.message);
        console.error('Erro ao fazer login:', error);
    }
}


export const AuthService = {
    signup: {
        customer: async (data: CustomerUser) => await signup(data, '/users/customer'),
        athlete: async (data: AthleteUser) => await signup(data, '/users/athlete'),
        club: async (data: ClubUser) => await signup(data, '/users/club'),
        federation: async (data: ClubUser) => await signup(data, '/users/federation')
    },
    signin: async (data: Auth) => await signin(data, '/auth/signin'),
    recoveryPassword: async (data: RecoveryPassword) => await signin(data, '/users/forgotPassword', 'PATCH'),
    newPassword: async (data: NewPassword, id: string) => await newPassword(data, `/users/recoverPassword/${id}`, 'PATCH'),
};
