import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.css";

function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="header">
      <Link to="/" className="logo">BookNest</Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;