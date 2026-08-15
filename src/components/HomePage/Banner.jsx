import HeroImg from './../../assets/pngwing 1.png';

const Banner = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between p-2 lg:p-8  rounded-xl shadow-2xl my-12">
        <img
          alt="Tailwind CSS hero component"
          src={HeroImg}
          
        />
        <div className="w-[90%] lg:w-[50%]">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-success mt-12 text-white font-semibold ">
            view the List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
