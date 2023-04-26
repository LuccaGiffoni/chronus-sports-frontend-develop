'use client'
import AuthenticationLayout from '@/components/layout/authentication';
import NewPassword from '@/modules/authentication/pages/newPassword';
import RecoveryPassword from '@/modules/authentication/pages/recoveryPassword';


import { NextPage } from 'next';

const Authentication: NextPage = () => {

    return <>

        <AuthenticationLayout>
            <NewPassword />
        </AuthenticationLayout>
    </>
}

export default Authentication;
