'use client'

import dynamic from 'next/dynamic';
import { Product } from '../../../components';

const ProductPage = dynamic(() => Promise.resolve(() => {
  return <Product />;
}), { ssr: false });

export default ProductPage;