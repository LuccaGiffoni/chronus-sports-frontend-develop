import Image from 'next/image';

interface Types {
    image: string
    imageActive: string
    name: string
}

const RegisterType = ({ data }: { data: any }) => {

    const Item = ({ type }: { type: Types }) => {
        return <> <li className='flex max-w-[109px] sm:max-w-[150px] sm:justify-center items-center flex-col sm:min-w-[100px] ml-0 sm:mr-[25px] my-0 cursor-pointer' onClick={() => data?.handleChange(type.name)}>
            <Image className='width=[109px] sm:width=[150px]  sm:height=[150px] height=[109px] sm:width=[150px] sm:height=[150px]' src={data.selected === type.name ? type.imageActive : type.image} alt='' width={150} height={150}></Image>
            <h3 className='not-italic font-bold text-base leading-[150%] text-white flex p-[11px]'>{type.name}</h3>
        </li></>
    }


    return <>
        <div>
            <h2 className='not-italic font-bold text-xl leading-[150%] text-[#EEEEEE] pb-10'>ESCOLHA O TIPO DE REGISTRO</h2>
            <ul className={`flex w-full  items-center flex-wrap flex-row ${data?.types?.length > 2 ? 'justify-center lg:justify-between' : ''}`}>
                {data?.types?.map((type: Types) => <><Item type={type} /></>)}
            </ul>
        </div>
    </>;
}

export default RegisterType;
