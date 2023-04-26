import Header from "@/modules/authentication/components/header";
import Nav from "@/modules/authentication/components/nav";
import RegisterType from "@/modules/authentication/components/registerType";
import { toast } from 'react-toastify';


const types = [
    {
        name: "INVESTIDOR",
        image: "/assets/images/icoAuthRegisterInvestor.svg",
        imageActive: "/assets/images/icoAuthRegisterInvestorHover.svg",
    },
    {
        name: "TORCEDOR",
        image: "/assets/images/icoAuthRegisterDefault.svg",
        imageActive: "/assets/images/icoAuthRegisterDefaultHover.svg",
    },
    {
        name: "COLECIONADOR",
        image: "/assets/images/icoAuthRegisterDefault.svg",
        imageActive: "/assets/images/icoAuthRegisterDefaultHover.svg",
    }
];

const Step1 = ({ data }: { data: any }) => {

    const handleChange = (value: string) => {
        data?.setRegistrationData((prev: any) => ({ ...prev, registerType: value === prev.registerType ? '' : value }));
    }

    const handleNext = () => {
        if (data.registrationData.registerType) {
            data.handleNext()
        } else {
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
        }
    }


    return <>
        <div>
            <div className="max-w-[430px] m-auto lg:m-0">
                <Header title="REGISTRAR" description="Verifique qual perfil é o seu e realize o cadastro para ter acesso a todas as funções e benefícios do CHRONUS Sports" />
                <Nav isRegistration={true} />
            </div>

            <div className="mx-auto w-full max-w-[600px] ">
                <div className="mt-8">
                    <RegisterType data={{ types, selected: data.registrationData.registerType, handleChange }} />
                </div>

                <div className="flex justify-end w-full max-w-full mt-[75px] m-auto">
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
        </div>
    </>
}

export default Step1;
