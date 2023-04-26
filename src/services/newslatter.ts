import { Toast } from '@/utils/toast';

async function newsletter(data: {email: string}, path: string): Promise<any> {
    try {
        const response = await fetch("https://api.easysports.click" + path, {
            method: 'POST',
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
            Toast.error('Desculpe, ocorreu um erro interno no servidor e a ssolicitação não pôde ser concluída. Tente novamente.');
        }

        if (response.status === 404) {
            Toast.error('Desculpe, ocorreu um erro a solicitação não pôde ser concluída. Tente novamente.');
        }


        if (response.ok) {
            Toast.success('Você está pronto para receber nossas newsletters!');
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



export const newsletterService = async (data: {email: string}) => await newsletter(data, '/newsletter');
