import Alert from "@/components/Alert";
import Select from "@/components/form/select";
import { typePeriod, typesOfPeriod } from "@/constants/registration";
import { Header, Nav, RegisterType } from "@/modules/authentication/components";
import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const Step1 = ({ data }: { data: any }) => {
    const { period, setPeriod } = data;
    const [isOpenAlert, setIsOpenAlert] = useState(false);

    const handleChange = (value: string) => {
        data?.setRegistrationData((prev: any) => ({ ...prev, registerType: value === prev.registerType ? '' : value, period: period }));
        setPeriod()
    }

    const handleNext = () => {
        if (!data.registrationData.registerType) {
            toast.error("Escolha o tipo de Registro.", {
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
            return;
        }
        if (!period && data.registrationData.registerType !== "ATLETA" || period?.id === 0 && data.registrationData.registerType !== "ATLETA") {
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

            return;
        }


        data.handleNext()

    }

    const AlertPeriod = () => {
        return <>
            <Alert isOpen={isOpenAlert} toggle={() => setIsOpenAlert(prev => !prev)}>
                <h2 className="not-italic font-black text-[38px] leading-[116%] flex items-center text-center tracking-[0.06em] uppercase text-white">ATENÇÃO</h2>
                <Image src="/assets/images/icoAlert.svg" height={32} width={32} alt="" className="pt-[13px] pb-[29px]" />
                <p className="not-italic font-normal text-base leading-[150%] flex items-center text-center text-[#C0C0C0]">{period?.id && typePeriod[period.id].message}</p>
            </Alert >
        </>
    }

    useEffect(() => {
        period?.id > 0 && setIsOpenAlert(true)
    }, [period])


    return <>
        <div>
            <div className="max-w-[430px] m-auto lg:m-0">
                <Header title="REGISTRAR" description="Verifique qual perfil é o seu e realize o cadastro para ter acesso a todas as funções e benefícios do CHRONUS Sports" />
                <Nav isRegistration={true} />
            </div>

            <div className="mx-auto w-full max-w-[600px] ">
                <motion.div layout className="parent">
                    <div className="child mt-8">
                        <RegisterType data={{ types: typesOfPeriod, selected: data.registrationData.registerType, handleChange }} />
                    </div>
                </motion.div>
                <motion.div layout className="parent">
                    {data.registrationData.registerType == "FEDERAÇÃO" && <>
                        <div className="child col-span-full pb-[24px] pt-[30px]">
                            <Select items={typePeriod} key="typePeriod" title="Período do contrato" data={{ selected: period, setSelected: setPeriod }} />
                        </div>
                    </>}
                </motion.div>

                <motion.div layout className="parent">
                    {data.registrationData.registerType == "CLUBE" && <>
                        <div className="child col-span-full pb-[24px] pt-[30px]">
                            <Select items={typePeriod} key="typePeriod" title="Período do contrato" data={{ selected: period, setSelected: setPeriod }} />
                        </div>
                    </>}
                </motion.div>


                <div className="flex justify-end w-full max-w-full mt-[70px]  pb-[75px]  m-auto">
                    <button type="button"
                        style={
                            { background: "linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)" }
                        }
                        name="step1"
                        className="h-14 rounded-2xl text-[#EEEEEE] not-italic font-bold text-base w-[200px]"
                        onClick={handleNext}
                    >
                        Próximo
                    </button>
                </div>
            </div>

            <AlertPeriod />
        </div>
    </>
}

export default Step1;
