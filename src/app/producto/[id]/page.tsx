import Image from "next/image"
import { Heart, ShoppingBag, Star } from "lucide-react"

export default function ProductoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Galería de imágenes */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border max-w-md mx-auto">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Camiseta de algodón"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-md border hover:border-black"
              >
                <Image src={`/placeholder.svg?height=150&width=150`} alt={`Vista ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Camiseta de Algodón Premium</h1>
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-black text-black" : "text-gray-400"}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500">(128 reseñas)</span>
            </div>
            <p className="text-2xl font-bold mt-4">€29,99</p>
          </div>

          <p className="text-gray-500">
            Camiseta de algodón 100% orgánico, perfecta para cualquier ocasión. Diseño minimalista y corte moderno que
            se adapta a todos los estilos.
          </p>

          {/* Selección de color */}
          <div>
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex space-x-2">
              {["bg-black", "bg-white border", "bg-blue-500", "bg-red-500"].map((color, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-full ${color} ${i === 0 ? "ring-2 ring-black ring-offset-2" : ""}`}
                  aria-label={`Color ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Selección de talla */}
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">Talla</h3>
              <button className="text-sm text-black underline">Guía de tallas</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {["XS", "S", "M", "L", "XL"].map((size, i) => (
                <button
                  key={i}
                  className={`py-2 border rounded-md ${i === 2 ? "bg-black text-white" : "hover:border-black"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button className="flex-1 bg-black text-white py-3 px-4 rounded-md flex items-center justify-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Añadir al carrito
            </button>
            <button className="flex-1 border border-gray-300 py-3 px-4 rounded-md flex items-center justify-center">
              <Heart className="mr-2 h-5 w-5" />
              Añadir a favoritos
            </button>
          </div>

          {/* Información adicional */}
          <hr className="my-6 border-t border-gray-200" />

          {/* Tabs simples */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 border-b">
              <button className="py-2 border-b-2 border-black font-medium">Descripción</button>
              <button className="py-2 text-gray-500 hover:text-black">Detalles</button>
              <button className="py-2 text-gray-500 hover:text-black">Envío</button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">
                Esta camiseta de algodón premium está diseñada para ofrecer máxima comodidad y estilo. El tejido de alta
                calidad garantiza durabilidad y una sensación suave al tacto. Perfecta para el uso diario o para
                ocasiones especiales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">También te puede gustar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border rounded-md overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Producto relacionado ${i}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium truncate">Producto relacionado {i}</h3>
                <p className="text-sm text-gray-500">€24,99</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
