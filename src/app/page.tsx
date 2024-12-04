'use client'

import dynamic from 'next/dynamic';
import { Recommended } from '../components';

const Page = dynamic(() => Promise.resolve(() => {
  return <Recommended />;
}), { ssr: false });

export default Page;