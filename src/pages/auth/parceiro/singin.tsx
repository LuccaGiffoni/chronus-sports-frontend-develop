'use client'
import AuthenticationLayout from '@/components/layout/authentication';
import SignIn from '@/modules/authentication/screens/SignIn';

import { NextPage } from 'next';

const Authentication: NextPage = () => {
    return <>
        <AuthenticationLayout>
            <SignIn />
        </AuthenticationLayout>
    </>
}

export default Authentication;
