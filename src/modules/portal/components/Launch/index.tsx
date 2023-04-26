import Image from "next/image";
import Link from "next/link";
import React, { MutableRefObject, useEffect } from "react";

const Launch = () => {
    const carrosel: MutableRefObject<HTMLUListElement | null | any | undefined> =
        React.useRef();

    const next = (): void => {
        carrosel.current.scrollLeft += (798 - 300);
    };
    const before = (): void => {
        carrosel.current.scrollLeft -= (798 - 300);
    };

    const handleShowTitle = ({ target }: { target: any }) => {
        try {
            carrosel.current.querySelectorAll('h3').forEach((item: any) => {
                console.log(item.style = "display: none;");
            });
            const element = target?.parentElement?.querySelector('h3');
            element.style = "display: flex;"
        } catch (error) {
            console.log(error);
        }

    }
    const handleHideTitle = ({ target }: { target: any }) => {
        try {
            carrosel.current.querySelectorAll('h3').forEach((item: any) => {
                console.log(item.style = "display: none;");
            });
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        carrosel.current.addEventLister
    })

    return (
        <div className="sm:pt-[119px] bg-[url(/assets/images/artLaunchLayer.png)]">
            <div className="mx-auto max-w-9xl lg:px-8 relative sm:px-0  bg-[50%] bg-no-repeat flex items-center justify-center gap-5 flex-col" >
                <div className="relative isolate overflow-hidden sm:rounded-3xl">
                    <h2 className="font-black text-base flex  text-center sm:text-start justify-center leading-[150%] mb-0 pt-16  sm:pt-0 sm:text-[58px] tracking-[0.06em] uppercase text-[#EEEEEE] sm:mb-[32px]">
                        LANÇAMENTOS
                    </h2>
                </div>

                <div className="w-[100%] justify-center flex items-center m-auto pb-0 px-0">
                    <div className="flex justify-end items-center flex-row absolute w-4/5 z-[9]">
                        <button className="cursor-pointer absolute p-1.5 border-[unset] left-0">
                            <Image
                                src="/assets/images/icoPrevius.svg"
                                alt="" width={24} height={24}
                                onClick={() => before()}
                            />
                        </button>

                        <button className="cursor-pointer absolute p-1.5 border-[unset] right-0" onClick={() => next()}>
                            <Image src="/assets/images/icoNext.svg" alt="" width={24} height={24} />
                        </button>
                    </div>
                    <div className="flex overflow-x-visible overflow-y-hidden w-full relative flex-nowrap flex-row scroll-smooth max-h-[400px] sm:max-h-[unset] sm:min-h-[450px]  m-auto" ref={carrosel}>
                        <div
                            onMouseEnter={handleShowTitle}
                            onMouseLeave={handleHideTitle}
                            className="flex  cursor-pointer flex-col items-center justify-center min-h-[380] sm:min-h-[798px] min-w-[280px] sm:min-w-[606px] mr-[-50px] sm:mr-[-150px] transition-[0.7s] hover:transition-[0.7s] hover:scale-[1.2]" >
                            <Image src="/assets/images/nft_home_chico.svg" height={798} width={606} alt="" className="object-contain cursor-pointer " />
                            <h3 className="leading-[64px] block absolute sm:min-w-[70%] hidden text-[25px] leading-[normal] sm:text-[68px] text-white uppercase bottom-[75px] uppercase  flex flex-col ml-[-25px] sm:ml-[-110px] font-bold" >Chico <span className="text-end text-[#FFD849]">Barreto</span></h3>
                        </div>

                        <div className="flex  cursor-pointer flex-col items-center justify-center min-h-[380] sm:min-h-[798px] min-w-[280px] sm:min-w-[606px] mr-[-50px] sm:mr-[-150px] transition-[0.7s] hover:transition-[0.7s] hover:scale-[1.2]"
                            onMouseEnter={handleShowTitle}
                            onMouseLeave={handleHideTitle}
                        >
                            <Image src="/assets/images/nft_home_dalila.svg" height={798} width={606} alt="" className="cursor-pointer" />
                            <h3 className="leading-[64px] block absolute hidden sm:min-w-[70%] text-[25px] leading-[normal] sm:text-[68px] text-white uppercase bottom-[75px] uppercase  flex flex-col ml-[-25px] sm:ml-[-110px] font-bold" >Dalila <span className="text-end text-[#FFD849]">Bulcão</span></h3>
                        </div>

                        <div
                            onMouseEnter={handleShowTitle}
                            onMouseLeave={handleHideTitle}
                            className="flex relative cursor-pointer flex-col items-center justify-center min-h-[380] sm:min-h-[798px] min-w-[280px] sm:min-w-[606px] mr-[-50px] sm:mr-[-150px] transition-[0.7s] hover:transition-[0.7s] hover:scale-[1.2]" >
                            <Image src="/assets/images/nft_home_guido.svg" height={798} width={606} alt="" className="cursor-pointer " />
                            <h3 className="leading-[64px] block absolute hidden sm:min-w-[70%] text-[25px] leading-[normal] sm:text-[68px] text-white uppercase bottom-[75px] uppercase  flex flex-col ml-[-25px] sm:ml-[-110px] font-bold" >Guilherme <span className="text-end text-[#FFD849]">Guido</span></h3>
                        </div>

                        <div
                            onMouseEnter={handleShowTitle}
                            onMouseLeave={handleHideTitle}

                            className="flex flex-col relative items-center justify-center min-h-[380] sm:min-h-[798px] min-w-[280px] sm:min-w-[606px] mr-[-50px] sm:mr-[-150px] transition-[0.7s] hover:transition-[0.7s] hover:scale-[1.2]" >
                            <Image src="/assets/images/nft_home_macaba.svg" height={798} width={606} alt="" className="cursor-pointer " />
                            <h3 className="leading-[64px] block absolute hidden sm:min-w-[70%] text-[25px] leading-[normal] sm:text-[68px] text-white uppercase bottom-[75px] uppercase  flex flex-col ml-[-25px] sm:ml-[-110px] font-bold" >Jhonson <span className="text-end text-[#FFD849]">Macaba</span></h3>
                        </div>

                        <div
                            onMouseEnter={handleShowTitle}
                            onMouseLeave={handleHideTitle}
                            className="flex flex-col relative items-center justify-center min-h-[380] sm:min-h-[798px] min-w-[280px] sm:min-w-[606px] mr-[-50px] sm:mr-[-150px] transition-[0.7s] hover:transition-[0.7s] hover:scale-[1.2]" >
                            <Image src="/assets/images/nft_home_marta.svg" height={798} width={606} alt="" className="cursor-pointer " />
                            <h3 className="leading-[64px] block absolute hidden text-[25px] leading-[normal] sm:text-[68px]  sm:min-w-[70%] text-white uppercase bottom-[75px] uppercase  flex flex-col ml-[-25px] sm:ml-[-110px] font-bold" >Marta <span className="text-end text-[#FFD849]">Sobral</span></h3>
                        </div>

                        <div
                            onMouseEnter={handleShowTitle}
                            onMouseLeave={handleHideTitle}

                            className="flex flex-col relative items-center justify-center min-h-[380] sm:min-h-[798px] min-w-[280px] sm:min-w-[606px] mr-[-50px] sm:mr-[-150px] transition-[0.7s] hover:transition-[0.7s] hover:scale-[1.2]" >
                            <Image src="/assets/images/nft_home_moser.svg" height={798} width={606} alt="" className="cursor-pointer " />
                            <h3 className="leading-[64px] block absolute hidden text-[25px] leading-[normal] sm:text-[68px]   sm:min-w-[70%] text-white uppercase bottom-[75px] uppercase  flex flex-col ml-[-25px] sm:ml-[-110px] font-bold" >Ana <span className="text-end text-[#FFD849]">Moser</span></h3>
                        </div>

                        <div
                            onMouseEnter={handleShowTitle}
                            onMouseLeave={handleHideTitle}
                            className="flex flex-col relative items-center justify-center min-h-[380] sm:min-h-[798px] min-w-[280px] sm:min-w-[606px] mr-[-50px] sm:mr-[-150px] transition-[0.7s] hover:transition-[0.7s] hover:scale-[1.2]" >
                            <Image src="/assets/images/nft_home_rolando.svg" height={798} width={606} alt="" className="cursor-pointer " />
                            <h3 className="leading-[64px] block absolute hidden text-[25px] leading-[normal] sm:text-[68px] sm:min-w-[70%]  text-white uppercase bottom-[75px] uppercase  flex flex-col ml-[-25px] sm:ml-[-110px] font-bold" >Roland <span className="text-end text-[#FFD849]">Ferreira</span></h3>
                        </div>

                        <div

                            onMouseEnter={handleShowTitle}
                            onMouseLeave={handleHideTitle}

                            className="flex flex-col relative items-center justify-center min-h-[380] sm:min-h-[798px] min-w-[280px] sm:min-w-[606px] mr-[-50px] sm:mr-[-150px] transition-[0.7s] hover:transition-[0.7s] hover:scale-[1.2]" >
                            <Image src="/assets/images/nft_home_xando.svg" height={798} width={606} alt="" className="cursor-pointer " />
                            <h3 className="block absolute hidden text-[25px] leading-[normal] sm:text-[68px] text-white uppercase bottom-[75px] uppercase  flex flex-col ml-[-25px] sm:ml-[-110px] font-bold" >Xandó <span className="text-end text-[#FFD849]"></span></h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Launch;