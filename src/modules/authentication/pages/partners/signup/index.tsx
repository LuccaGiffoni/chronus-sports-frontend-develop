import AuthenticationLayout from '@/components/layout/authentication';
import { useState } from 'react';
import { Step1, Step2, Step3, Step3ClubFederation, Step4 } from './steps';

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
    const [period, setPeriod] = useState(null);

    const handleNext = () => {
        if (registrationData.registerType === "") return;
        setRegistrationData((prev) => ({ ...prev, step: prev.step + 1 }))

    }

    const handleBack = () => {
        if (registrationData.registerType === "") return;
        setRegistrationData((prev) => ({ ...prev, step: prev.step - 1 }))
    }

    const isAthlete = () => registrationData.registerType === "ATLETA";



    const Step2Swith = () => {
        if (isAthlete()) {
            return <Step2 key="step2" data={{ registrationData, setRegistrationData, handleNext, period, setPeriod, handleBack }} />;
        }
        return <Step3ClubFederation key="step3" data={{ registrationData, setRegistrationData, handleNext, period, setPeriod }} />;
    }
    const Step3Swith = () => {
        if (registrationData.registerType === "ATLETA") {
            return <Step3 key="step3" data={{ registrationData, setRegistrationData, handleNext, period, setPeriod }} />;
        }
        return <Step4 key="step4" />;
    }



    const steps = [
        <Step1 key="step1" data={{ registrationData, setRegistrationData, handleNext, period, setPeriod }} />,
        Step2Swith(),
        Step3Swith(),
        <Step4 key="step4" />,
    ];



    return <>
        <AuthenticationLayout>
            <>
                {steps[registrationData.step]}
            </>
        </AuthenticationLayout>
    </>
}

export default SignupPage;
