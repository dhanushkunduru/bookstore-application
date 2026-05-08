import "./index.css";

function Checkout() {
  return (
    <main className="checkout-page">
      <div className="checkout-card">
        <h1>Checkout</h1>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Mobile Number" />
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Checkout;