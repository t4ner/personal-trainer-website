import dumbell from "../../assets/gym/dumbell.svg";
import cutlery from "../../assets/gym/cutlery.svg";
import health from "../../assets/gym/health.svg";
import video from "../../assets/gym/video.svg";
import cardio from "../../assets/gym/cardio.svg";
import suplement from "../../assets/gym/suplement.svg";
import takip from "../../assets/gym/takip.svg";
import form from "../../assets/gym/form.svg";
import soru from "../../assets/gym/soru.svg";
import play from "../../assets/gym/play.svg";
import ready from "../../assets/gym/ready.svg";
import food from "../../assets/gym/food.svg";

function OnlinePackage() {
  return (
    <div className="space-y-7 flex flex-wrap pb-20">
      <div className="text-white font-semibold text-2xl md:text-5xl w-full text-center mb-10  ">
        <span className="border-b-2 border-b-[#eb8900]">ONLINE PAKETLER</span>{" "}
      </div>
      <div className="border  border-gray-500 w-full px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7 ">
          <div>
            <img src={dumbell} className="h-16 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Kİşİye Özel Beslenme Programı
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={food} className="h-16 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Yemek Tarİf Vİdeoları
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full  px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={health} className="h-14 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Kİşİye Özel Antrenman Planlaması
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={video} className="h-14 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Vİdeolu Anlatımlar
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={cardio} className="h-10 md:h-16" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Kardİyo Planlaması
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full  px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={suplement} className="h-14 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Supplement Tavsİyelerİ
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={takip} className="h-10 md:h-16" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Haftalık Takİp Sİstemİ
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={form} className="h-14 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Aylık Form Analİzİ
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={soru} className="h-10 md:h-16" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Sınırsız Soru/Cevap
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full  px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={play} className="h-10 md:h-16" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Temel Eğİtİm Vİdeoları
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-full px-0 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={ready} className="h-10 md:h-16" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Hazır Olduğunda Başlat
          </p>
        </div>
      </div>

      <div className="text-white text-center w-full text-lg md:text-3xl uppercase px-5 pt-10">
        online paketlerİmİzle veya uzaktan eğİtİm programlarımızla tanışın!
        Satın almak ve yolculuğunuza başlamak İçİn bİze ulaşın
      </div>
      <div className="w-full  flex flex-col justify-center items-center space-y-5">
        <button className="text-white rounded-md font-semibold px-6 py-2 bg-gradient-to-r to-amber-500 from-red-500">
          <a href="/uzaktan-egitim-paketleri">TÜM PAKETLERİ GÖR</a>
        </button>
        <button className="text-white rounded-md font-semibold px-6 py-2 bg-gradient-to-r to-green-500 from-green-900 ">
          <a href="https://wa.me/905366071938?" target="_blank">
            WHATSHAPP
          </a>
        </button>
      </div>
    </div>
  );
}

export default OnlinePackage;
