"use client"

import { Navbar } from "@/components/layout/Navbar"
import { useCart } from "@/components/providers/CartProvider"
import { Button } from "@/components/ui/Button"
import { Trash2, Plus, Minus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
    const { items, removeItem, updateQuantity, total } = useCart()

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="container mx-auto px-4 py-8 flex-1">
                <h1 className="text-3xl font-serif font-bold mb-8">Shopping Cart</h1>

                {items.length === 0 ? (
                    <div className="text-center py-12 space-y-4">
                        <p className="text-muted-foreground">Your cart is empty.</p>
                        <Link href="/shop">
                            <Button>Continue Shopping</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 p-4 border rounded-lg bg-card">
                                    <div className="h-24 w-24 relative overflow-hidden rounded-md bg-muted flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between">
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                                            <p>${item.price.toFixed(2)} each</p>
                                        </div>

                                        <div className="flex justify-between items-center mt-2">
                                            <div className="flex items-center gap-2 border rounded-md p-1">
                                                <button
                                                    className="p-1 hover:bg-muted rounded"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </button>
                                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                                <button
                                                    className="p-1 hover:bg-muted rounded"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <button
                                                className="text-red-500 hover:text-red-600 p-2"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="h-fit p-6 border rounded-lg bg-muted/20 space-y-4">
                            <h2 className="font-medium text-lg">Order Summary</h2>
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <Link href="/checkout" className="block">
                                <Button className="w-full" size="lg">Proceed to Checkout</Button>
                            </Link>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
