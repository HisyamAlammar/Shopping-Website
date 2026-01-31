"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { useCart } from "@/components/providers/CartProvider"
import { MOCK_PRODUCTS } from "@/lib/mockData"
import { Button } from "@/components/ui/Button"
import { Navbar } from "@/components/layout/Navbar"
import { Check } from "lucide-react"
import { useState } from "react"

export default function ProductPage() {
    const params = useParams()
    const { addItem } = useCart()
    const [isAdded, setIsAdded] = useState(false)

    const product = MOCK_PRODUCTS.find(p => p.id === params.id)

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-xl">Product not found</p>
                </div>
            </div>
        )
    }

    const handleAddToCart = () => {
        addItem(product)
        setIsAdded(true)
        setTimeout(() => setIsAdded(false), 2000)
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="container mx-auto px-4 py-12 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={600}
                                height={800}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{product.category}</p>
                            <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
                            <p className="text-2xl font-light">${product.price.toFixed(2)}</p>
                        </div>

                        <div className="prose prose-sm text-muted-foreground">
                            <p>{product.description}</p>
                        </div>

                        {product.details && (
                            <div className="border-t border-b py-6">
                                <h3 className="font-medium mb-3">Details</h3>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    {product.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="pt-6">
                            <Button
                                size="lg"
                                className="w-full md:w-auto min-w-[200px]"
                                onClick={handleAddToCart}
                                disabled={isAdded}
                                variant={isAdded ? "secondary" : "default"}
                            >
                                {isAdded ? (
                                    <span className="flex items-center gap-2">
                                        <Check className="w-4 h-4" /> Added to Cart
                                    </span>
                                ) : (
                                    "Add to Cart"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
