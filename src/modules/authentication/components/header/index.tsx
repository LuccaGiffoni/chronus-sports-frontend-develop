
const Header = ({ title, description }: { title: string, description?: string }): JSX.Element => {
    return <>
        <header className="flex flex-col justify-center items-center text-center pt-[165px] pb-10 max-w-[520px] m-auto">
            <h1 className="not-italic font-black text-4xl flex items-center text-center uppercase text-[#00E4FF]">{title}</h1>
            <p className="not-italic font-normal text-base flex items-center text-center text-[#EEEEEE] max-w-md pt-8">{description}</p>
        </header>

    </>;
}

export default Header;
