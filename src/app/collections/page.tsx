import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const COLLECTIONS = [
    {
        id: "spring-summer",
        name: "Spring/Summer 2024",
        description: "Light, airy fabrics meets bold prints. Perfect for the season.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2670&auto=format&fit=crop",
        link: "/shop"
    },
    {
        id: "evening-wear",
        name: "Evening Elegance",
        description: "Sophisticated gowns and cocktail dresses for your special moments.",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2424&auto=format&fit=crop",
        link: "/shop"
    },
    {
        id: "essentials",
        name: "Modern Essentials",
        description: "The building blocks of a versatile, chic wardrobe.",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2605&auto=format&fit=crop",
        link: "/shop"
    },
    {
        id: "accessories",
        name: "State-of-Art Accessories",
        description: "Complete your look with our hand-crafted accessory line.",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop",
        link: "/shop"
    }
];

export default function CollectionsPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-serif font-bold text-center mb-4 animate-fade-in-up">
                    Curated Collections
                </h1>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 animate-fade-in-up delay-100">
                    Explore our thoughtfully designed themes, each telling a unique story of style and grace.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {COLLECTIONS.map((collection, idx) => (
                        <div key={collection.id} className="group relative overflow-hidden rounded-lg aspect-[16/9] animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                            <Image
                                src={collection.image}
                                alt={collection.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-2xl font-serif font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{collection.name}</h2>
                                <p className="mb-6 max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{collection.description}</p>
                                <Link href={collection.link}>
                                    <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                        View Collection
                                    </Button>
                                </Link>
                            </div>
                            {/* Always visible title overlay for mobile/quick scan */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity">
                                <h2 className="text-xl font-serif font-bold text-white">{collection.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
