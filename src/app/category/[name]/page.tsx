'use client'

import dynamic from 'next/dynamic';
import { Category } from '../../../components';

const CategoryPage = dynamic(() => Promise.resolve(() => {
  return <Category />;
}), { ssr: false });

export default CategoryPage;