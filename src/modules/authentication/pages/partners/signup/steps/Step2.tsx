import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { customerRegisterValidation } from "@/validations";
import { useEffect, useState } from "react";
import { CustomerUser } from "@/types/user";
import { Header, Nav, RegisterType } from '@/modules/authentication/components';
import { Select } from '@/components/';
import {
    initialStateFormAthlete,
    items,
    modalidades,
    typePeriod,
    typesOfAthlete
} from "@/constants/registration";
import Image from "next/image";
import Alert from "@/components/Alert";
import { fisrtName, lastName } from '@/utils/name';
import { phoneFormat } from '@/utils/fields';


const Step2 = ({ data }: {
    data: any
}) => {

    const { period, setPeriod } = data;
    const [form, setForm] = useState(initialStateFormAthlete);
    const [selectedModality, setSelectedModality] = useState<any>(null);
    const [selectedClub, setSelectedClub] = useState<any>(null);
    const [isOpenAlert, setIsOpenAlert] = useState(false);


    const handleNext = () => {
        if (!data.registrationData.athleteType) {
            toast.error("Qual tipo de atleta.", {
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
        if (!selectedModality || selectedModality.id === modalidades[0].id) {
            toast.error("Escolha sua modalidade.", {
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
        if (!selectedClub || selectedClub.id === items[0].id) {
            toast.error("Escolha seu clube.", {
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
        if (!period || period.id === typePeriod[0].id) {
            toast.error("Escolha o período de contrato.", {
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
        period && selectedClub && selectedModality && data.registrationData.athleteType && data?.setRegistrationData((prev: any) => ({
            ...prev,
            ...form,
        }));
        period && selectedClub && selectedModality && data.registrationData.athleteType && data.handleNext()

    }

    const handleChange = (value: string) => {
        data?.setRegistrationData((prev: any) => ({
            ...prev,
            athleteType: value === prev.athleteType ? '' : value
        }));
    }


    const AlertPeriod = () => {
        return <>
            <Alert isOpen={isOpenAlert}
                toggle={
                    () => setIsOpenAlert(prev => !prev)
                }>
                <h2 className="not-italic font-black text-[38px] leading-[116%] flex items-center text-center tracking-[0.06em] uppercase text-white">ATENÇÃO</h2>
                <Image src="/assets/images/icoAlert.svg"
                    height={32}
                    width={32}
                    alt=""
                    className="pt-[13px] pb-[29px]" />
                <p className="not-italic font-normal text-base leading-[150%] flex items-center text-center text-[#C0C0C0]">
                    {
                        period?.id && typePeriod[period.id].message
                    }</p>
            </Alert>
        </>
    }

    const payload = (data: any): CustomerUser => {
        return {
            email: data.email,
            password: data.password,
            firstName: fisrtName(data.name),
            lastName: lastName(data.name),
            phone: phoneFormat(data.tel),
            document: data.documentId.replace(/\D/g, ""),
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
        initialValues: {
            ...form
        },
        enableReinitialize: true,
        validateOnChange: false,
        validationSchema: customerRegisterValidation,
        validateOnBlur: true,
        onSubmit: async (values) => {
            try {
                //await singup(user);
                data.handleNext()
            } catch (error) { }
        }
    });


    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            ...formik.values
        }))


    }, [formik.values])

    useEffect(() => {
        period?.id > 0 && setIsOpenAlert(true)
    }, [period])


    return <>
        <div>
            <div className="sm:max-w-[430px] m-auto">
                <Header title="REGISTRAR" description="Verifique qual perfil é o seu e realize o cadastro para ter acesso a todas as funções e benefícios do CHRONUS Sports" />
                <Nav isRegistration={true} />
            </div>


            <div className="mx-auto w-full max-w-[600px] ">
                <div className="mt-8">
                    <RegisterType data={
                        {
                            types: typesOfAthlete,
                            selected: data.registrationData.athleteType,
                            handleChange
                        }
                    } />
                    <form onSubmit={
                        formik.handleSubmit
                    }
                        className="mx-auto w-full max-w-[600px]">


                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-[24px] max-w-[300px] mt-[30px] ">
                            <div className="sm:col-span-3 flex">
                                <div className="ml-3 text-sm leading-6 pr-4">
                                    <label htmlFor="working" className="not-italic font-normal text-base leading-[150%] text-neutral-400">
                                        Em atividade
                                    </label>
                                    {' '}
                                    <span id="working-description" className="text-gray-500">
                                        <span className="sr-only">Em atividade</span>
                                    </span>
                                </div>
                                <div className="flex h-6 items-center">
                                    <input id="working" aria-describedby="activy-description" name="working" type="checkbox" required
                                        onChange={
                                            formik.handleChange
                                        }
                                        onBlur={
                                            formik.handleBlur
                                        }
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                </div>
                            </div>

                            <div className="sm:col-span-3 flex">
                                <div className="ml-3 text-sm leading-6 pr-4">
                                    <label htmlFor="retired" className="not-italic font-normal text-base leading-[150%] text-neutral-400">
                                        Aposentado
                                    </label>
                                    {' '}
                                    <span id="retired-description" className="text-gray-500">
                                        <span className="sr-only">Aposentado</span>
                                    </span>
                                </div>

                                <div className="flex h-6 items-center">
                                    <input id="retired" aria-describedby="activy-description" name="retired" type="checkbox" required
                                        onChange={
                                            formik.handleChange
                                        }
                                        onBlur={
                                            formik.handleBlur
                                        }
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto w-full">
                            <div className="col-span-full pb-[24px]">
                                <Select items={modalidades}
                                    key="modalidade"
                                    title="Modalidade"
                                    data={
                                        {
                                            formik,
                                            selected: selectedModality,
                                            setSelected: setSelectedModality
                                        }
                                    } />
                            </div>

                            <div className="col-span-full pb-[24px]">
                                <Select items={items}
                                    key="club"
                                    title="Escolha o clube aqui..."
                                    data={
                                        {
                                            formik,
                                            selected: selectedClub,
                                            setSelected: setSelectedClub
                                        }
                                    } />
                            </div>

                            <div className="col-span-full pb-[24px]">
                                <Select items={typePeriod}
                                    key="period"
                                    title="Período do contrato"
                                    data={
                                        {
                                            formik,
                                            selected: period,
                                            setSelected: setPeriod
                                        }
                                    } />
                            </div>
                        </div>
                    </form>


                    <div className="flex w-full max-w-full mt-[70px]  mb-[213px] m-auto justify-between items-center">

                        <button type="button" name="step1" className="not-italic font-normal text-base leading-[150%] text-white flex"
                            onClick={
                                data?.handleBack
                            }>

                            <svg className="ml-0 mr-2.5 mt-0.5 mb-0" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.99949 9L11 2.38859L9.00026 0.5L-1.01361e-07 9L9.00026 17.5L11 15.6114L3.99949 9Z" fill="#164092" />
                            </svg>


                            Voltar
                        </button>
                        <button type="button"
                            style={
                                { background: "linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)" }
                            }
                            name="step1"
                            className="h-14 rounded-2xl text-[#EEEEEE] not-italic font-bold text-base w-[200px]"
                            onClick={handleNext}>
                            Próximo
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <AlertPeriod />
    </>
}

export default Step2;
