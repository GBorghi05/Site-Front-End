import { useState } from "react";

const products = [
  { id: 1, name: "Camiseta React", price: 49.9 },
  { id: 2, name: "Caneca Tailwind", price: 29.9 },
  { id: 3, name: "Adesivo JavaScript", price: 9.9 },
];

export default function App() {
  const [cart, setCart] = useState([]);

    function addToCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
}

  function getTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
}

  return (
    <div className="min-h-screen bg-gray-900 text-yellow-400 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Minha Lojinha React + Tailwind</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-yellow-300 mb-4">R$ {product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 rounded transition"
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">Carrinho</h2>
        {cart.length === 0 ? (
          <p className="text-yellow-300">Seu carrinho está vazio.</p>
        ) : (
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="border-t border-yellow-600 pt-4 text-xl font-bold flex justify-between">
          <span>Total:</span>
          <span>R$ {getTotal()}</span>

        </div>
      </div>
    </div>
  );
}