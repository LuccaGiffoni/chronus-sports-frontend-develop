import { AuthService } from "@/services/auth";
import { newsletterService } from "@/services/newslatter";
import { Toast } from "@/utils/toast";
import { customerRegisterValidation, newsletterValidation } from "@/validations";
import { useFormik } from "formik";
import { useState } from "react";

export const Newsletter = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const payload = (data: any): any => {
        return {
            email: data.email
        }
    }
    const handleSubmit = async (values: any) => {
        if (loading) return;
        setLoading(true)
        try {
            await newsletterService(payload(values))

        } catch (error: any) {

            if (error.message === "This email is already registered to receive the newsletters.") {
                Toast.error("Este e-mail já está cadastrado para receber as newsletters.")
                return
            } else {
                Toast.error(error.message)
            }

        } finally {
            setLoading(false)
        }
    }

    const formik = useFormik({
        initialValues: { email: '' },
        enableReinitialize: true,
        validateOnChange: false,
        validationSchema: newsletterValidation,
        validateOnBlur: true,
        onSubmit: handleSubmit,
    });


    return (
        <>
            <div className="py-16 sm:py-24">
                <div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 relative  sm:pb-[165px] sm:px-0`} >
                    <div className="relative isolate overflow-hidden   sm:rounded-3xl">
                        <h2 className="font-black text-base flex  text-center sm:text-start justify-center leading-[150%] mb-0 pt-16  sm:pt-0 sm:text-[58px] tracking-[0.06em] uppercase text-[#EEEEEE] sm:mb-[32px]">
                            NEWSLETTER
                        </h2>
                        <p className="mx-auto max-w-xl text-center text-lg  text-gray-300">
                            Inscreva-se na nossa newsletter para ficar por dentro de todas as novidades, lançamentos, drops e dicas do CHRONUS Sports
                        </p>
                        <form onSubmit={formik.handleSubmit} className="mx-auto mt-10 flex max-w-md gap-x-4 relative">
                            <label htmlFor="email-address" className="sr-only">
                                Endereço de e-mail
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="block w-full text-[#A3A3A3]  px-4 py-3 w-full bg-[#ffffff00] outline-0 border-0 py-1.5 placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px] border-2 border-solid border-[#131740] rounded-2x shadow-none border-2 border-solid"
                                placeholder="Endereço de e-mail"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md absolute right-0 px-3.5 py-3 text-sm font-semibold text-gray-900 shadow-sm "
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.172 12L8.22205 7.04999L9.63605 5.63599L16 12L9.63605 18.364L8.22205 16.95L13.172 12Z" fill="white" />
                                </svg>

                            </button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}
