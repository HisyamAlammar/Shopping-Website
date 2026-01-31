"use client"

import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/product/ProductCard";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
    const [priceRange, setPriceRange] = useState<number>(300);

    const categories = ["All Products", "Dresses", "Tops", "Bottoms", "Accessories", "Jewelry"];

    const filteredProducts = useMemo(() => {
        return MOCK_PRODUCTS.filter(product => {
            const categoryMatch = selectedCategory === "All Products" || product.category === selectedCategory;
            const priceMatch = product.price <= priceRange;
            return categoryMatch && priceMatch;
        });
    }, [selectedCategory, priceRange]);

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <div className="container mx-auto px-4 py-8 flex-1">
                <h1 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in-up">
                    The Collection
                </h1>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 space-y-8 animate-fade-in-up delay-100">
                        <div>
                            <h3 className="font-medium text-lg mb-4 border-b pb-2">Categories</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {categories.map((category) => (
                                    <li
                                        key={category}
                                        className={cn(
                                            "cursor-pointer transition-colors",
                                            selectedCategory === category ? "text-primary font-medium" : "hover:text-primary"
                                        )}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-lg mb-4 border-b pb-2">Max Price: ${priceRange}</h3>
                            <div className="flex items-center gap-2 text-sm">
                                <input
                                    type="range"
                                    min="0"
                                    max="500"
                                    step="10"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                    className="w-full accent-primary h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="animate-fade-in-up">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20 text-muted-foreground border-2 border-dashed rounded-lg">
                                No products found matching your filters.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
