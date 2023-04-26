import Header from "@/modules/authentication/components/header";
import { Toast } from "@/utils/toast";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


const Step4 = () => {

    return <>
        <div>
            <Header title="CADASTRO REALIZADO COM SUCESSO!" description="Tudo pronto! Agora é só acessar o seu e-mail para confirmar o seu cadastro e ter acesso à todas as funcionalidades do Portal CHRONUS Sports." />

            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div className="flex pt-[18px] pb-16 px-0 mx-auto justify-center">
                    <Image src="/assets/images/icoAuthComplete.svg" height={93} width={93} alt="" />
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

export default Step4;
