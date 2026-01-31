import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const products = [
        {
            name: "Silk Evening Gown",
            description: "A luxurious silk gown for special occasions. Features a flowing silhouette and delicate straps.",
            price: 299.99,
            image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2424&auto=format&fit=crop",
            category: "Dresses"
        },
        {
            name: "Cashmere Sweater", // Classic / Cozy
            description: "Soft and warm cashmere sweater in neutral beige. Perfect for layering.",
            price: 149.50,
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
            category: "Tops"
        },
        {
            name: "Pleated Midi Skirt",
            description: "Elegant pleated skirt in a metallic finish. Versatile for day or night.",
            price: 89.00,
            image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1964&auto=format&fit=crop",
            category: "Bottoms"
        },
        {
            name: "Leather Tote Bag",
            description: "Genuine leather tote with ample space for essentials. Structured and chic.",
            price: 210.00,
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938&auto=format&fit=crop",
            category: "Accessories"
        },
        {
            name: "Gold Hoop Earrings",
            description: "Classic gold hoops that add a touch of glamour to any outfit.",
            price: 45.00,
            image: "https://images.unsplash.com/photo-1630019852942-f89202989a51?q=80&w=2062&auto=format&fit=crop",
            category: "Jewelry"
        }
    ]

    console.log('Seeding...')
    for (const p of products) {
        const product = await prisma.product.create({
            data: p,
        })
        console.log(`Created product with id: ${product.id}`)
    }
    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
