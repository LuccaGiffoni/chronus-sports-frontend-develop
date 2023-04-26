import Select from "@/components/form/select";

import { Suspense } from "react";
import RegisterType from "../../components/registerType";
import Header from "../../components/header";
import Nav from "../../components/nav";
import { typesOfPeriod } from "@/constants/registration";

const types = [
    {
        name: "INVESTIDOR",
        image: "/assets/images/icoAuthRegisterInvestor.svg",
    },
    {
        name: "TORCEDOR",
        image: "/assets/images/icoAuthRegisterDefault.svg",
    },
    {
        name: "COLECIONADOR",
        image: "/assets/images/icoAuthRegisterInvestor.svg",
    }
];

const RegistrationType = () => {
    return <>
        <div>
            <Header title="REGISTRAR" description="Verifique qual perfil é o seu e realize o cadastro para ter acesso a todas as funções e benefícios do CHRONUS Sports" />
            <Nav isRegistration={true} />
            <div className="mx-auto w-full">
                <div className="mt-8">

                </div>

                <div className="mt-8 pb-10">
                    <Suspense fallback={<p>Loading...</p>}>
                        <Select title="Período do contrato" />
                    </Suspense>

                </div>

                <div className="mt-6 justify-end flex">
                    <button type="submit"
                        style={
                            { background: "linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)" }
                        }
                        className="h-14 rounded-2xl text-[#EEEEEE] not-italic font-bold text-base w-[200px]">
                        Próximo
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default RegistrationType;
