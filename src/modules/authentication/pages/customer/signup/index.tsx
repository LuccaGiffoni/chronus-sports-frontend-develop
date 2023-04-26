import AuthenticationLayout from '@/components/layout/authentication';
import { useState } from 'react';
import { Step1, Step2, Step3 } from './steps';

const initialState = {
    step: 0,
    registerType: '',
    generalInfo: {
        name: '',
        genere: '',
        documentId: '',
        documentIdNumber: '',
    }
}
const SignupPage = () => {

    const [registrationData, setRegistrationData] = useState(initialState);

    const handleNext = (event: any) => {
        if (registrationData.registerType === "") return;
        setRegistrationData((prev) => ({ ...prev, step: prev.step + 1 }))
    }

    const steps = [
        <Step1 key="step1" data={{ registrationData, setRegistrationData, handleNext }} />,
        <Step2 key="step2" data={{ registrationData, setRegistrationData, handleNext }} />,
        <Step3 key="step3" />
    ];



    return <>
        <AuthenticationLayout>
            {steps[registrationData.step]}
        </AuthenticationLayout>
    </>
}

export default SignupPage;
