import ProductCardWrapper from '@/app/best-sellers/components/ProductCardWrapper';
import { SparklesCore } from '@/components/ui/sparkles';
import { ALLPRODUCTS } from '@/lib/products';

function BestSellers() {
  return (
    <div className="relative h-full pt-64">
      <SparklesCore
        background="#000000"
        minSize={0.8}
        maxSize={1}
        particleDensity={1}
        className="absolute inset-0"
        particleColor="#FFFFFF"
      />
      {ALLPRODUCTS.map((section) => (
        <ProductCardWrapper
          key={section.header}
          header={section.header}
          products={section.products}
        />
      ))}
    </div>
  );
}

export default BestSellers;
