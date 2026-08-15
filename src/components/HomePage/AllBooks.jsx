import { use } from 'react';
import BookCard from './BookCard';

const booksData = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
  const bookData = use(booksData);

  return (
    <>
      <section className="container mx-auto my-10">
        <h2 className="text-center font-bold text-5xl mb-8 ">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
          {bookData.map(book => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllBooks;
