import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-50">
                    <Image
                        src="https://images.unsplash.com/photo-1466695108335-44674aa2058b?q=80&w=2668&auto=format&fit=crop"
                        alt="Fashion Studio"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 text-center max-w-3xl px-4 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Story</h1>
                    <p className="text-lg md:text-xl font-light opacity-90">
                        Crafting elegance for the modern woman since 2010.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold">The Essence of Style</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            At Elegant Fashion, we believe that style is a way to say who you are without having to speak.
                            Our journey began with a simple mission: to empower women through fashion that is both timeless and contemporary.
                            Every piece in our collection is thoughtfully curated to ensure the highest quality and best fit.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We are committed to sustainability and ethical practices. Our fabrics are sourced from
                            responsible partners, and we work closely with artisans who share our passion for excellence.
                        </p>
                        <div className="pt-4">
                            <Link href="/shop">
                                <Button variant="outline" size="lg">Explore Collection</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1549591419-7569e5d794cb?q=80&w=2670&auto=format&fit=crop"
                            alt="Our Atelier"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-background rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Quality First</h3>
                            <p className="text-muted-foreground">
                                We never compromise on the quality of our materials or craftsmanship.
                            </p>
                        </div>
                        <div className="p-8 bg-background rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Sustainable Future</h3>
                            <p className="text-muted-foreground">
                                Dedicated to reducing our environmental footprint one garment at a time.
                            </p>
                        </div>
                        <div className="p-8 bg-background rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Customer Love</h3>
                            <p className="text-muted-foreground">
                                Your satisfaction is at the heart of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
