'use client'
import HomePage from '@/modules/portal/pages/home';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <HomePage />;
}
