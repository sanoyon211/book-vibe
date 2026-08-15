import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookdetails/${book.bookId}`}
      className="rounded-2xl border border-gray-200 p-4 md:p-6 hover:scale-105 cursor-pointer ease-in-out duration-200"
    >
      <div className="bg-gray-200 flex items-center justify-center py-4 rounded-2xl">
        <img
          src={book.image}
          alt="Shoes"
          className=" w-55 h-75 shadow-lg object-cover object-center rounded-md"
        />
      </div>
      <div className="space-y-4 mt-4">
        <div className="flex gap-6">
          {book.tags.map((tag, index) => (
            <p
              key={index}
              className="text-lg text-green-500 px-3 py-1 bg-gray-100 rounded-full"
            >
              {tag}
            </p>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold">{book.bookName}</h2>
          <p className="font-semibold text-lg mt-2">By: {book.author}</p>
        </div>
        <hr className="border-gray-200" />
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-lg">{book.category}</p>
          <p className="flex gap-1 items-center font-semibold text-lg">
            {book.rating} <FaRegStar />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
