'use client'
import AuthenticationLayout from '@/components/layout/authentication';
import RegistrationType from '@/modules/authentication/screens/RegistrationType';

import { NextPage } from 'next';

const Authentication: NextPage = () => {

    return <>

        <AuthenticationLayout>
            <RegistrationType />
        </AuthenticationLayout>;
    </>;
}

export default Authentication;
