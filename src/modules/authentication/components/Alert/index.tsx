
import Alert from "@/components/Alert";
import Image from "next/image"


const AlertAuth = () => {

    return <>
        <Alert isOpen={false} toggle={() => null}>
            <h2 className="not-italic font-black text-[38px] leading-[116%] flex items-center text-center tracking-[0.06em] uppercase text-white">ATENÇÃO</h2>
            <Image src="/assets/images/icoAlert.svg" height={32} width={32} alt="" className="pt-[13px] pb-[29px]" />
            <p className="not-italic font-normal text-base leading-[150%] flex items-center text-center text-[#C0C0C0]">O seu período selecionado foi de 1 ano.
                O seu percentual sobre a receita dos seus Ativos
                será de 50%.</p>
        </Alert>
    </>
}

export default AlertAuth;