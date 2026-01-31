import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/lib/mockData";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center min-h-[80vh] bg-muted overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/20" /> {/* Overlay */}
        </div>

        <div className="relative z-10 text-center text-white space-y-6 px-4">
          <h2 className="text-sm md:text-base tracking-[0.2em] font-medium uppercase animate-fade-in-up">
            New Collection 2024
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight animate-fade-in-up delay-100">
            Elegance Redefined
          </h1>
          <p className="max-w-md mx-auto text-lg md:text-xl font-light opacity-90 animate-fade-in-up delay-200">
            Discover the latest trends in women's fashion. Timeless pieces for the modern woman.
          </p>
          <div className="pt-4 animate-fade-in-up delay-300">
            <Link href="/shop">
              <Button size="lg" variant="elegant" className="bg-white text-black hover:bg-white/90 border-none">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Carousel */}
      <section className="py-20 overflow-hidden bg-background">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Best Sellers</h2>

        <div className="relative w-full">
          <div className="flex gap-8 animate-scroll hover:pause">
            {/* Duplicated list for seamless infinite scroll */}
            {[...MOCK_PRODUCTS, ...MOCK_PRODUCTS].map((product, idx) => (
              <div key={`${product.id}-${idx}`} className="flex-shrink-0 w-[280px] group cursor-pointer">
                <Link href={`/product/${product.id}`}>
                  <div className="aspect-[3/4] overflow-hidden rounded-md mb-4 bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Preview */}
      <section className="py-20 container mx-auto px-4 bg-muted/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Curated For You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our specially selected themes for every occasion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2670&auto=format&fit=crop"
              alt="Summer Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">Summer Essentials</h3>
                <Link href="/collections">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    View Collection
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2424&auto=format&fit=crop"
              alt="Evening Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">Evening Wear</h3>
                <Link href="/collections">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    View Collection
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
