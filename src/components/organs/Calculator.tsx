import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";
import CalImg from "../../assets/hero/58.jpg";
import Form from "../molecules/Form";
import { Fade } from "react-awesome-reveal";

const Calculator = () => {
  return (
    <section className="w-full h-auto flex items-center bg-zinc-900 my-5 2xl:mt-[25px]  md:mb-16 2xl:mb-36">
      <main className="w-full lg:h-[900px] grid md:grid-cols-2 items-center gap-20 md:gap-0 lg:gap-8 ">
        <div className="h-full w-full md:order-1 order-2 pt-12 md:pt-0 lg:px-8 px-4 flex flex-col lg:justify-center justify-center items-start lg:gap-20 md:gap-16 gap-8">
          <Fade className="w-full">
            <div className="w-full flex flex-col md:mt-10 items-center relative before:absolute before:-bottom-6 before:left-38 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
              <Text
                as="p"
                className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium"
              >
                GELİŞMİŞ HESAP MAKİNESİ
              </Text>
              <Text
                as="h1"
                className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl"
              >
                BMI'nızı hesaplayın
              </Text>
            </div>

            <Form />
          </Fade>
        </div>

        <div className="w-full lg:h-[850px] md:h-[600px] h-[400px] md:order-2 order-1 grid">
          <Image
            alt="Offer Image"
            objectCover="object-cover"
            className="w-full h-full"
            image={CalImg}
          />
        </div>
      </main>
    </section>
  );
};

export default Calculator;
