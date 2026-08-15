import { FaRegStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();

  const expectedBook = books.find(book => book.bookId == id);
  console.log(expectedBook);

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col lg:flex-row gap-5 rounded-2xl border border-gray-200 p-4 md:p-6 ">
        <div className="bg-gray-200 flex items-center justify-center py-4 rounded-2xl w-full">
          <img
            src={expectedBook.image}
            alt="Shoes"
            className="  h-100 md:h-200 shadow-lg object-cover object-center rounded-md"
          />
        </div>
        <div className="space-y-4 mt-4 w-full p-4">
          <h2 className="text-5xl font-bold">{expectedBook.bookName}</h2>
          <p className="font-semibold text-xl mt-2">
            By: {expectedBook.author}
          </p>
          <hr className="border-gray-200" />
          <p className="font-semibold text-lg">{expectedBook.category}</p>
          <hr className="border-gray-200" />
          <p className="text-lg text-gray-600 text-left">
            <span className="text-black font-semibold">Review:</span>{' '}
            {expectedBook.review}
          </p>
          <div className="flex gap-6 items-center">
            <p>Tags:</p>
            {expectedBook.tags.map((tag, index) => (
              <p
                key={index}
                className="text-lg text-green-500 px-3 py-1 bg-gray-100 rounded-full"
              >
                {tag}
              </p>
            ))}
          </div>
          <hr className="border-gray-200" />
          <div className="flex flex-row gap-20">
            <div className="flex flex-col gap-2">
              <p className="text-lg text-gray-600">Number of Pages:</p>
              <p className="text-lg text-gray-600">Publisher:</p>
              <p className="text-lg text-gray-600">Year of Publishing:</p>
              <p className="text-lg text-gray-600">Rating:</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">{expectedBook.totalPages}</p>
              <p className="font-semibold text-lg">{expectedBook.publisher}</p>
              <p className="font-semibold text-lg">
                {expectedBook.yearOfPublishing}
              </p>
              <p className="flex gap-1 items-center font-semibold text-lg">
                {expectedBook.rating} <FaRegStar />
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="btn btn-outline font-bold text-lg">Read</button>
            <button className="btn btn-accent text-white text-lg font-bold">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
