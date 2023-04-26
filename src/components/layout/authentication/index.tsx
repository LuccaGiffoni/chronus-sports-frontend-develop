import React, { ReactNode } from "react";
import styles from './styles.module.css';
import Logo from "@/modules/authentication/components/logo";
import Footer from "@/modules/authentication/components/footer";
import GoToHome from "@/modules/authentication/components/GoToHome";
import Image from "next/image";


type Props = {
  aside?: ReactNode;
  children?: ReactNode;
};


const Authentication = ({ aside, children }: Props) => {


  return (
    <>
      <div className="flex h-full bg-[#0D102D] min-h-screen">
        <div className={`${styles.col1}  relative hidden max-w-[50%] flex-1 lg:flex flex items-center justify-center flex content-between flex-col justify-between min-h-screen max-h-full
        `}>
          <div>
            <GoToHome />
            <Logo />
          </div>

          <Footer />
        </div>

        <div className="flex flex-1 px-0 flex-col justify-start  bg-[#0e102e] py-0 sm:px-6 lg:flex-none max-w-screen min-h-screen">
          <div className={`${styles.headerMobile} sm:hidden h-[180px] bg-[#131A4D] flex items-center justify-center relative`}>
            <Image className="w-[98px] h-[98px] m-0" src='/assets/images/icoAuthLogo.svg' height={98} width={98} alt='' />
          </div>
          <div className=" px-4 lg:px-20 xl:px-24 ">
            <>{children}</>
          </div>

          <div className="flex sm:hidden">
            <Footer />
          </div>

        </div>
      </div>
    </>
  )
}

export default Authentication;
