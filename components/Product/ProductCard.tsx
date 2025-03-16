import { ALLPRODUCTS } from '@/lib/products';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type ProductCardProps = {
  product: (typeof ALLPRODUCTS)[number]['products'][number];
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative w-64 rounded-xl bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 md:w-80 lg:h-[26rem] 2xl:w-96">
      <CardHeader className="h-20 select-none text-xl font-bold text-neutral-600 lg:text-2xl xl:text-3xl">
        {product.title}
      </CardHeader>
      <CardContent>
        <div className="mt-4 w-full">
          <Image
            src={product.img}
            height="1000"
            width="1000"
            className="user-drag-none h-60 w-full rounded-xl object-cover object-center group-hover/card:shadow-xl"
            alt={product.alt}
          />
        </div>
        <CardFooter className="cursor-pointer rounded-xl px-4 py-2 text-xs font-normal lg:text-sm xl:text-lg">
          Try now →
        </CardFooter>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
