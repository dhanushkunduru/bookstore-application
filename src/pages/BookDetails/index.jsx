import { useParams } from "react-router-dom";
import { useContext } from "react";
import { books } from "../../data/books";
import { CartContext } from "../../context/CartContext";
import "./index.css";

function BookDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const book = books.find(eachBook => eachBook.id === Number(id));

  if (!book) {
    return <h1 className="details-page">Book Not Found</h1>;
  }

  return (
    <main className="details-page">
      <img src={book.image} alt={book.title} />

      <div>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <h2>₹{book.price}</h2>
        <p>This is a beautiful book for readers who love learning and stories.</p>
        <button onClick={() => addToCart(book)}>Add to Cart</button>
      </div>
    </main>
  );
}

export default BookDetails;