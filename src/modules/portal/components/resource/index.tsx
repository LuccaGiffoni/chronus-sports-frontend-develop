import Image from "next/image";

const Resource = () => {

    return <>
        <section className="bg-[#0D0035] relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl lg:pt-32 flex flex-col">
                <h2 className="font-black text-base flex  text-center sm:text-start justify-center sm:justify-start leading-[150%] mb-0 pt-16  sm:pt-0 sm:text-[58px] tracking-[0.06em] uppercase text-[#EEEEEE] sm:mb-[64px]">Recursos</h2>
                <div className="flex  justify-center items-center lg:items-start lg:justify-between flex-row-reverse lg:flex-row flex-wrap flex-col-reverse">
                    <ul className="py-10 sm:py-0 w-full max-w-full lg:max-w-[50%]">
                        <li className="pb-[75px] flex">
                            <Image className="mr-6 sm:mr-14 max-w-[78px] sm:max-w-[100px] " src="/assets/images/artResource1.svg" alt="" width={100} height={123} />

                            <div>
                                <h3 className="not-italic font-black text-[24px] sm:text-[28px] lg:text-[38px] leading-[100%] flex items-center tracking-[0.06em] uppercase text-[#00E4FF]">NFT’S DINÂMICOS</h3>
                                <p className="not-italic font-normal text-base leading-[150%] flex items-center text-[#EEEEEE] lg:max-w-[500px] pt-[18px]">Colecionáveis exclusivos e cheios de recursos e informações. Colecione a história dos seus atleta favoritos.</p>
                            </div>
                        </li>

                        <li className="pb-[75px] flex">
                            <Image className="mr-6 sm:mr-14 max-w-[78px] sm:max-w-[100px] " src="/assets/images/artResource2.svg" alt="" width={100} height={94} />
                            <div>
                                <h3 className="not-italic font-black text-[24px] sm:text-[28px] lg:text-[38px] leading-[100%] flex items-center tracking-[0.06em] uppercase text-[#00E4FF]">SCOUNT COMBINE</h3>
                                <p className="not-italic font-normal text-base leading-[150%] flex items-center text-[#EEEEEE] lg:max-w-[500px] pt-[18px]">Análises de atributos técnicos e táticos disponíveis para Clubes, Atletas e os fãs do Esporte.</p>
                            </div>
                        </li>

                        <li className="pb-[75px] flex">
                            <Image className="mr-6 sm:mr-14 max-w-[78px] sm:max-w-[100px] " src="/assets/images/artResource3.svg" alt="" width={100} height={84} />
                            <div>
                                <h3 className="not-italic font-black text-[24px] sm:text-[28px] lg:text-[38px] leading-[100%] flex items-center tracking-[0.06em] uppercase text-[#00E4FF]">CARTEIRA DIGITAL</h3>
                                <p className="not-italic font-normal text-base leading-[150%] flex items-center text-[#EEEEEE] lg:max-w-[500px] pt-[18px]">Crie sua Wallet de forma simples e rápida, sem vínculos com CRIPTOMOEDAS e comece a investir nos melhores NFTs esportivos do Mundo.</p>
                            </div>
                        </li>
                    </ul>

                    <Image src="/assets/images/resource.png" height={500} width={500} alt="" className="2xl:overflow-hidden 2xl:w-[900px] 2xl:absolute 2xl:right-[2%] 2xl:top-[100px]" />
                </div>
            </div >
        </section >
    </>;
}

export default Resource;


