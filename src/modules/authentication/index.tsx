import AuthenticationLayout from "@/components/layout/authentication";
import SignIn from "./pages/customer/signin";


const AuthenticationModule = () => {


    return <>
        <AuthenticationLayout>
            <SignIn />
        </AuthenticationLayout>
    </>

}

export default AuthenticationModule;
