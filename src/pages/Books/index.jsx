import BookCard from "../../components/BookCard";
import { books } from "../../data/books";
import "./index.css";

function Books() {
  return (
    <main className="books-page">
      <h1>All Books</h1>

      <div className="books-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}

export default Books;