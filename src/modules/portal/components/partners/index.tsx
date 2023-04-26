import Image from "next/image";
import React, { MutableRefObject } from "react";

const Partners = ({ children }: any) => {
    const carrosel: MutableRefObject<HTMLUListElement | null | any | undefined> =
        React.useRef();

    const next = (): void => {
        carrosel.current.scrollLeft += 289;
    };
    const before = (): void => {
        carrosel.current.scrollLeft -= 289;
    };

    return (
        <div className="">
            <div className="mx-auto max-w-7xl lg:px-8 relative sm:pb-[165px] sm:px-0" >
                <div className="relative isolate overflow-hidden   sm:rounded-3xl">
                    <h2 className="font-black text-base flex  text-center sm:text-start justify-center leading-[150%] mb-0 pt-16  sm:pt-0 sm:text-[58px] tracking-[0.06em] uppercase text-[#EEEEEE] sm:mb-[32px]">
                        Parceiros
                    </h2>
                    <p className="mx-auto max-w-xl text-center text-lg  text-gray-300">
                        Parceiros e Clientes da CHRONUS Plataform
                    </p>
                </div>

                <div className="w-[100%] px-[10%] justify-center flex items-center m-auto pt-16 pb-0 px-0">
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
                    <div className="flex overflow-x-visible overflow-y-hidden w-full relative flex-nowrap flex-row scroll-smooth min-h-[100px]   sm:min-h-[500px]  m-auto" ref={carrosel}>
                        <div className="m-4 min-w-[200px] sm:min-w-[400px] ml-[-16px]">
                            <Image src="/assets/images/artPartner1.svg" width={400} height={450} alt="" />
                        </div>
                        <div className="m-4 min-w-[200px] sm:min-w-[400px] ml-[-111px]">
                            <Image src="/assets/images/artPartner2.svg" width={400} height={450} alt="" />
                        </div>
                        <div className="m-4 min-w-[200px] sm:min-w-[400px] ml-[-111px]">
                            <Image src="/assets/images/artPartner3.svg" width={400} height={450} alt="" />
                        </div>

                        <div className="m-4 min-w-[200px] sm:min-w-[400px] ml-[-111px]">
                            <Image src="/assets/images/artPartner1.svg" width={400} height={450} alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Partners;