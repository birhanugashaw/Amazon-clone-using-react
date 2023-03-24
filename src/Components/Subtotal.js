import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const Navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (basket) => {
    const total = basket.reduce((amount, item) => item.price + amount, 0);
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
  };

  return (
    <div className="subtotal">
      <div>
        <p>
          Subtotal ({basket.length} items): <strong>{getBasketTotal(basket)}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </div>
      <button onClick={(e) => Navigate('/payment')}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
