import Image4 from "../../assets/gym/25.jpeg";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";

const CorpAbout3 = () => {
  return (
    <section className="w-full md:py-40 h-auto flex items-center bg-zinc-950 mb-20">
      <main className="w-full md:h-[700px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10 md:gap-10 md:py-0">
        <div className="order-1 md:order-2 w-full md:h-[700px] h-[300px] ">
          <Image
            alt="Welcome Image"
            objectCover="object-cover"
            className="col-span-3 row-span-2 w-full h-full"
            image={Image4}
          />
        </div>
        <div className="order-2 md:order-1 h-full w-full flex flex-col justify-center items-start md:gap-4 mx-2 md:pb-12">
          <div className="flex flex-col md:mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
            <Text
              as="p"
              className="text-amber-500 lg:text-4xl text-2xl tracking-widest uppercase mt-5 md:mt-0 font-medium"
            >
              Spor Branşları
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
                Takım Sporları
                <div className="pl-4">
                  <ul>
                    <li>- Futbol</li>
                    <li>- Basketbol</li>
                    <li>- Voleybol</li>
                    <li>- Hentbol</li>
                    <li>- Ragbi</li>
                  </ul>
                </div>
              </li>
              <li className="mt-2 md:mt-5">
                Bireysel Sporlar
                <div className="pl-4">
                  <ul>
                    <li>- Tenis</li>
                    <li>- Bisiklet</li>
                    <li>- Yüzme</li>
                    <li>- Koşu</li>
                    <li>- Eskrim</li>
                  </ul>
                </div>
              </li>
              <li className="mt-2 md:mt-5">
                Outdoor Aktiviteler
                <div className="pl-4">
                  <ul>
                    <li>- Yürüyüş</li>
                    <li>- Koşu parkurları</li>
                    <li>- Dağcılık</li>
                    <li>- Bisiklet sürme</li>
                    <li>- ​​Yürüyüş turları</li>
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

export default CorpAbout3;
