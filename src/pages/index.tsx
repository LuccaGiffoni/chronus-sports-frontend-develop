import { Inter } from 'next/font/google'
import HomePage from '@/modules/portal/pages/home';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <HomePage />;
}
