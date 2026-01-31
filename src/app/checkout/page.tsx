"use client"

import { Navbar } from "@/components/layout/Navbar"
import { useCart } from "@/components/providers/CartProvider"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
    const { total, clearCart } = useCart()
    const [isProcessing, setIsProcessing] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false)
            setIsSuccess(true)
            clearCart()
        }, 2000)
    }

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <main className="container mx-auto px-4 flex-1 flex flex-col items-center justify-center text-center space-y-6">
                    <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-in zoom-in duration-300">
                        <CheckCircle className="h-12 w-12" />
                    </div>
                    <h1 className="text-4xl font-serif font-bold">Order Confirmed!</h1>
                    <p className="text-muted-foreground max-w-md">
                        Thank you for your purchase. We have received your order and valid dummy payment.
                    </p>
                    <Link href="/">
                        <Button size="lg" className="mt-8">Continue Shopping</Button>
                    </Link>
                </main>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="container mx-auto px-4 py-8 flex-1">
                <h1 className="text-3xl font-serif font-bold mb-8 text-center">Checkout</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Form */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-medium border-b pb-2">Shipping Details</h2>
                        <form id="checkout-form" onSubmit={handlePayment} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <input required className="w-full p-2 border rounded-md" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <input required className="w-full p-2 border rounded-md" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input required type="email" className="w-full p-2 border rounded-md" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Address</label>
                                <input required className="w-full p-2 border rounded-md" placeholder="123 Fashion St" />
                            </div>

                            <h2 className="text-xl font-medium border-b pb-2 pt-6">Payment</h2>
                            <div className="p-4 border rounded-md bg-muted/20 text-sm text-muted-foreground">
                                <p>This is a secure simulation. No real money will be charged.</p>
                                <div className="mt-4 space-y-2">
                                    <input required className="w-full p-2 border rounded-md" placeholder="Card Number (Any dummy value)" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input required className="w-full p-2 border rounded-md" placeholder="MM/YY" />
                                        <input required className="w-full p-2 border rounded-md" placeholder="CVC" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-medium border-b pb-2">Your Order</h2>
                        <div className="bg-muted/10 p-6 rounded-lg border space-y-4">
                            <div className="flex justify-between items-center">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between items-center font-bold text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <Button
                                type="submit"
                                form="checkout-form"
                                className="w-full mt-6"
                                size="lg"
                                disabled={isProcessing}
                            >
                                {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
