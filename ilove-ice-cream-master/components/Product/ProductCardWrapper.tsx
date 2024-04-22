import ProductCard from '@/components/Product/ProductCard';
import { ALLPRODUCTS } from '@/lib/products';
import { cn } from '@/lib/utils';
import { Pacifico } from 'next/font/google';

const font = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

type ProductCardWrapperProps = {
  products: (typeof ALLPRODUCTS)[number]['products'];
  header: string;
};

function ProductCardWrapper({ products, header }: ProductCardWrapperProps) {
  return (
    <section className={cn(font.className, 'pb-28 space-y-10')}>
      <div className="w-full flex flex-col overflow-hidden justify-center items-center">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-white relative z-20 capitalize pt-2 select-none w-full text-center">
          {header}
        </h1>
        <div className="w-[40rem] h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-custom-orange-200 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-custom-orange-200 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-custom-red-200 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-custom-red-200 to-transparent h-px w-1/4" />
        </div>
      </div>

      <div
        className={cn('flex flex-wrap justify-center h-full gap-x-5 gap-y-10')}
      >
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductCardWrapper;
