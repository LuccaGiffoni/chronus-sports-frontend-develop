import Image from "next/image";
import Link from "next/link";


const Hero = () => {
    return <>

        <section className="bg-[#0D0035]" aria-labelledby="Hero-heading">

            <div className="container py-[64px] mx-auto px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl lg:pt-32 flex flex-col mb-8">


                <div className="flex-wrap  relative flex flex-col-reverse grid justify-between grid-cols-4 lg:gap-5 section-1 lg:grid-cols-12 lg:items-center flex">
                    <span className="w-[219px] h-[468px] bg-[url(/assets/images/hero-elements.png)] hidden sm:block absolute left-[-219px] z-auto top-[66px]"></span>


                    <div className={`col-span-2 lg:col-span-6`}>
                        <div className="flex flex-col mb-2 Title lg:mt-12">
                            <h2 className="font-black font-[16px] not-italic font-black font-bold text-base  md:text-[32px] lg:text-[58px] leading-[100%] flex items-center tracking-[0.06em] uppercase text-[#EEEEEE]">
                                COLECIONÁVEIS
                            </h2>
                            <h3 className="not-italic font-[16px] not-italic font-black font-bold text-base  md:text-[32px] font-black lg:text-[45px] leading-[100%] flex items-center tracking-[0.06em] uppercase text-[#00E4FF]">
                                EXCLUSIVOS
                            </h3>
                        </div>
                        <div className="text-sm font-normal text-gray-light lg:mt-6">
                            <p className="text-sm md:text-base not-italic font-normal text-base flex items-center text-gray-200">
                                CHRONUS Sports é a sua chance de possuir, vender e negociar NFTs colecionáveis digitais oficiais dos melhores atletas profissionais do Mundo todo. </p>
                            <div className="flex items-center font-normal mt-9">
                                <button className="h-10 md:h-[56px] text-white gradient-4 md:text-base min-w-[170px] text-gray-light rounded-2xl" style={{ background: "linear-gradient(272.3deg,#4f25cc -.63%,#803eb4 99.75%)" }}>
                                    EXPLORE
                                </button>

                                <Link href="/auth/cadastro" className="flex justify-center items-center h-10 md:h-[56px] text-white 
                                md:text-base min-w-[170px] ml-4 md:ml-[30px] bg-transparent border border-1 border-[#4f25cc] text-gray-light rounded-2xl">
                                    CADASTRE-SE
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`relative col-start-3 mb-8 sm:mb-0 col-end-5 ml-2 lg:col-start-7 lg:col-end-13`}>
                        <Image
                            src="/assets/images/BannerPrincipal.png"
                            width={1920}
                            height={1080}
                            className='max-w-[100%]  2xl:max-w-[130%]'
                            alt=""
                        />
                    </div>
                </div>

            </div>

        </section>
    </>
}

export default Hero;