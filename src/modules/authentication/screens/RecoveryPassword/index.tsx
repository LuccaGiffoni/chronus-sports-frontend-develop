import Header from "../../components/header";


const RecoveryPassword = () => {
    return <>
        <div className="pt-[65px]">
            <Header title="Recuperar senha" description="Insira o seu email e enviaremos um link para você voltar a acessar a sua conta."/>
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div className="mt-8">
                    <div className="mb-6">
                        <form action="#" method="POST">

                            <div className="pt-[90px]">
                                <label htmlFor="email" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" placeholder="E-mail" required className="block text-[#A3A3A3] max-h-12 px-4 py-3 w-full bg-[#ffffff00] rounded-2xl outline-0 rounded-md border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740]"/>
                                </div>
                            </div>


                            <div className="mt-6">
                                <button type="submit"
                                    style={
                                        {background: "linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)"}
                                    }
                                    className="h-14 rounded-2xl text-[#EEEEEE] not-italic font-bold text-base w-full">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default RecoveryPassword;
