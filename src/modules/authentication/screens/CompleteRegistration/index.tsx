import Image from "next/image";
import Header from "../../components/header";
import Link from "next/link";


const CompleteRegistration = () => {
    return <>
        <div>
            <Header title="Cadastro realizado com sucesso!" description="Tudo pronto! Agora é só acessar o seu e-mail para confirmar o seu cadastro e ter acesso à todas as funcionalidades do Portal CHRONUS Sports." />

            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div className="flex pt-[18px] pb-16 px-0 mx-auto justify-center">
                    <Image src="/assets/images/icoAuthCompleteRegistration.svg" height={93} width={93} alt="" />
                </div>

                <div className="mt-6">
                    <Link href="/">
                        <button type="submit"
                            style={
                                { background: "linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)" }
                            }
                            className="h-14 rounded-2xl text-[#EEEEEE] not-italic font-bold text-base w-full">
                            Ir para a página principal!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default CompleteRegistration;
