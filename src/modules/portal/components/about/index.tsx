import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <>
      <section className="bg-[#0D0035] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl lg:pt-32 flex flex-col">
          <div className="flex-col sm:flex  justify-center items-center lg:items-start lg:justify-between flex-row flex-row-reverse lg:flex-row flex-wrap flex-col-reverse bg-[url(/assets/images/scount.png)] bg-no-repeat bg-top bg-contain">
            <Image src="/assets/images/artAbout1.webp" height={500} width={500} alt="" className="lg:w-[65%] lg:max-w-[unset] lg:ml-[-15%]" />
            <div className="py-10 w-full max-w-full lg:max-w-[50%]">
              <h2 className="font-[16px] not-italic font-black font-bold text-base leading-[150%] sm:leading-[100%] not-italic font-black sm:text-[58px] leading-[100%] flex items-center tracking-[0.06em] uppercase text-[#EEEEEE] sm:max-w-full sm:flex sm:flex-col sm:items-start">SCOUT <span className="px-3 sm:p-0 text-[#00E4FF]   sm:text-[#EEEEEE] ">COMBINE</span></h2>
              <p className="text-sm md:text-base not-italic font-normal text-base flex items-center text-gray-200 pt-[26px]">Acompanhe o desempenho dos atletas através de estatísticas e análises de desempenho técnicos e táticos. Aproveite para colecionar NFTs dinâmicos repletos destes atributos. Invista e colecione a história. Comece agora, é rápido e fácil.</p>
              <Link href="/auth/cadastro" className="flex justify-center items-center  max-w-[170px] h-10 md:h-[56px] text-white mt-4 sm:mt-16 md:text-base min-w-[170px] bg-transparent border border-1 border-[#4f25cc] text-gray-light rounded-2xl">
                CADASTRE-SE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
