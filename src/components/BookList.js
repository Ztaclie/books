import BookShow from "./BookShow";

function BookList({ books, onDeleteBook }) {
  const renderedBooks = books.map((book) => {
    return <BookShow onDeleteBook={onDeleteBook} key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
