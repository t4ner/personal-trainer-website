import Image1 from "../../assets/gym/20.jpg";
import { Text } from "../atoms/Text";

const About = () => {
  return (
    <section className="w-full md:my-10 h-auto flex flex-col md:flex-row items-center">
      <main className="w-full md:h-[700px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10 mx-6 md:gap-10 md:py-0">
        <div className="order-2 md:order-1 h-full w-full md:w-auto flex flex-col justify-center items-start gap-4 md:pb-12">
          <div className="flex flex-col md:mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
            <Text
              as="p"
              className="text-amber-500 lg:text-4xl text-2xl tracking-widest uppercase mt-5 font-medium"
            >
              ŞUAN NE YAPIYORUZ ?
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
            2015 yılında LifeCoach Sportive Solutions şirketini kurdum. Kurumsal
            spor organizasyonları kapsamında Tofaş, Koç Finans, Aselsan,
            Marshall Boya gibi şirketlere spor salonu, kadın-erkek futbol
            takımı, kadın-erkek basketbol takımı, atletizm takımı, tenis takımı,
            bowling takımı, kürek ve yelken takımı gibi çeşitli spor hizmetleri
            sunduk. Bu doğrultuda Tofaş şirketi ile 5 yıl süren bir iş
            ortaklığımız oldu. Halen Koç Finans şirketi ile antrenörlük
            hizmetlerine devam etmekteyiz. Bu süreçte, şirketlerin sporcularının
            fiziksel ve zihinsel performanslarını artırmak için özelleştirilmiş
            antrenman programları geliştirdik ve başarıyla uyguluyoruz.
          </Text>
        </div>
        <div className="order-1 md:order-2 w-full md:w-auto md:h-[700px] h-[360px]">
          <div
            className="col-span-3 row-span-2 w-full h-full"
            style={{
              backgroundImage: `url(${Image1})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          />
        </div>
      </main>
    </section>
  );
};

export default About;
