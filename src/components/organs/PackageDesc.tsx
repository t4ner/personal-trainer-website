import dumbell from "../../assets/gym/dumbell.svg";
import cutlery from "../../assets/gym/cutlery.svg";
import health from "../../assets/gym/health.svg";
import contact from "../../assets/gym/contact.svg";
import report from "../../assets/gym/report.svg";

function PackageDesc() {
  return (
    <div className="space-y-7 pb-20">
      <div className="border border-gray-500 w-5/4 px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={dumbell} className="h-10 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Kİşİye özel antrenman programı
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-5/4 px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={cutlery} className="h-10 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Kİşİye özel beslenme programı
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-5/4 md:px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={health} className="h-10 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Sağlıklı & Nokta Atışı Kardİyo Planlaması
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-5/4 px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={report} className="h-10 md:h-20" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Profesyonel Takİp ve Raporlama
          </p>
        </div>
      </div>
      <div className="border border-gray-500 w-5/4 px-16 justify-center items-center p-4">
        <div className="flex items-center justify-center space-x-7">
          <div>
            <img src={contact} className="h-10 md:h-16" />
          </div>
          <p className="uppercase text-white text-sm md:text-base font-semibold">
            Sınırsız İletİşİm ve soru-cevap
          </p>
        </div>
      </div>
    </div>
  );
}

export default PackageDesc;
