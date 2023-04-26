import Image from "next/image";
import Header from "../../components/header";
import Nav from "../../components/nav";



const SignIn = () => {
    return <>
        <div>
            <Header title="BEM VINDO!" description="É necessário logar-se ou registrar-se para ter acesso à todas as funcionalidades do Portal CHRONUS Sports." />
            <Nav isRegistration={false} />
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div className="mt-8">
                    <div className="mb-6">
                        <form action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" placeholder="E-mail" required className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] rounded-2xl outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740]" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="password" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                    Senha
                                </label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" placeholder="Senha" autoComplete="current-password" required className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] rounded-2xl outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740]" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between  mt-1 mb-0">
                                <div className="flex items-center"></div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-[#A3A3A3] hover:text-indigo-500 text-sm leading-5 text-right text-neutral-400;">
                                        Esqueci minha senha
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button type="submit"
                                    style={
                                        { background: "linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)" }
                                    }
                                    className="h-14 rounded-2xl text-[#EEEEEE] not-italic font-bold text-base w-full">
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div className="relative mt-6">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-[#A3A3A3]" />
                            </div>
                            <div className="relative flex justify-center text-sm bg-[#ffffff00]">
                                <span className="bg-[#0e102d] px-2 text-[#747474]">continuar com</span>
                            </div>
                        </div>
                        <div>
                            <div className="mt-2 grid grid-cols-3 gap-3 py-6">
                                <div>
                                    <a href="#" className="inline-flex w-full justify-center">
                                        <span className="sr-only">Sign in with Facebook</span>
                                        <Image src="/assets/images/icoAuthSsoFacebook.svg" alt=""
                                            width={90}
                                            height={72} />
                                    </a>
                                </div>
                                <div>
                                    <a href="#" className="inline-flex w-full justify-center">
                                        <span className="sr-only">Sign in with Instagram</span>
                                        <a href="#" className="inline-flex w-full justify-center">
                                            <span className="sr-only">Sign in with Instagram</span>
                                            <Image src="/assets/images/icoAuthSsoInstagram.svg" alt=""
                                                width={90}
                                                height={72} />

                                        </a>
                                    </a>
                                </div>
                                <div>
                                    <a href="#" className="inline-flex w-full justify-center">
                                        <span className="sr-only">Sign in with Google</span>
                                        <Image src="/assets/images/icoAuthSsoGoogle.svg" alt=""
                                            width={90}
                                            height={72} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignIn;
