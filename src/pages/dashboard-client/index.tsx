import DashboardClientPage from '@/modules/dashboard/pages';
import { Inter } from 'next/font/google'
import { NextPage } from 'next';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <DashboardClientPage />;
}