export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    details?: string[];
}

export const MOCK_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Silk Evening Gown",
        description: "A luxurious silk gown for special occasions. Features a flowing silhouette and delicate straps.",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2424&auto=format&fit=crop",
        category: "Dresses",
        details: ["100% Silk", "Dry Clean Only", "Invisible Zipper", "Floor Length"]
    },
    {
        id: "2",
        name: "Cashmere Sweater",
        description: "Soft and warm cashmere sweater in neutral beige. Perfect for layering.",
        price: 149.50,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
        category: "Tops",
        details: ["100% Cashmere", "Hand Wash Cold", "Relaxed Fit", "Ribbed Cuffs"]
    },
    {
        id: "3",
        name: "Pleated Midi Skirt",
        description: "Elegant pleated skirt in a metallic finish. Versatile for day or night.",
        price: 89.00,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1964&auto=format&fit=crop",
        category: "Bottoms",
        details: ["Polyester Blend", "Machine Washable", "Elastic Waistband", "Midi Length"]
    },
    {
        id: "4",
        name: "Leather Tote Bag",
        description: "Genuine leather tote with ample space for essentials. Structured and chic.",
        price: 210.00,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938&auto=format&fit=crop",
        category: "Accessories",
        details: ["Genuine Leather", "Laptop Compartment", "Magnetic Closure", "Gold Hardware"]
    },
    {
        id: "5",
        name: "Gold Hoop Earrings",
        description: "Classic gold hoops that add a touch of glamour to any outfit.",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=2062&auto=format&fit=crop",
        category: "Jewelry",
        details: ["18k Gold Plated", "Hypoallergenic", "Lightweight", "Latch Back"]
    }
];
