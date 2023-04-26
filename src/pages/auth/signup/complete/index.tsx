'use client'
import AuthenticationLayout from '@/components/layout/authentication';
import CompleteRegistration from '@/modules/authentication/screens/CompleteRegistration';

import { NextPage } from 'next';

const Authentication: NextPage = () => {

    return <>

        <AuthenticationLayout>
            <CompleteRegistration />
        </AuthenticationLayout>;
    </>;
}

export default Authentication;
