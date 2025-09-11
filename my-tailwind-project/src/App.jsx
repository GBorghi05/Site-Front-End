import './app.css';
import { useState } from "react";
import camisetaPreta from "./assets/camiseta-preta.jpg";
import camisetaPolo from "./assets/camiseta-polo.jpg";
import camisetaCrest from "./assets/camiseta-crest.jpg";
import camisetaBranca from "./assets/camiseta-branca.jpg";
import jaqueta from "./assets/jaqueta.jpg";
import agasalho from "./assets/agasalho.jpg";


const products = [
  {
    id: 1,
    name: "Camiseta Preta Masculina",
    price: 116.99,
    img: camisetaPreta
  },
  {
    id: 2,
    name: "Camiseta Polo Masculina",
    price: 99.99,
    img: camisetaPolo
  },
  {
    id: 3,
    name: "Camiseta Estampada Masculina",
    price: 116.99,
    img: camisetaCrest
  },
  {
    id: 4,
    name: "Camiseta Branca Masculina",
    price: 99.99,
    img: camisetaBranca
  },
  {
    id: 5,
    name: "Jaqueta Masculina",
    price: 249.99,
    img: jaqueta
  },
  {
    id: 6,
    name: "Agasalho Masculino",
    price: 299.99,
    img: agasalho
  }
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

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <h1>LuxWear</h1>
          <nav>
            <a href="#">Ofertas</a>
            <a href="#">Lançamentos</a>
            <a href="#">Masculino</a>
            <a href="#">Feminino</a>
            <a href="#">Infantil</a>
          </nav>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="container" style={{ paddingTop: '7rem', paddingBottom: '2rem' }}>
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
              <button onClick={() => addToCart(product)}>
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
