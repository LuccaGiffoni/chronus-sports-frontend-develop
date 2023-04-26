
import Raact from 'react'
const PasswordCheck = ({ data }: {
  data: {
    password: any,
    errors: any
  }
}) => {


  const Ok = () => {
    return <>
      <div>
        <svg className="mr-2.5" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_590_71661)">
            <circle cx="8" cy="8.16669" r="7" stroke="green" stroke-width="2" />
          </g>
          <defs>
            <clipPath id="clip0_590_71661">
              <rect width="16" height="16.6667" fill="white" transform="translate(0 0.166687)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  }

  const Bad = () => {
    return <>
      <div>
        <svg className="mr-2.5" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_590_71661)">
            <circle cx="8" cy="8.16669" r="7" stroke="red" stroke-width="2" />
          </g>
          <defs>
            <clipPath id="clip0_590_71661">
              <rect width="16" height="16.6667" fill="white" transform="translate(0 0.166687)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  }

  const Default = () => {
    return <>
      <div>
        <svg className="mr-2.5" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_590_71661)">
            <circle cx="8" cy="8.16669" r="7" stroke="#164092" stroke-width="2" />
          </g>
          <defs>
            <clipPath id="clip0_590_71661">
              <rect width="16" height="16.6667" fill="white" transform="translate(0 0.166687)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  }


  return <>
    <div className="absolute bg-[#131740] left-[calc(-196px_+_-22px)] z-[999] w-[196px] h-auto text-white pl-4 pr-2 pt-4 pb-2 top-0">
      <span className="bg-[#141840] w-4 h-4 absolute rotate-45 -right-2"></span>
      <ul>
        <li className="not-italic font-normal text-base leading-[150%] flex items-center text-white">A senha precisa ter:</li>

        <li className="flex content-center items-center mx-0 my-2">
          {
            data?.password ? (/^.{8,20}$/.test(data?.password)) ? <Ok /> : <Bad /> : <Default />
          }
          <p className="not-italic font-normal text-sm leading-[150%] flex items-center text-[#EEEEEE]">8 - 20 caracteres</p>
        </li>

        <li className="flex content-center items-center mx-0 my-2">
          {
            data?.password ? (/^(?=.*[A-Z])/.test(data?.password)) ? <Ok /> : <Bad /> : <Default />
          }

          <p className="not-italic font-normal text-sm leading-[150%] flex items-center text-[#EEEEEE]">Ao menos uma letra maiúscula</p>

        </li>

        <li className="flex content-center items-center mx-0 my-2">
          {
            data?.password ? (/^(?=.*[a-z])/.test(data?.password)) ? <Ok /> : <Bad /> : <Default />
          }

          <p className="not-italic font-normal text-sm leading-[150%] flex items-center text-[#EEEEEE]">Ao menos uma letra minúscula</p>

        </li>

        <li className="flex content-center items-center mx-0 my-2">
          {
            data?.password ? (/^(?=.*[#!$&])/.test(data?.password)) ? <Ok /> : <Bad /> : <Default />
          }
          <p className="not-italic font-normal text-sm leading-[150%] flex items-center text-[#EEEEEE]">Caractere especial #, !, $, &</p>
        </li>
      </ul>
    </div>
  </>
};

export default PasswordCheck;

