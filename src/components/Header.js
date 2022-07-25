import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Order } from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return <div className="empti">Товаров нет</div>;
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="headerFlex">
        <div className="logo">Книжная лавка</div>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Социалные сети</li>
        </ul>

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
