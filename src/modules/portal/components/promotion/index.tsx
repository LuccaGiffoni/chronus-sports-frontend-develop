import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

export const Promotion = () => {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl lg:pt-32 flex flex-col mb-8">
                <div className="sm:flex-wrap relative flex-col-reverse  sm:grid sm:justify-between grid-cols-4 lg:gap-5 section-1 lg:grid-cols-12 lg:items-center flex">
                    <span className="w-[219px] h-[468px] bg-[url(/assets/images/packs-elements.png)] flex sm:block absolute left-[-219px] z-auto top-[66px]"></span>

                    <div className={`col-span-2 lg:col-span-6 ${styles.text}`}>
                        <div className="flex flex-col mb-2 Title lg:mt-12">
                            <h2 className={`font-[16px] not-italic font-black font-bold text-base leading-[150%] sm:text-[45px] sm:leading-[100%] items-center tracking-[0.06em] uppercase text-[#EEEEEE] max-w-[570px] block`}>
                                Já imaginou <span className='text-[#00E4FF]'>ganhar viagens</span> e diversos outros prêmios?
                            </h2>
                        </div>
                        <div className="text-sm font-normal text-gray-light lg:mt-6">
                            <p className="text-sm md:text-base not-italic font-normal text-base flex items-center text-gray-200">
                                Uma enorme variedade de experiências atreladas aos NFTs esportivos mais procurados. Compre colecionáveis raros e participe.
                            </p>
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
                            src="/assets/images/pack-banner.webp"
                            width={1920}
                            height={1080}
                            className='max-w-[100%]  2xl:max-w-[130%]'
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
