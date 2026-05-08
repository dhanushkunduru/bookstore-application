import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.css";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </main>
  );
}

export default Cart;