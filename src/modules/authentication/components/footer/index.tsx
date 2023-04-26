import Link from "next/link";

const Footer = () => {
    return <>
        <footer className="px-5 w-full flex text-white items-start justify-between flex-col flex-wrap z-10 py-[38px]">

            <div className="w-full flex sm:justify-between flex-wrap">
                <div className="not-italic font-normal text-xs text-[#7D7F96] leading-5">© 2022 CHRONUS Sports - Powered By <Link href="https://www.moohtech.com/" className="text-[#00E4FF]">Mooh!Tech</Link></div>
                <div className="not-italic font-normal text-xs leading-5 text-[#7D7F96]">
                    <Link target="_blank" href="https://www.moohtech.com/chronus/sports/termsofuse/pt-BR/termsofuse_CHRONUS_Sports_PT-br.pdf" className="pr-4 py-0 hover:text-[#00e4ff]">Termos e Condições</Link>
                    <Link target="_blank" href="https://www.moohtech.com/chronus/sports/privacypolicy/pt-BR/privacypolicy_CHRONUS_Sports_pt-BR.pdf" className="py-0 hover:text-[#00e4ff]">Política de  privacidade</Link>
                </div>
            </div>

            <div className="font-normal text-xs underline">
                <Link href="/" className="text-[#00E4FF] leading-5">Acesse a minuta do contrato.</Link>
            </div>
        </footer>

    </>
}

export default Footer;