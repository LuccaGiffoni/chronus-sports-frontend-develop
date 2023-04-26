import Image from "next/image";
import { useFormik, useFormikContext } from "formik";
import { Toast } from "@/utils/toast";
import { useState } from "react";
import { Header } from "@/modules/authentication/components";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { AuthService } from "@/services/auth";
import { RecoveryPassword, NewPassword } from "@/types/user";
import { newPasswordValidation, recoveryPasswordValidation } from "@/validations";
import { useRouter } from "next/router";
import Link from "next/link";




const NewPassword = () => {

    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);


    console.log(router)

    const handleShowErros = () => {
        const { errors } = formik;
        if (!errors) return;

        for (const [key, value] of Object.entries(errors)) {
            Toast.error(value)
        }
    }

    const payload = (data: NewPassword) => {
        return {
            newPassword: data.newPassword,
            confirmNewPassword: data.confirmNewPassword,
        };
    }

    const handleSubmit = async (values: NewPassword) => {
        if (loading) return;
        setLoading(true);
        const id = router.query.id?.toString() || "";

        try {
            const response = await AuthService.newPassword(payload(values), id);

            if (response) {
                Toast.success('Senha alterada com sucesso com sucesso!');
                setSent(true);
            } else {
                console.log(response)
            }

        } catch (error: any) {
            console.log(error)
            Toast.error(error.message);
        } finally {
            setLoading(false)
        }

    }

    const formik = useFormik({
        initialValues: { newPassword: '', confirmNewPassword: '' },
        enableReinitialize: true,
        validateOnChange: false,
        validationSchema: newPasswordValidation,
        validateOnBlur: true,
        onSubmit: handleSubmit,
    });


    if (sent) {
        return <div>
            <Header title="Senha alterada com sucesso" description="" />

            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div className="flex pt-[18px] pb-16 px-0 mx-auto justify-center">
                    <Image src="/assets/images/icoAuthComplete.svg" height={93} width={93} alt="" />
                </div>

                <div className="mt-6">
                    <Link href="/auth/">
                        <button type="submit"
                            style={
                                { background: "linear-gradient(322.68deg, #803EB4 36.47%, #4F25CC 92.31%)" }
                            }
                            className="h-14 rounded-2xl text-[#EEEEEE] not-italic font-bold text-base w-full">
                            Acessar
                        </button>

                    </Link>
                </div>
            </div>
        </div>
    }


    return <>
        <div className=" pt-[180px]">
            <Header title="Recuperar senha" description="Digite a sua nova senha." />

            <div className="mx-auto w-full max-w-sm lg:w-96 pt-[14px]">
                <div className="mt-8">
                    <div className="mb-6">
                        <form onSubmit={formik.handleSubmit} >
                            <div>
                                <label htmlFor="newPassword" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                    Senha
                                </label>
                                <div className="mt-2">
                                    <input onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} id="newPassword" name="newPassword" type="password" placeholder="Senha" required className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] rounded-2xl outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740]" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirmNewPassword" className="hidden block text-sm font-medium leading-6 text-gray-900">
                                    Senha
                                </label>
                                <div className="mt-2">
                                    <input onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} id="confirmNewPassword" name="confirmNewPassword" type="password" placeholder="Confirmar senha" required className="text-[#A3A3A3] block max-h-12 px-4 py-3 w-full bg-[#ffffff00] rounded-2xl outline-0 border-0 py-1.5  ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 rounded-[16px_px] border-2 border-solid border-[#131740]" />
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
            </div >
        </div >
    </>
}

export default NewPassword;
