import './app.css';
import { useState } from "react";

const products = [
  { id: 1, name: "Camiseta Preta Masculina", price: 116.99, img: "https://via.placeholder.com/300x300" },
  { id: 2, name: "Camiseta Polo Masculina", price: 99.99, img: "https://via.placeholder.com/300x300" },
  { id: 3, name: "Camiseta Crest Masculina", price: 116.99, img: "https://via.placeholder.com/300x300" },
  { id: 4, name: "Camiseta Branca Masculina", price: 99.99, img: "https://via.placeholder.com/300x300" },
  { id: 5, name: "Jaqueta", price: 249.99, img: "https://via.placeholder.com/300x300" },
  { id: 6, name: "Agasalho", price: 299.99, img: "https://via.placeholder.com/300x300" },
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
    return cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  }

  return (
    <div className="min-h-screen bg-black text-yellow-500 pt-[140px]">
      
      {/* Header full width */}
      <header className="bg-gray-900 fixed top-0 w-full z-50 shadow-md">
        <div className="container flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold tracking-wide">LuxWear</h1>
          <nav className="space-x-6 font-medium">
            <a href="#">Ofertas</a>
            <a href="#">Lançamentos</a>
            <a href="#">Masculino</a>
            <a href="#">Feminino</a>
            <a href="#">Infantil</a>
          </nav>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Buscar"
              className="p-1 rounded-md text-black"
            />
            <div>
              Carrinho ({cart.length}) - R$ {getTotal()}
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo centralizado */}
      <main className="container p-4">
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.img}
                alt={product.name}
                className="product-img"
              />
              <h2 className="product-title">{product.name}</h2>
              <p className="product-price">R$ {product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
