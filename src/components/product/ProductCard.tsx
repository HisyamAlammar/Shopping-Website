import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"

// Define interface manually to avoid Prisma dependency during preview
interface Product {
    id: string
    name: string
    description: string
    price: any
    image: string
    category: string
}

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative">
            <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={750}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-900 group-hover:underline">
                        <Link href={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${Number(product.price).toFixed(2)}</p>
            </div>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 left-4 right-4">
                <Button className="w-full bg-white text-black hover:bg-white/90 shadow-lg">
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}
