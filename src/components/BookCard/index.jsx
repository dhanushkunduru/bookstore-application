import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.css";

function BookCard({ book }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>
        <img src={book.image} alt={book.title} />
      </Link>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <h4>₹{book.price}</h4>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
}

export default BookCard;