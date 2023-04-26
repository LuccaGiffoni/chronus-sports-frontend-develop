import Image from "next/image";
import Select from "@/components/form/select";
import { Suspense } from "react";
import { InformationCircleIcon, EnvelopeIcon, EyeIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import Link from "next/link";
import Nav from "../../components/nav";
import Header from "../../components/header";

const Registration = () => {

    const items = [
        { id: 1, name: 'Escolha seu clube aqui' },
        { id: 2, name: 'Athletico Paranaense' },
        { id: 3, name: 'Atlético Goianiense' },
        { id: 4, name: 'Atlético Mineiro' },
        { id: 5, name: 'Avaí' },
        { id: 6, name: 'Botafogo' },
        { id: 7, name: 'Ceará' },
        { id: 8, name: 'Chapecoense' },
        { id: 9, name: 'Corinthians' },
        { id: 10, name: 'Coritiba' },
        { id: 11, name: 'Cuiabá' },
        { id: 12, name: 'Fortaleza' },
        { id: 13, name: 'Flamengo' },
        { id: 14, name: 'Fluminense' },
        { id: 15, name: 'Goiás' },
        { id: 16, name: 'Internacional' },
        { id: 17, name: 'Juventude' },
        { id: 18, name: 'Palmeiras' },
        { id: 19, name: 'Red Bull Bragantino' },
        { id: 20, name: 'Santos' },
        { id: 21, name: 'São Paulo' },
        { id: 22, name: 'Sport' },
        { id: 23, name: 'Vasco da Gama' },
    ]


    const cripto = [
        { id: 0, name: 'Possui carteira Crypto?' },
        { id: 1, name: 'Sim' },
        { id: 2, name: 'Não' },
    ]

    return <>
        <Suspense fallback={<p>Loading...</p>}>

            <div>
                <Header title="REGISTRAR NOVO TORCEDOR" description="Fique atento as dados que serão cadastrados, eles serão utilizados para gerar o seu contrato com a Plataforma CHRONUS Sports." />
                <Nav isRegistration={true} />
                <div className="mx-auto w-full relative">
                    <div className="mt-8">
                        <div className="mb-6">
                            <form action="#" method="POST">


                                <h2 className="not-italic font-normal text-base leading-[150%] text-[#EEEEEE] pb-7">Informações gerais</h2>


                                <div className="col-span-full pb-[24px]">
                                    <label htmlFor="street-address" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                        Nome Completo
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Nome Completo"
                                            id="name"
                                            autoComplete="name"
                                            className="block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="documentId" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            CPF, DNI ou Passaporte
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="documentId"
                                                id="documentId"
                                                placeholder="CPF, DNI ou Passaporte"
                                                autoComplete="given-name"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="documentIdNumber" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            RG
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="documentIdNumber"
                                                id="documentId"
                                                placeholder="RG"
                                                autoComplete="given-name"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full pb-[24px]">
                                    <Select items={items} title="" />
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="birthDate" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            Data Nasc. 00/00/0000
                                        </label>
                                        <div>
                                            <input
                                                type="date"
                                                name="birthDate"
                                                id="birthDate"
                                                placeholder="Data Nasc. 00/00/0000"
                                                autoComplete="data de nascimento"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="phone" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            RG
                                        </label>
                                        <div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                placeholder="Telefone"
                                                autoComplete="tel"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full pb-[24px]">
                                    <label htmlFor="email" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>

                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            className="pl-10 block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x"
                                            placeholder="E-mail *"
                                        />
                                    </div>

                                </div>





                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">
                                    <div className="sm:col-span-3 relative">
                                        <label htmlFor="password" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            Senha *
                                        </label>

                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="Senha*"
                                                autoComplete="data de nascimento"
                                                className="text-[#A3A3A3] pl-10 block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />

                                            <div className="pointer-events-none absolute left-0 flex items-center pl-4 right-0 pr-3 left-[unset] right-0 top-3.5">
                                                <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                        </div>


                                    </div>

                                    <div className="sm:col-span-3 relative">
                                        <label htmlFor="phone" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            Confirmar senha
                                        </label>
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <input
                                                type="password"
                                                name="passwordConfirm"
                                                id="passwordConfirm"
                                                placeholder="Confirmar senha *"
                                                autoComplete="tel"
                                                className="text-[#A3A3A3] pl-10  block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />

                                            <div className="pointer-events-none absolute left-0 flex items-center pl-4 right-0 pr-3 left-[unset] right-0 top-3.5">
                                                <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="col-span-full pb-[24px] relative ">
                                    <Select items={cripto} title="" />

                                </div>




                                <h2 className="not-italic font-normal text-base leading-[150%] text-[#EEEEEE] pb-7">Endereço</h2>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="postalCode" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            CEP
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="postalCode"
                                                id="postalCode"
                                                placeholder="CEP"
                                                autoComplete="given-name"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="address" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            Endereço
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                placeholder="Endereço"
                                                autoComplete="given-name"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="neighborhood" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            Bairro
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="neighborhood"
                                                id="neighborhood"
                                                placeholder="Bairro"
                                                autoComplete="neighborhood"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">


                                    <div className="sm:col-span-3">
                                        <label htmlFor="number" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            Número
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="number"
                                                id="number"
                                                placeholder="Número"
                                                autoComplete="number"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="complement" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            Complemento
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="complement"
                                                id="complement"
                                                placeholder="Complemento"
                                                autoComplete="complemento"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">


                                    <div className="sm:col-span-3">
                                        <label htmlFor="city" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            Cidade
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                placeholder="Cidade"
                                                autoComplete="city"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="state" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                            Estado
                                        </label>
                                        <div>
                                            <input
                                                type="text"
                                                name="state"
                                                id="state"
                                                placeholder="Estado"
                                                autoComplete="state"
                                                className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740] rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>









                                <fieldset>
                                    <legend className="sr-only">Notifications</legend>
                                    <div className="space-y-5">
                                        <div className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="terms"
                                                    aria-describedby="comments-description"
                                                    name="terms"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm leading-6">
                                                <label htmlFor="terms" className="not-italic font-normal text-base leading-[150%] text-neutral-400">
                                                    Aceito as Políticas da Página
                                                </label>{' '}
                                                <span id="terms-description" className="text-gray-500">
                                                    <span className="sr-only">Aceito as Políticas da Página</span>  <Link href="/" className="text-[#00E4FF] font-normal text-xs underline leading-5">Acesse a Política de Privacidade.</Link>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="terms"
                                                    aria-describedby="comments-description"
                                                    name="terms"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm leading-6">
                                                <label htmlFor="terms" className="not-italic font-normal text-base leading-[150%] text-neutral-400">
                                                    Aceito os Termos de Uso
                                                </label>{' '}
                                                <span id="terms-description" className="text-gray-500">
                                                    <span className="sr-only">Aceito os Termos de Uso</span>  <Link href="/" className="text-[#00E4FF] font-normal text-xs underline leading-5">Acesse os Termos de uso.</Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="mt-[49px] mb-[213px]">
                                    <button type="submit"
                                        style={
                                            { background: "linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)" }
                                        }
                                        className="h-14 rounded-2xl text-[#EEEEEE] not-italic font-bold text-base w-full">
                                        CADASTRAR
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>

    </>
}

export default Registration;
