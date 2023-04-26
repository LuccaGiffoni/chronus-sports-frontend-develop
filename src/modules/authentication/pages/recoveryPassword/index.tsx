import Image from "next/image";
import { useFormik, useFormikContext } from "formik";
import { Toast } from "@/utils/toast";
import { useState } from "react";
import { Header } from "@/modules/authentication/components";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { AuthService } from "@/services/auth";
import { RecoveryPassword } from "@/types/user";
import { recoveryPasswordValidation } from "@/validations";




const RecoveryPassword = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);



    const handleShowErros = () => {
        const { errors } = formik;
        if (!errors) return;

        for (const [key, value] of Object.entries(errors)) {
            Toast.error(value)
        }
    }

    const payload = (data: RecoveryPassword) => {
        return {
            email: data.email,
        };
    }

    const handleSubmit = async (values: RecoveryPassword) => {
        if (loading) return;
        setLoading(true)
        try {
            const response = await AuthService.recoveryPassword(payload(values));

            if (response) {
                Toast.success('Recuperação de senha solicitada com sucesso! Por favor verifique o seu e-mail.');
                setSent(true);
            }


        } catch (error: any) {
            Toast.error(error.message);
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    const formik = useFormik({
        initialValues: { email: '' },
        enableReinitialize: true,
        validateOnChange: false,
        validationSchema: recoveryPasswordValidation,
        validateOnBlur: true,
        onSubmit: handleSubmit,
    });



    return <>
        <div>
            <Header title="Recuperar senha" description="Insira o seu email e enviaremos um link para você voltar a acessar a sua conta." />

            <div className="mx-auto w-full max-w-sm lg:w-96 pt-[149px]">
                <div className="mt-8">
                    <div className="mb-6">
                        <form onSubmit={formik.handleSubmit} >
                            <div>
                                <label htmlFor="email" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input onChange={formik.handleChange}
                                        disabled={sent}
                                        onBlur={formik.handleBlur} id="email" name="email" type="email" autoComplete="email" placeholder="E-mail" required className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] rounded-2xl outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740]" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between  mt-1 mb-0">
                                <div className="flex items-center"></div>
                            </div>

                            <div className="mt-6">
                                <button type="submit" onClick={handleShowErros} disabled={sent}
                                    className={`h-14 rounded-2xl ${sent ? 'bg-[#1c1e3a] text-[#696c83]' : 'text-[#EEEEEE] bg-[linear-gradient(322.68deg,#803EB4_36.47%,#4F25CC_92.31%)]'}  not-italic font-bold text-base w-full`}>
                                    {loading ? <LoadingIndicator /> : 'Enviar'}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default RecoveryPassword;
