'use client'
import AuthenticationLayout from '@/components/layout/authentication';
import RecoveryPassword from '@/modules/authentication/pages/recoveryPassword';


import { NextPage } from 'next';

const Authentication: NextPage = () => {

    return <>

        <AuthenticationLayout>
            <RecoveryPassword />
        </AuthenticationLayout>
    </>
}

export default Authentication;
