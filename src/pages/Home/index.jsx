import { Link } from "react-router-dom";
import BookCard from "../../components/BookCard";
import { books } from "../../data/books";
import "./index.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small-title">BookNest Online Store</p>
          <h1>Buy Your Favourite Books Online</h1>
          <p>
            Discover fiction, self-help, business, motivation and best-selling
            books in one beautiful place.
          </p>
          <Link to="/books">Shop Now</Link>
        </div>

        <div className="hero-slider">
          <div className="slider-track">
            {books.concat(books).map((book, index) => (
              <div className="slider-card" key={`${book.id}-${index}`}>
                <img src={book.image} alt={book.title} />
                <h4>{book.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <h2>Best Sellers</h2>
            <p>Top recommended books for readers like you.</p>
          </div>
          <Link to="/books">View All</Link>
        </div>

        <div className="books-grid">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;