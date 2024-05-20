import Image4 from "../../assets/gym/23.jpg";
import { Text } from "../atoms/Text";

const About = () => {
  return (
    <section className="w-full md:my-10 h-auto flex items-center">
      <main className="w-full md:h-[700px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10  md:gap-10  md:py-0">
        <div className="w-full md:h-[700px] h-[360px] ">
          <div
            className="col-span-3 row-span-2 w-full h-full"
            style={{
              backgroundImage: `url(${Image4})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          />
        </div>
        <div className="h-full px-1 md:px-0 w-full flex flex-col justify-center items-start gap-4 pb-8 md:pb-12">
          <div className="flex flex-col mt-5 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
            <Text
              as="p"
              className="text-amber-500 lg:text-4xl text-2xl tracking-widest uppercase font-medium"
            >
              ANTRENÖRLÜK EĞİTİMLERİM
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
                - Türkiye Vücut Geliştirme Ve Fitness Federasyonu Antrenörlük
                Belgesi
              </li>
              <li>
                - Türkiye Cimnastik Federasyonu Pilates Eğitmenlik Belgesi
              </li>
              <li>- Türkiye Futbol Federasyonu Antrenörlük Belges</li>
              <li>- PAC Pro Athletic Condıtıonıng Kondisyonerlik Belgesi</li>
              <li>- Yeditepe Üniversitesi Yaşam Koçluğu Belgesi</li>
              <li>- Portland LifeCoach Uluslararası Eğitim Belgesi</li>
              <li>- Nlp Neure Linguistic Programming eğitim belgesi</li>
            </ul>
            <p className="mt-2">
              Şimdi ise spora olan tutkum ve birikimimle kişisel antrenörlük
              hizmeti sunmaktayım. Hedeflerinize ulaşmanız için size en etkili
              ve özelleştirilmiş antrenman programlarını sunmaya hazırım.
              Sizinle birlikte çalışarak sağlıklı ve aktif bir yaşam tarzına
              adım atmak için sabırsızlanıyorum.
            </p>
          </Text>
        </div>
      </main>
    </section>
  );
};

export default About;
