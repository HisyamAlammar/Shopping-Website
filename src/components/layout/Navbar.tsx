"use client"

import * as React from "react"
import Link from "next/link"
import { ShoppingBag, Search, User, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/components/providers/CartProvider"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { cartCount } = useCart()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold tracking-tighter">
                    ELEGANT
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/shop" className="hover:text-primary transition-colors">
                        Shop
                    </Link>
                    <Link href="/collections" className="hover:text-primary transition-colors">
                        Collections
                    </Link>
                    <Link href="/about" className="hover:text-primary transition-colors">
                        About
                    </Link>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                        <User className="h-5 w-5" />
                    </Button>
                    <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingBag className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-[10px] text-white flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden border-t p-4 bg-background">
                    <nav className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-widest">
                        <Link href="/" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/shop" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                            Shop
                        </Link>
                        <Link href="/collections" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                            Collections
                        </Link>
                        <Link href="/about" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
