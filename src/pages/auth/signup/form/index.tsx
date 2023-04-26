'use client'
import AuthenticationLayout from '@/components/layout/authentication';
import CompleteRegistration from '@/modules/authentication/screens/CompleteRegistration';
import Registration from '@/modules/authentication/screens/Registration';
import CustomerRegistration from '@/modules/authentication/screens/Registration/CustomerRegistration';

import { NextPage } from 'next';

const Authentication: NextPage = () => {

    return <>

        <AuthenticationLayout>
            <Registration />
        </AuthenticationLayout>
    </>
}

export default Authentication;
