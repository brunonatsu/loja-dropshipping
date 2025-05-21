
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const products = [
  {
    id: 1,
    name: "Fone de Ouvido Lehmox",
    price: "R$32,99",
    category: "Eletrônicos",
    image: "https://m.media-amazon.com/images/I/61fBlwIXzuL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    name: "Películas de Vidro (kit 200)",
    price: "R$87,00",
    category: "Eletrônicos",
    image: "https://cf.shopee.com.br/file/abc123"
  },
  {
    id: 3,
    name: "Luvas Descartáveis (100 unid)",
    price: "R$10,39",
    category: "Pizzaria",
    image: "https://cf.shopee.com.br/file/def456"
  },
  {
    id: 4,
    name: "Espátula para Pizza Tramontina",
    price: "R$37,81",
    category: "Pizzaria",
    image: "https://tramontina.com.br/images/espatula.jpg"
  }
];

const pagamentoLink = "https://link.mercadopago.com.br/lojadobrunopizza";

export default function DropshippingStore() {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Loja do Bruno</h1>
        <p className="text-gray-600 text-lg">Eletrônicos e utensílios para pizzaria com pagamento via Mercado Pago!</p>
      </header>

      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="flex justify-center mb-6 flex-wrap gap-2">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.filter(p => p.category === category).map((product) => (
                <Card key={product.id} className="rounded-2xl shadow-lg">
                  <img src={product.image} alt={product.name} className="rounded-t-2xl h-48 object-cover w-full" />
                  <CardContent className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-base text-gray-700 mb-2">{product.category}</p>
                    <p className="text-lg font-bold mb-4">{product.price}</p>
                    <a href={pagamentoLink} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">Finalizar Compra</Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        © 2025 Loja do Bruno. Todos os direitos reservados.
      </footer>
    </div>
  );
}
