import Image4 from "../../assets/gym/24.jpeg";
import { Text } from "../atoms/Text";

const CorpAbout2 = () => {
  return (
    <section className="w-full md:pt-40 h-auto flex items-center bg-zinc-950">
      <main className="w-full md:h-[700px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10 md:gap-10  md:py-0">
        <div className="w-full md:h-[700px] h-[300px] ">
          <div
            className="col-span-3 row-span-2 w-full h-full"
            style={{
              backgroundImage: `url(${Image4})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",

            }}
          />
        </div>
        <div className="h-full w-full mx-2 flex flex-col justify-center items-start gap-4 pb-8 md:pb-12">
          <div className="flex flex-col mt-5 md:mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
            <Text
              as="p"
              className="text-amber-500 lg:text-4xl text-2xl tracking-widest uppercase font-medium"
            >
              NEFES VE YOGA EĞİTİMLERİ
            </Text>
            <Text
              as="h1"
              className="absolute text-zinc-500/20 md:-left-3 left-0 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-36 md:-top-20 -top-16 -z-10"
            ></Text>
          </div>
          <Text
            as="h2"
            className="text-zinc-200 mt-7 md:mt-10 mb-4 text-lg tracking-wide"
          >
            <ul typeof="circle">
              <li>
                Temel Yoga
                <div className="pl-4">
                  <ul>
                    <li>- Hatha Yoga</li>
                    <li>- Vinyasa Yoga</li>
                    <li>- Kundalini Yoga</li>
                    <li>- Iyengar Yoga</li>
                    <li>- Ashtanga Yoga</li>
                  </ul>
                </div>
              </li>
              <li className="mt-2 md:mt-5">
                Yoga Türleri
                <div className="pl-4">
                  <ul>
                    <li>- Restoratif Yoga</li>
                    <li>- Yin Yoga</li>
                    <li>- Güç Yoga</li>
                    <li>- Aerial Yoga</li>
                    <li>- Bikram Yoga</li>
                  </ul>
                </div>
              </li>
              <li className="mt-2 md:mt-5">
                Nefes Egzersizleri
                <div className="pl-4">
                  <ul>
                    <li>- Pranayama</li>
                    <li>- Kapalabhati</li>
                    <li>- Ujjayi Nefesi</li>
                    <li>- Bhastrika</li>
                    <li>- Anulom Vilom</li>
                  </ul>
                </div>
              </li>
            </ul>
          </Text>
        </div>
      </main>
    </section>
  );
};

export default CorpAbout2;
