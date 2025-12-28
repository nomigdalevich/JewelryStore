import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartArr, sum, currentUserName, removeFromCart }) {
  const navigate = useNavigate();

  const toPay = () => {
    if (currentUserName == null) {
      navigate("/login");
    } else {
      navigate("/pay");
    }
  };

  const toProuducts = () => {
    navigate("/prouductsPage");
  };

  return (
    <>
      {cartArr.length === 0 ? (
        <div className="emptyCart">
          <p>Your cart is still empty</p>
          <button onClick={toProuducts}>keep buying</button>
        </div>
      ) : (
        <div className="cartBox">
          <div className="cartItemsContainer">
            {cartArr.map(j => (
              <div className="cartCard" key={j.id }>
                <img src={`/images/${j.src}`} alt={j.name} />
                <div className="cartContent">
                  <p>{j.name}</p>
                  <p>{j.price}₪</p>
                  <button onClick={() => removeFromCart(j.id, j.price)}>
                    remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cartSummary">
            <p>total: {sum}₪</p>
            <div className="buttonsCart">
              <button className="payBtn"  onClick={toPay}>payment</button>
              <button className="continueBtn" onClick={toProuducts}>keep buying</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
