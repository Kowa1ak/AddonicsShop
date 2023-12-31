// Header.js

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let totalSum = 0;

  props.orders.forEach((order) => {
    totalSum += order.price * order.quantity;
  });

  return (
    <div>
      {props.orders.map((el) => (
        <Order
          key={el.id}
          item={el}
          onDelete={props.onDelete}
          onIncreaseQuantity={props.onIncreaseQuantity}
          onDecreaseQuantity={props.onDecreaseQuantity}
        />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(totalSum)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров нет</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">Addonics</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
