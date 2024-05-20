import banner from "../../assets/gym/bannerimg.png";

const Banner = () => {
  return (
    <div className="relative flex  items-center justify-center h-[270px] md:h-[450px] w-full mb-20">
      <img src={banner} className="object-cover w-full h-full" alt="Banner" />
      <div className="absolute text-center space-y-2 md:space-y-7">
        <h1 className="text-white font-bold text-3xl md:text-6xl">
          UĞUR ÇOLAK
        </h1>
        <h1 className="text-white font-bold text-2xl md:text-5xl">
          0536 607 1938
        </h1>
        <button className="text-white rounded-md font-semibold px-6 py-2 bg-gradient-to-r to-amber-500 from-red-500">
          <a href="/uzaktan-egitim-paketleri">TÜM PAKETLERİ GÖR</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
