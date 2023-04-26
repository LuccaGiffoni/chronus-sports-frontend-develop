import Image from "next/image";

const Logo = () => {
    return <>
        <div className="mt-[378px]">
            <Image src='/assets/images/icoAuthLogo.svg' height={323} width={321} alt='' />
        </div>
    </>
}

export default Logo;