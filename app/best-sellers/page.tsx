import BestSellers from '@/app/best-sellers/components/BestSellers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Sellers',
  description: 'Represents best products sold whole time of Ice Cream Shop'
};

function BestSellersPage() {
  return <BestSellers />;
}

export default BestSellersPage;
