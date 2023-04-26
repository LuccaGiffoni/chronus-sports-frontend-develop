import Image from "next/image";

const Alert = ({ children, isOpen, toggle }: { children: any, isOpen: boolean, toggle: () => any }) => {

    if (!isOpen) return <></>;


    return <>
        <section className="fixed z-[20] inset-0 w-full  p-1.5 h-full fixed flex justify-center items-center">
            <div className="w-[450px] h-[360px] relative flex flex-col items-center justify-center bg-[linear-gradient(80.65deg,#133780_5.25%,#2358C1_100.74%)] rounded-[26px]">
                <button onClick={toggle}>
                    <Image src="/assets/images/icoAuthModalClose.svg" alt="" height={24} width={24} className="absolute right-[15px] top-[22px]" />
                </button>
                <>{children}</>
            </div>
        </section>
    </>
}

export default Alert;