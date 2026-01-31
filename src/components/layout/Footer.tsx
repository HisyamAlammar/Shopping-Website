import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-serif font-bold text-xl mb-4">ELEGANT</h3>
                    <p className="text-muted-foreground text-sm">
                        Redefining luxury for the modern woman.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium mb-4">Shop</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/shop" className="hover:text-primary">All Products</Link></li>
                        <li><Link href="/shop" className="hover:text-primary">New Arrivals</Link></li>
                        <li><Link href="/shop" className="hover:text-primary">Best Sellers</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium mb-4">Newsletter</h4>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 border rounded px-3 py-2 text-sm"
                        />
                        <button className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                &copy; 2024 Elegant Fashion. All rights reserved.
            </div>
        </footer>
    );
}
