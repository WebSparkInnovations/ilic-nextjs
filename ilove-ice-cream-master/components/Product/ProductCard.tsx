import { ALLPRODUCTS } from '@/lib/products';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type ProductCardProps = {
  product: (typeof ALLPRODUCTS)[number]['products'][number];
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="bg-white relative w-64 md:w-80 2xl:w-96 rounded-xl lg:h-[26rem] hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
      <CardHeader className="text-xl font-bold text-neutral-600 lg:text-2xl xl:text-3xl select-none h-20">
        {product.title}
      </CardHeader>
      <CardContent>
        <div className="w-full mt-4">
          <Image
            src={product.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl user-drag-none"
            alt={product.alt}
          />
        </div>
        <CardFooter className="px-4 py-2 rounded-xl text-xs font-normal lg:text-sm xl:text-lg cursor-pointer">
          Try now →
        </CardFooter>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
