/*eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          <Pizza pizzaobj={pizza} key={pizza.name} />;
        })}
      </ul>
      {/* <Pizza
        name="Pizza Spinacci"
        ingredient="Tomato,mozarella,spinachi"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato,mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
      <Pizza /> */}
    </main>
  );
}
function Footer() {
  //   const hour = new Date().getHours();
  //   const openHour = 12;
  //   const closeHour = 24;
  //   const isOpen = hour >= openhour && hour <= closehour;
  //console.log(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!!!
    </footer>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{propspizzaobj.name}</h3>
        <p>{props.pizzaobj.ingredient}</p>
        <span>{props.pizzaobj.price + 3}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
