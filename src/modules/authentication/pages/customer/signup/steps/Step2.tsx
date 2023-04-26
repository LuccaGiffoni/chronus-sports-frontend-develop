import Select from "@/components/form/select";
import Header from "@/modules/authentication/components/header";
import Nav from "@/modules/authentication/components/nav";
import { useFormik } from 'formik';
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { customerRegisterValidation } from "@/validations";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import Link from "next/link";
import { useEffect, useState } from "react";
import { searchCEP } from "@/utils/searchCep";
import { AuthService } from "@/services/auth";
import { CustomerUser } from "@/types/user";
import PasswordCheck from "@/components/form/PassCheck";
import { cryptoItems, gender, initialStateCustomerForm, states } from "@/constants/registration";
import { fisrtName, lastName } from "@/utils/name";
import InputMask from 'react-input-mask';
import { phoneFormat } from "@/utils/fields";
import { Toast } from "@/utils/toast";

import { LoadingIndicator } from "@/components/LoadingIndicator";



const Step2 = ({ data }: { data: any }) => {

    const [selectedGender, setSelectedGender] = useState<any>();
    const [selectedCrypto, setSelectedCrypto] = useState<any>();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [form, setForm] = useState(initialStateCustomerForm);
    async function handleCEPSearch(cep: string) {
        setForm(prev => ({
            ...prev,

            address: "",
            neighborhood: "",
            city: "",
            state: ""
        }));
        try {
            const data = await searchCEP(cep);
            setForm(prev => ({
                ...prev,
                postalCode: data.cep,
                address: data.street,
                neighborhood: data.neighborhood,
                city: data.city,
                state: data.state
            }));

            setShowAddress(true)
        } catch (error: any) {
            console.error(error.message);
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                className: ''
            });

        }
    }


    const handleShowErros = () => {
        const { errors } = formik;
        if (!errors) return;

        for (const [key, value] of Object.entries(errors)) {
            Toast.error(value)
        }
    }

    const handleSubmit = async (values: any) => {
        if (loading) return;
        setLoading(true)
        try {
            await AuthService.signup.customer(payload(values));
            Toast.success('Usuário cadastrado com sucesso.');
            await data.handleNext()
        } catch (error: any) {
            Toast.error(error.message)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    const payload = (data: any): CustomerUser => {
        return {
            email: data.email,
            password: data.password,
            firstName: fisrtName(data.name),
            lastName: lastName(data.name),
            phone: phoneFormat(data.tel),
            document: data.documentId.replace(/\D/g, ""),
            gender: selectedGender?.name || "",
            hasCryptoWallet: selectedCrypto.id === 1 ? true : false,
            address: {
                zipCode: data.postalCode,
                street: data.address,
                number: data.number,
                complement: data.complement || null,
                neighborhood: data.neighborhood,
                city: data.city,
                state: data.state,
                country: 'BR'
            },
            birthday: data.birthDate,
            cryptoWallet: null
        };
    }



    const formik = useFormik({
        initialValues: { ...form },
        enableReinitialize: true,
        validateOnChange: false,
        validationSchema: customerRegisterValidation,
        validateOnBlur: true,
        onSubmit: handleSubmit,
    });


    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            ...formik.values
        }))
    }, [formik.values])



    const handleChange = (value: string) => {
        data?.setRegistrationData((prev: any) => ({ ...prev, registerType: value }));
    }


    const stateOptions = states.map((state: string) => {
        return <option key={state} value={state} />
    });




    return <>
        <div>
            <div className="sm:max-w-[430px] m-auto">
                <Header title="REGISTRAR" description="Verifique qual perfil é o seu e realize o cadastro para ter acesso a todas as funções e benefícios do CHRONUS Sports" />
                <Nav isRegistration={true} />
            </div>

            <div className="mx-auto w-full">

                <div className="mx-auto w-full relative">
                    <div className="mt-8">
                        <div className="mb-6">

                            <form onSubmit={formik.handleSubmit} className="text-white">

                                { }
                                <div>


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
                                                required
                                                autoComplete="name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                                className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.name ? ' border-[#CF2D2D]' : ''}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full pb-[24px]">
                                        <Select items={gender} key="gender" title="" data={{ formik, selected: selectedGender, setSelected: setSelectedGender }} />
                                    </div>

                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="documentId" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                                CPF ou DNI *
                                            </label>
                                            <div>
                                                <InputMask
                                                    type="text"
                                                    name="documentId"
                                                    id="documentId"
                                                    mask={formik.values.documentId.length === 11 ? '999.999.999-99' : ''}
                                                    placeholder="CPF ou DNI *"
                                                    autoComplete="documentId"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.documentId}
                                                    className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.documentId ? ' border-[#CF2D2D]' : ''}`} />
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
                                                    id="documentIdNumber"
                                                    placeholder="RG"
                                                    autoComplete="documentIdNumber"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.documentIdNumber}
                                                    className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.documentIdNumber ? ' border-[#CF2D2D]' : ''}`} />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="birthDate" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                                Data Nasc. 00/00/0000
                                            </label>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="birthDate"
                                                    id="birthDate"
                                                    placeholder="Data Nasc. 00/00/0000"
                                                    autoComplete="data de nascimento"
                                                    onFocus={({ target }) => { console.log(target.type = "date") }}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.birthDate}
                                                    className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.birthDate ? ' border-[#CF2D2D]' : ''}`} />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="tel" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                                Telefone
                                            </label>
                                            <div>
                                                <InputMask mask="(099) 9 9999 9999"
                                                    type="tel"
                                                    name="tel"
                                                    id="tel"
                                                    placeholder="Telefone"
                                                    autoComplete="tel"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.tel}
                                                    className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.tel ? ' border-[#CF2D2D]' : ''}`} />
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
                                                autoComplete="off"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                className={`block w-full pl-10 text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.email ? ' border-[#CF2D2D]' : ''}`}


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
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    id="password"
                                                    autoComplete="off"
                                                    placeholder="Senha*"

                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password}
                                                    className={`block w-full pl-10 text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.password ? ' border-[#CF2D2D]' : ''}`}

                                                />

                                                <div className="absolute left-0 flex items-center pl-4 right-0 pr-3 left-[unset] right-0 top-3.5" onClick={() => setShowPassword(!showPassword)}>
                                                    {!showPassword ? <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> : <EyeSlashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}

                                                </div>
                                            </div>



                                            <PasswordCheck data={{ errors: formik.errors, password: formik.values.password }} />
                                        </div>

                                        <div className="sm:col-span-3 relative">
                                            <label htmlFor="passwordConfirm" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                                Confirmar senha
                                            </label>
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <div>
                                                <input
                                                    type={showPasswordConfirm ? "text" : "password"}
                                                    name="passwordConfirm"
                                                    id="passwordConfirm"
                                                    placeholder="Confirmar senha *"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.passwordConfirm}
                                                    className={`block w-full text-[#A3A3A3] pl-10  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.passwordConfirm ? ' border-[#CF2D2D]' : ''}`}
                                                />

                                                <div className="absolute left-0 flex items-center pl-4 right-0 pr-3 left-[unset] right-0 top-3.5" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                                                    {!showPasswordConfirm ? <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> : <EyeSlashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="col-span-full pb-[24px]">
                                        <Select items={cryptoItems} key="crypto" title="" data={{ formik, selected: selectedCrypto, setSelected: setSelectedCrypto }} />
                                    </div>
                                </div>


                                <motion.div
                                    layout

                                    className="parent"

                                >
                                    <div className="child" >


                                        <h2 className="not-italic font-normal text-base leading-[150%] text-[#EEEEEE] pb-7">Endereço</h2>

                                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px]">
                                            <div className="sm:col-span-3">
                                                <label htmlFor="postalCode" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                                    CEP
                                                </label>
                                                <div>
                                                    <InputMask
                                                        type="text"
                                                        name="postalCode"
                                                        placeholder="CEP"
                                                        id="postalCode"
                                                        required
                                                        mask="99999-999"
                                                        autoComplete="postalCode"
                                                        onChange={formik.handleChange}
                                                        onBlur={(event: any) => { formik.handleBlur(event), handleCEPSearch(formik.values.postalCode) }}
                                                        value={formik.values.postalCode}
                                                        className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.postalCode ? ' border-[#CF2D2D]' : ''}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${showAddress ? '' : 'hidden'}`}>
                                            <>
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
                                                                autoComplete="address"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.address}
                                                                className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.address ? ' border-[#CF2D2D]' : ''}`} />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="neighborhood" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                                            Bairro *
                                                        </label>
                                                        <div>
                                                            <input
                                                                type="text"
                                                                name="neighborhood"
                                                                id="neighborhood"
                                                                placeholder="Bairro *"
                                                                autoComplete="neighborhood"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.neighborhood}
                                                                className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.neighborhood ? ' border-[#CF2D2D]' : ''}`} />
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
                                                                placeholder="Número *"
                                                                autoComplete="Número"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.number}
                                                                className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.number ? ' border-[#CF2D2D]' : ''}`} />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="complement" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                                            Complemento *
                                                        </label>
                                                        <div>
                                                            <input
                                                                type="complement"
                                                                name="complement"
                                                                id="complement"
                                                                placeholder="Complemento *"
                                                                autoComplete="complement"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.complement}
                                                                className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.complement ? ' border-[#CF2D2D]' : ''}`} />
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
                                                                placeholder="Cidade *"
                                                                autoComplete="Cidade"

                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                value={formik.values.city}
                                                                className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.city ? ' border-[#CF2D2D]' : ''}`} />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="state" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                                            Estado *
                                                        </label>
                                                        <div>
                                                            <input
                                                                type="text"
                                                                name="state"
                                                                id="state"
                                                                placeholder="Estado *"
                                                                autoComplete="state"
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                                list="states"
                                                                value={formik.values.state}
                                                                className={`block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid ${formik.errors.state ? ' border-[#CF2D2D]' : ''}`} />

                                                            <datalist id="states">{stateOptions}</datalist>
                                                        </div>
                                                    </div>
                                                </div></>
                                        </div>

                                    </div>


                                </motion.div>

                                <fieldset>
                                    <legend className="sr-only">Notifications</legend>
                                    <div className="space-y-5">
                                        <div className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="terms"
                                                    aria-describedby="terms-description"
                                                    name="terms"
                                                    type="checkbox"
                                                    required
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
                                                    aria-describedby="terms-description"
                                                    name="terms"
                                                    type="checkbox"
                                                    required
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
                                    <button type="submit" onClick={handleShowErros}
                                        style={
                                            { background: "linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)" }
                                        }
                                        className="h-14 rounded-2xl text-[#EEEEEE] not-italic font-bold text-base w-full">
                                        {loading ? <LoadingIndicator /> : 'CADASTRAR'}


                                    </button>
                                </div>
                            </form>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Step2;
