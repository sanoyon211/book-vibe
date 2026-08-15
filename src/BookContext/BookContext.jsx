import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProvide = ({ children }) => {
  const [storeReadBooks, setStoreReadBooks] = useState([]);
  const [storeWishlistBooks, setStoreWishlistBooks] = useState([]);

  const handleReadBooks = readBook => {
    const isExistBook = storeReadBooks.find(
      book => book.bookId == readBook.bookId,
    );

    if (isExistBook) {
      toast.error(`${readBook.bookName} is already exist`);
      return;
    }

    setStoreReadBooks([...storeReadBooks, readBook]);
    toast.success(`${readBook.bookName} is added to read books`);
  };

  const handleRemoveReadBook = readBook => {
    setStoreReadBooks(
      storeReadBooks.filter(book => book.bookId != readBook.bookId),
    );
    toast.error(`${readBook.bookName} is removed from read books`);
  };

  const handleWishlistBooks = wishlistBook => {
    const isExistBook = storeWishlistBooks.find(
      book => book.bookId == wishlistBook.bookId,
    );

    if (isExistBook) {
      toast.error(`${wishlistBook.bookName} is already exist`);
      return;
    }

    setStoreWishlistBooks([...storeWishlistBooks, wishlistBook]);
    toast.success(`${wishlistBook.bookName} is added to Wishlist`);
  };

  const handleRemoveWishlistBook = wishlistBook => {
    setStoreWishlistBooks(
      storeWishlistBooks.filter(book => book.bookId != wishlistBook.bookId),
    );
    toast.error(`${wishlistBook.bookName} is removed from Wishlist`);
  };

  const data = {
    storeReadBooks,
    handleReadBooks,
    handleWishlistBooks,
    storeWishlistBooks,
    handleRemoveReadBook,
    handleRemoveWishlistBook,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvide;
