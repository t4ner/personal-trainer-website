import Image3 from "../../assets/gym/22.jpg";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";

const About = () => {
  return (
    <section className="w-full md:my-10 h-auto flex items-center ">
      <main className="w-full md:h-[700px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10   md:gap-10 py-12 md:py-0">
        <div className="h-full w-full flex flex-col px-1 md:px-0 justify-center items-start gap-4 md:pb-12 order-last md:order-first">
          <div className="flex flex-col mt-5 md:mt-10  items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
            <Text
              as="p"
              className="text-amber-500 lg:text-4xl text-2xl tracking-widest uppercase font-medium"
            >
              UĞUR ÇOLAK KİMDİR ?
            </Text>
            <Text
              as="h1"
              className="absolute text-zinc-500/20 md:-left-3 left-0 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-36 md:-top-20 -top-16 -z-10"
            ></Text>
          </div>
          <Text
            as="h2"
            className="text-zinc-200 mt-5 mb-4 text-lg tracking-wide"
          >
            1988 yılında Rize'de doğdum ve eğitim hayatımı İstanbul'da
            tamamladım. Spora olan tutkum ve eğitimimle birleştirerek kendimi
            geliştirdim. Lise eğitimimi Ümraniye Anadolu Lisesi'nde, ardından
            üniversite hayatımı Haliç Üniversitesi Spor Meslek Yüksek Okulu'nda
            Spor Yöneticiliği bölümünde sürdürdüm. Eğitimime pedagojik formasyon
            ekleyerek bilgi ve becerilerimi daha da derinleştirdim. Yüksek
            lisansımı Egzersiz ve Spor Fizyolojisi üzerine yaparak uzmanlık
            alanımda derinleştim. Uzun yıllar hem profesyonel hem de amatör
            düzeyde birçok takımda forma giydim. Galatasaray, Çaykur Rizespor,
            Antalya Kepez Belediyesi, Bozüyükspor, Esenler Erokspor, Tuzlaspor,
            Arnavutköy Belediyespor, Zeytinburnuspor ve Ortaköy-Bağlarbaşı gibi
            çeşitli takımlarda yer aldım. Futbol kariyerimin son dönemlerinde
            antrenörlük yolunu seçerek bireysel ve kurumsal spor
            organizasyonlarında da yer aldım.
          </Text>
        </div>
        <div className="w-full md:h-[700px] h-[360px] order-first md:order-last">
          <Image
            alt="Welcome Image"
            objectCover="object-cover"
            className="col-span-3 row-span-2 w-full h-full"
            image={Image3}
          />
        </div>
      </main>
    </section>
  );
};

export default About;
