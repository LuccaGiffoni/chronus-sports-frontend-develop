import Image from "next/image";
import Link from "next/link";

const GoToHome = () => {
    return <>
        <div>
            <Link href={'/'} className="absolute cursor-pointer top-7	left-7 z-10">
                <Image src="/assets/images/icoAuthGoHome.svg" width={32} height={32} alt="Vá para página inicial" />
            </Link>
        </div>
    </>
}

export default GoToHome;