import Link from "next/link";
import { useRouter } from 'next/router'

interface Props {
    isRegistration?: boolean
}
const Nav = ({ isRegistration = false }: Props): JSX.Element => {
    const router = useRouter()
    return <>
        <section className="flex flex-col justify-center items-center text-center border-b-2 border-solid border-b-[#36384D]">
            <ul className="flex ">
                <li className={`text-white w-48 h-12 justify-center flex items-center border-b-2 hover:border-b-[#5026CC]  ${!isRegistration ? 'border-b-[#5026CC]' : 'border-b-[#ffffff00]'}  border-solid`}><Link href={`/auth/entrar`}>Log-in</Link></li>
                <li className={`text-white w-48 h-12 justify-center flex items-center border-b-2  hover:border-b-[#5026CC] ${isRegistration ? 'border-b-[#5026CC]' : 'border-b-[#ffffff00]'} border-solid`}><Link href={`/auth/cadastro`}>Registrar</Link></li>
            </ul>
        </section>
    </>;
}

export default Nav;
