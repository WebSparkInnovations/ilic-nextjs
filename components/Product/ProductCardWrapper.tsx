import ProductCard from '@/components/Product/ProductCard';
import { pacificoFont } from '@/lib/fonts';
import { ALLPRODUCTS } from '@/lib/products';
import { cn } from '@/lib/utils';

type ProductCardWrapperProps = {
  products: (typeof ALLPRODUCTS)[number]['products'];
  header: string;
};

function ProductCardWrapper({ products, header }: ProductCardWrapperProps) {
  return (
    <section className={cn(pacificoFont.className, 'space-y-10 pb-28')}>
      <div className="flex w-full flex-col items-center justify-center overflow-hidden">
        <h1 className="relative z-20 w-full select-none pt-2 text-center text-3xl font-bold capitalize text-white md:text-7xl lg:text-9xl">
          {header}
        </h1>
        <div className="relative h-10 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-custom-orange-200 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-custom-orange-200 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-custom-red-200 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-custom-red-200 to-transparent" />
        </div>
      </div>

      <div className={cn('flex h-full flex-wrap justify-center gap-x-5 gap-y-10')}>
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCardWrapper;
