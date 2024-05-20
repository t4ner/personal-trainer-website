import Image4 from "../../assets/gym/28.jpeg";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";

const CorpAbout = () => {
  return (
    <>
      <div className="flex bg-zinc-950 pt-32 md:pt-44 flex-col items-center relative before:absolute before:-bottom-6 before:left-30 before:w-36 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
        <Text
          as="p"
          className="text-amber-500 md:text-sm text-xs tracking-widest uppercase"
        ></Text>
        <Text
          as="h1"
          className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl"
        >
          KURUMSAL ORGANİZASYONLAR
        </Text>
      </div>{" "}
      <section className="w-full pt-10 md:pt-20 h-auto flex flex-col md:flex-row items-center bg-zinc-950">
        <main className="w-full md:h-[700px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10 gap-5 md:gap-10 py-12 md:py-0">
          <div className="order-1 md:order-2 w-full md:h-[700px] h-[300px] ">
            <Image
              alt="Welcome Image"
              objectCover="object-cover"
              className="col-span-3 row-span-2 w-full h-full"
              image={Image4}
            />
          </div>
          <div className="order-2 md:order-1 h-full w-full flex flex-col mx-2 md:mx-0 justify-center items-start md:gap-4 md:pb-12">
            <div className="flex flex-col md:mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
              <Text
                as="p"
                className="text-amber-500 lg:text-4xl text-2xl tracking-widest uppercase font-medium"
              >
                FITNESS
              </Text>
              <Text
                as="h1"
                className="absolute text-zinc-500/20 md:-left-3 left-0 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-36 md:-top-20 -top-16 -z-10"
              ></Text>
            </div>
            <Text
              as="h2"
              className="text-zinc-200 mt-10 mb-4 text-lg tracking-wide"
            >
              <ul typeof="circle">
                <li>
                  Kardiyo Egzersizleri
                  <div className="pl-4">
                    <ul>
                      <li>- Koşu</li>
                      <li>- Bisiklet</li>
                      <li>- Yüzme</li>
                      <li>- Kürek</li>
                      <li>- Aerobik</li>
                    </ul>
                  </div>
                </li>
                <li className="mt-2 md:mt-5">
                  Kuvvet Antrenmanları
                  <div className="pl-4">
                    <ul>
                      <li>- Halter</li>
                      <li>- Kettlebell</li>
                      <li>- Vücut ağırlığı egzersizleri</li>
                      <li>- CrossFit</li>
                      <li>- Güç antrenmanları</li>
                    </ul>
                  </div>
                </li>
                <li className="mt-2 md:mt-5">
                  Esneklik ve Denge Egzersizleri
                  <div className="pl-4">
                    <ul>
                      <li>- Yoga</li>
                      <li>- Pilates</li>
                      <li>- Stretching (Esneklik egzersizleri)</li>
                      <li>- Tai Chi</li>
                      <li>- Ballet</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </Text>
          </div>
        </main>
      </section>
    </>
  );
};

export default CorpAbout;
