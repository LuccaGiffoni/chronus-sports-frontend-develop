import Image from "next/image";
import Link from "next/link";
import React, { MutableRefObject } from "react";

const Modality = () => {
    const carrosel: MutableRefObject<HTMLUListElement | null | any | undefined> =
        React.useRef();

    const next = (): void => {
        carrosel.current.scrollLeft += 289;
    };
    const before = (): void => {
        carrosel.current.scrollLeft -= 289;
    };

    return (
        <div className="sm:pt-[119px]">
            <div className="mx-auto max-w-7xl lg:px-8 relative sm:px-0 bg-[url(/assets/images/modality-bg.png)] bg-[50%] bg-no-repeat flex items-center justify-center gap-5 flex-col" >
                <div className="relative isolate overflow-hidden sm:rounded-3xl">
                    <h2 className="font-black text-base flex  text-center sm:text-start justify-center leading-[150%] mb-0 pt-16  sm:pt-0 sm:text-[58px] tracking-[0.06em] uppercase text-[#EEEEEE] sm:mb-[32px]">
                        MODALIDADES
                    </h2>
                </div>

                <div className="w-[100%] max-w-[930px] justify-center flex items-center m-auto pb-0 px-0">
                    <div className="flex justify-end items-center flex-row">
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
                    <div className="flex overflow-x-visible overflow-y-hidden w-full relative flex-nowrap flex-row scroll-smooth min-h-[450px]  m-auto" ref={carrosel}>
                        <div className="flex flex-col items-center justify-center min-w-[77px] m-[60px] ">
                            <Image src="/assets/images/modality-ginastica.png" height={89} width={146} alt="" className="max-h-[77px] object-contain" />
                            <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >Ginástica Olímpica</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center min-w-[77px] m-[60px]">
                            <Image src="/assets/images/modality-natacao.png" height={200} width={100} alt="" />
                            <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >Natação</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center min-w-[77px] m-[60px]">
                            <Image src="/assets/images/modality-futebol.png" height={200} width={100} alt="" />
                            <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >Futebol</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center min-w-[77px] m-[60px]">
                            <Image src="/assets/images/modality-futsal.png" height={200} width={100} alt="" />
                            <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >Futsal</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center min-w-[77px] m-[60px]">
                            <Image src="/assets/images/modality-basquete.png" height={200} width={100} alt="" />
                            <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >Basquete</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center min-w-[77px] m-[60px]">
                            <Image src="/assets/images/modality-volei.png" height={200} width={100} alt="" />
                            <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >Vôlei</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center min-w-[77px] m-[60px]">
                            <Image src="/assets/images/modality-futsal.png" height={200} width={100} alt="" />
                            <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >Futsal</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center min-w-[77px] m-[60px]">
                            <Image src="/assets/images/modality-basquete.png" height={200} width={100} alt="" />
                            <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >Basquete</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center min-w-[77px] m-[60px]">
                            <Image src="/assets/images/modality-volei.png" height={200} width={100} alt="" />
                            <h3 className="font-normal text-base flex items-end text-center text-white pt-[22px]" >Vôlei</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Modality;