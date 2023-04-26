import Image from 'next/image'
import Link from 'next/link'

export const Midia = () => {

    return (
        <>
            <div className="py-16 sm:py-24 hidden lg:flex">
                <div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 relative  sm:px-0 `} >
                    <div className="relative isolate overflow-hidden   sm:rounded-3xl">
                        <h2 className="font-black text-base flex  text-center sm:text-start justify-center leading-[150%] mb-0 pt-16  sm:pt-0 sm:text-[58px] tracking-[0.06em] uppercase text-[#EEEEEE] sm:mb-[32px]">
                            NA MÍDIA
                        </h2>

                        <div className="flex justify-center items-center w-full lg:pt-[117px]">

                            <div className='w-[217px] h-80 flex items-end justify-center flex-row px-0 p-4 bg-[url(/assets/images/artMidiaPost1.jpeg)] bg-center bg-contain bg-no-repeat'>
                                <Link target='_blank' href="https://veja.abril.com.br/esporte/substituicao-sai-o-olheiro-no-futebol-entra-a-inteligencia-artificial/" className="w-[170px] h-10 bg-[linear-gradient(322.68deg,#803EB4_36.47%,#4F25CC_92.31%)] rounded-2xl w-[170px] flex justify-center items-center text-white">Veja agora</Link>
                            </div>


                            <div className="flex justify-end items-center flex-row hidden z-[9]">
                                <button className="cursor-pointer absolute p-1.5 border-[unset] left-0">
                                    <Image
                                        src="/assets/images/icoPrevius.svg"
                                        alt="" width={24} height={24}

                                    />
                                </button>

                                <button className="cursor-pointer absolute p-1.5 border-[unset] right-0">
                                    <Image src="/assets/images/icoNext.svg" alt="" width={24} height={24} />
                                </button>
                            </div>
                            <div className='h-[446px] max-w-[784px] shadow-[-5px_0px_29px_rgba(0,0,0,0.5)] flex items-center relative'>

                                <div className='bg-[#EEEEEE] w-full h-full flex flex-col justify-between items-center'>
                                    <Image className='lg:[450px] xl:w-[100%]' src="/assets/images/artMidiaPost.jpeg" width={435} height={395} alt="" />

                                    <Link target='_blank' href="https://www.cbf.com.br/a-cbf/informes/pelos-estados/fpf-realiza-acao-inedita-na-final-do-pernambucano" className='w-[170px] h-10 bg-[linear-gradient(322.68deg,#803EB4_36.47%,#4F25CC_92.31%)] rounded-2xl w-[170px] flex justify-center items-center text-white absolute bottom-[46px]'>
                                        VEJA AGORA
                                    </Link>
                                </div>
                                <div className='bg-[#EEEEEE] w-full h-full pl-10 pr-[30px] py-[46px] flex flex-col justify-between items-center'>

                                    <div>
                                        <h3 className='not-italic font-black text-[32px] leading-[116%] flex items-center tracking-[0.06em] uppercase text-[#424242] mb-2.5 pb-[15px] border-b-[#5C5C5C] border-b border-solid'>REVISTA VEJA</h3>

                                        <p className='not-italic font-normal text-xs py-[5px] leading-[150%] flex items-center text-[#424242]'>
                                            Substituição: sai o olheiro no futebol, entra a inteligência artificial.
                                            A evolução de plataformas de análise de dados vem revolucionando as partidas no Brasil e no mundo.
                                        </p>

                                        <p className='not-italic font-normal text-xs py-[5px] leading-[150%] flex items-center text-[#424242]'>
                                            Trata-se da Mooh!Tech, que lançou o CHRONUS Sports, uma Plataforma que trabalha com os mais variados atributos técnicos e de desempenhos dos atletas e clubes.
                                        </p>
                                    </div>


                                    <Link target='_blank' href="https://veja.abril.com.br/esporte/substituicao-sai-o-olheiro-no-futebol-entra-a-inteligencia-artificial/" className='w-[170px] h-10 bg-[linear-gradient(322.68deg,#803EB4_36.47%,#4F25CC_92.31%)] rounded-2xl w-[170px] flex justify-center items-center text-white'>
                                        VEJA AGORA
                                    </Link>
                                </div>


                            </div>

                            <div className='w-[217px] h-80 flex items-end justify-center flex-row px-0 p-4 bg-[url(/assets/images/artMidiaPost3.jpeg)] bg-center bg-contain bg-no-repeat'>
                                <Link target='_blank' href="https://cultura.uol.com.br/esporte/noticias/2022/04/13/3222_empresa-lanca-aplicativo-que-cria-cards-com-atributos-reais-de-jogadores-profissionais-e-amadores.html" className='w-[170px] h-10 bg-[linear-gradient(322.68deg,#803EB4_36.47%,#4F25CC_92.31%)] rounded-2xl w-[170px] flex justify-center items-center text-white'>Veja agora</Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}


export default Midia;