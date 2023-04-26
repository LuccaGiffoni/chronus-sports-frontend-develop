'use client'
import AuthenticationLayout from '@/components/layout/authentication';
import Draft from '@/modules/authentication/components/Draft';
import CustomerRegistration from '@/modules/authentication/screens/Registration/CustomerRegistration';

import { NextPage } from 'next';

const Authentication: NextPage = () => {

    return <>

        <AuthenticationLayout>
            <CustomerRegistration />
            <Draft isOpen={true} toogle={() => {}}/>
        </AuthenticationLayout>;
    </>;
}

export default Authentication;
