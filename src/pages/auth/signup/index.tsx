'use client'
import AuthenticationLayout from '@/components/layout/authentication';
import Registration from '@/modules/authentication/screens/Registration';
import { NextPage } from 'next';

const Authentication: NextPage = ()=> {

    return  <AuthenticationLayout>
        <Registration />
    </AuthenticationLayout>;
}

export default Authentication;
