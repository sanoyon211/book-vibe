import { useContext, useState } from 'react';
import { Link } from 'react-router';
import { BookContext } from '../../BookContext/BookContext';

const Books = () => {
  const {
    storeReadBooks,
    storeWishlistBooks,
    handleRemoveReadBook,
    handleRemoveWishlistBook,
  } = useContext(BookContext);

  const [activeTab, setActiveTab] = useState('read');

  const displayedBooks =
    activeTab === 'read' ? storeReadBooks : storeWishlistBooks;

  const handleRemove =
    activeTab === 'read' ? handleRemoveReadBook : handleRemoveWishlistBook;

  return (
    <div className="container mx-auto my-10 px-4 min-h-screen">
      <div className="bg-gray-100 rounded-2xl py-6 text-center mb-8">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex border-b border-gray-200 bg-gray-50/50 p-1 rounded-t-xl">
          <button
            onClick={() => setActiveTab('read')}
            className={`flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === 'read'
                ? 'bg-green-600 text-white shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Read Books
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === 'wishlist'
                ? 'bg-green-600 text-white shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Wishlist Books
          </button>
        </div>
      </div>

      {/* Book list */}
      {displayedBooks.length === 0 ? (
        <p className="text-center text-gray-500">No books found here yet.</p>
      ) : (
        <div className="space-y-4">
          {displayedBooks.map(book => (
            <div
              key={book.bookId}
              className="flex flex-col md:flex-row gap-5 border border-gray-200 rounded-2xl p-4"
            >
              <div className="bg-gray-100 rounded-xl flex items-center justify-center p-2 md:w-40">
                <img
                  src={book.image}
                  alt={book.bookName}
                  className="h-32 object-cover rounded-md"
                />
              </div>

              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-bold">{book.bookName}</h2>
                <p className="text-gray-600">By: {book.author}</p>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span>Tag:</span>
                  {book.tags?.map((tag, index) => (
                    <span key={index} className="text-green-500 font-medium">
                      #{tag}
                    </span>
                  ))}
                  <span className="text-gray-500">
                    | Year of Publishing: {book.yearOfPublishing}
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  Publisher: {book.publisher} &nbsp;|&nbsp; Page:{' '}
                  {book.totalPages}
                </p>

                <hr className="border-gray-200" />

                <div className="flex items-center gap-4">
                  <span className="badge badge-outline">
                    Category: {book.category}
                  </span>
                  <span className="badge badge-warning">
                    Rating: {book.rating}
                  </span>

                  <Link to={`/bookdetails/${book.bookId}`} className="ml-auto">
                    <button className="btn btn-success text-white rounded-full">
                      View Details
                    </button>
                  </Link>

                  {/* Add remove button */}
                  <button
                    onClick={() => handleRemove(book)}
                    className="btn btn-error text-white rounded-full"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
