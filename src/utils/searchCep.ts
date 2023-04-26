export async function searchCEP(cep : string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
        throw new Error('CEP não encontrado');
    }

    return {
        cep: data.cep,
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf
    };
}
