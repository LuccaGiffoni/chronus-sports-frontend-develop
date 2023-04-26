interface Props {
    isOpen?: boolean
    toogle: () => void
}
const Draft = ({ isOpen = false, toogle }: Props): JSX.Element => {

    if (!isOpen) return <></>
    return <>
        <div className="w-full fixed h-screen backdrop-blur-[4.5px] inset-0 tems-center flex m-auto z-[100]" onClick={toogle}>
            <section className="opacity-90 border max-w-[90%] md:max-w-[66%] text-white max-h-[80vh] overflow-auto m-auto pt-[78px] pb-[99px] px-[92px] rounded-lg border-solid border-[#00E4FF] bg-[#131740]" onClick={(event) => event.preventDefault()}>
                <h2 className="py-[12px] not-italic font-black sm:text-[32px] sm:text-[58px] leading-[100%] tracking-[0.06em] uppercase text-[#00E4FF] w-full text-center">Minuta do contrato</h2>

                <h3 className="py-[12px] not-italic font-bold text-xl leading-[150%] text-white">Item 1</h3>
                <p className="not-italic font-normal text-base leading-[150%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ipsum velit, at pulvinar purus vehicula nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed porta nibh urna, nec consectetur sem facilisis nec. Maecenas luctus elementum fringilla. Aliquam non lorem bibendum, tempor orci ullamcorper, porttitor mi. In dictum ligula sit amet eros lacinia semper. Mauris eu lorem nisi. Sed vel vestibulum velit, quis faucibus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor mattis bibendum. Ut at imperdiet justo, eu ullamcorper velit. Nulla ipsum turpis, tempor eget scelerisque vitae, accumsan a mi. Sed tempor cursus orci nec aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <h3 className="py-[12px] not-italic font-bold text-xl leading-[150%] text-white">Item 1</h3>
                <p className="not-italic font-normal text-base leading-[150%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ipsum velit, at pulvinar purus vehicula nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed porta nibh urna, nec consectetur sem facilisis nec. Maecenas luctus elementum fringilla. Aliquam non lorem bibendum, tempor orci ullamcorper, porttitor mi. In dictum ligula sit amet eros lacinia semper. Mauris eu lorem nisi. Sed vel vestibulum velit, quis faucibus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor mattis bibendum. Ut at imperdiet justo, eu ullamcorper velit. Nulla ipsum turpis, tempor eget scelerisque vitae, accumsan a mi. Sed tempor cursus orci nec aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <h3 className="py-[12px] not-italic font-bold text-xl leading-[150%] text-white">Item 1</h3>
                <p className="not-italic font-normal text-base leading-[150%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ipsum velit, at pulvinar purus vehicula nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed porta nibh urna, nec consectetur sem facilisis nec. Maecenas luctus elementum fringilla. Aliquam non lorem bibendum, tempor orci ullamcorper, porttitor mi. In dictum ligula sit amet eros lacinia semper. Mauris eu lorem nisi. Sed vel vestibulum velit, quis faucibus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor mattis bibendum. Ut at imperdiet justo, eu ullamcorper velit. Nulla ipsum turpis, tempor eget scelerisque vitae, accumsan a mi. Sed tempor cursus orci nec aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <h3 className="py-[12px] not-italic font-bold text-xl leading-[150%] text-white">Item 1</h3>
                <p className="not-italic font-normal text-base leading-[150%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ipsum velit, at pulvinar purus vehicula nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed porta nibh urna, nec consectetur sem facilisis nec. Maecenas luctus elementum fringilla. Aliquam non lorem bibendum, tempor orci ullamcorper, porttitor mi. In dictum ligula sit amet eros lacinia semper. Mauris eu lorem nisi. Sed vel vestibulum velit, quis faucibus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor mattis bibendum. Ut at imperdiet justo, eu ullamcorper velit. Nulla ipsum turpis, tempor eget scelerisque vitae, accumsan a mi. Sed tempor cursus orci nec aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </section>
        </div>
    </>;
}

export default Draft;
