import BestSellers from '@/components/BestSellers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Sellers',
  description: 'Represents best products sold whole time',
};

function BestSellersPage() {
  return <BestSellers />;
}

export default BestSellersPage;
