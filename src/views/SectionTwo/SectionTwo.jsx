import service from '../../assets/SectionTwo/service.png'
import recovery from "../../assets/SectionTwo/recovery.png";
import audit from "../../assets/SectionTwo/audit.png";
import financ from "../../assets/SectionTwo/financ.png";
import policy from "../../assets/SectionTwo/policy.png";
import business from "../../assets/SectionTwo/business.png";
import line from "../../assets/SectionTwo/line.svg";

export default function SectionTwo() {
    return (
      <div className="container mx-auto my-[50px] ">
        <div className="my-[70px]">
          <h1 className="text-center text-[#073843] font-[700] text-[56px]">
            Xizmatlar
          </h1>
          <img src={line} alt="line" className="mx-[720px] h-[15px]" />
        </div>
        <div className="flex justify-beetwen gap-[20px] text-[#073843]">
          <div className=" w-1/3 border-4 border-gray-300 p-5 hover:border-gray-400 rounded-2xl hover:shadow-lg">
            <div className="flex gap-10 items-center">
              <img src={service} alt="service" className="w-[60px] mt-4" />
              <h1 className="font-[700] text-[28px]">
                Barcha turdagi buxgalteriya xizmatlari
              </h1>
            </div>
            <div>
              <div className="my-6 grid gap-2 font-[500] text-[17px] h-[250px]">
                <p>1. Yuqori malakali hodimlar jamoasi;</p>
                <p>
                  2. Buxgalteriya bo`limi bilan bog`liq bo`lgan kadrlar bilan
                  bog`liq muammolar sizni bezovta qilmaydi;
                </p>
                <p>
                  3. Buxgalteriya hisobi va hisobotingiz o`z vaqtida sifatli
                  bo`ladi;
                </p>
                <p>
                  4. Biz o`z kasbiy faoliyatimiz davomida qonunchilikdagi
                  yangiliklardan xabardor bo`lib boramiz va sizning
                  faoliyatingizga aloqador qismi bo`yicha zarur tavsiyalar berib
                  boramiz.
                </p>
              </div>
              <a href="#" className="text-blue-500 font-[700] float-right">
                Batafsil
              </a>
            </div>
          </div>
          <div className=" w-1/3 border-4 border-gray-300 p-5 hover:border-gray-400 rounded-2xl hover:shadow-lg">
            <div className="flex gap-10 items-center">
              <img src={recovery} alt="service" className="w-[60px] mt-4" />
              <h1 className="font-[700] text-[28px]">
                Buxgalteriya hisobini tiklash
              </h1>
            </div>
            <div>
              <div className="my-6 grid gap-2 font-[500] text-[17px] h-[250px]">
                <p className="text-justify">
                  <b>Buxgalteriya hisobini tiklash - </b>bu xo`jalik yurituvchi
                  sub`ektning buxgalteriya hisobini qonun hujjatlari talablariga
                  muvofiq tegishli holatga keltirish maqsadi bo`lgan hodisadir.
                  Buxgalteriya hisobini tiklash zarurati registrlar yoki
                  birlamchi buxgalteriya hujjatlari yo`qolganligi sababli,
                  shuningdek boshqa fors-major sabablarga ko`ra yuzaga kelishi
                  mumkin.
                </p>
              </div>
              <a href="#" className="text-blue-500 font-[700] float-right">
                Batafsil
              </a>
            </div>
          </div>
          <div className=" w-1/3 border-4 border-gray-300 p-5 hover:border-gray-400 rounded-2xl hover:shadow-lg">
            <div className="flex gap-10 items-center">
              <img src={audit} alt="service" className="w-[60px] mt-4" />
              <h1 className="font-[700] text-[28px]">
                Buxgalteriya hujjatlarini audit qilish
              </h1>
            </div>
            <div>
              <div className="my-6 grid gap-2 font-[500] text-[17px] h-[250px]">
                <p className="text-justify">
                  Bu xizmat orqali siz o`z buxgalteringiz ishi sifatiga,
                  hujjatlar to`liq va to`g`ri yuritilishiga yordam beruvchi
                  tekshiruvchi nazari bilan qaray olasiz. Malakali
                  auditorlarimiz yordamida korxonangizda ichki audit xizmatini
                  tashkil etish orqali doimiy maslahat va amaliy yordamga ega
                  bo`lasiz.
                </p>
              </div>
              <a href="#" className="text-blue-500 font-[700] float-right">
                Batafsil
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-beetwen gap-[20px] mt-[20px] text-[#073843]">
          <div className=" w-1/3 border-4 border-gray-300 p-5 hover:border-gray-400 rounded-2xl hover:shadow-lg">
            <div className="flex gap-10 items-center">
              <img src={financ} alt="service" className="w-[60px] mt-4" />
              <h1 className="font-[700] text-[26px]">
                Moliyaviy, soliq va statistik hisobotlarni tuzish
              </h1>
            </div>
            <div>
              <div className="my-6 flex flex-col gap-3 font-[500] text-[17px] h-[250px]">
                <p>1. Moliyaviy hisobot (buxgalteriya hisoboti);</p>
                <p>2. Statistik hisobot;</p>
                <p>
                  3. Buxgalteriya hisobi va hisobotingiz o`z vaqtida sifatli
                  bo`ladi;
                </p>
                <p>4. Soliq hisoboti;</p>
              </div>
              <a href="#" className="text-blue-500 font-[700] float-right">
                Batafsil
              </a>
            </div>
          </div>
          <div className=" w-1/3 border-4 border-gray-300 p-5 hover:border-gray-400 rounded-2xl hover:shadow-lg">
            <div className="flex gap-10 items-center">
              <img src={policy} alt="service" className="w-[60px] mt-4" />
              <h1 className="font-[700] text-[28px]">
                Hisob siyosatini tuzish
              </h1>
            </div>
            <div>
              <div className="my-6 grid gap-2 font-[500] text-[17px] h-[250px]">
                <p className="text-justify">
                  Hozirgi vaqtda xo`jalik yurituvchi sub`ektlar ikki xil hisob
                  siyosatiga ega bo`lishi kerak: <br /> 1. Buxgalteriya hisobi
                  maqsadlari uchun hisob siyosati - buxgalteriya hisobining
                  yuritish usullari yig`indisi; <br /> 2. Soliq maqsadlari uchun
                  hisob siyosati - soliq to`lovchining qabul qilingan soliq
                  hisobi tizimini tasdiqlovchi ichki hujjatidir.
                </p>
              </div>
              <a href="#" className="text-blue-500 font-[700] float-right">
                Batafsil
              </a>
            </div>
          </div>
          <div className=" w-1/3 border-4 border-gray-300 p-5 hover:border-gray-400 rounded-2xl hover:shadow-lg">
            <div className="flex gap-10 items-center">
              <img src={business} alt="service" className="w-[60px] mt-4" />
              <h1 className="font-[700] text-[26px]">
                Biznesni ro`yhatdan o`tkazish
              </h1>
            </div>
            <div>
              <div className="my-6 grid gap-2 font-[500] text-[17px] h-[250px]">
                <p className="text-justify">
                  <b>Ro`yxatga olish - </b>yuridik shaxslarni va yakka
                  tartibdagi tadbirkorlarni vakolatli davlat organlarida davlat
                  ro`yxatidan o`tkazishga ko`maklashish; <br />
                  <b>
                    Qayta tashkil etilganda va ta`sis hujjatlari
                    o`zgartirilganda qayta ro`yxatdan o`tkazish -{" "}
                  </b>
                  ta`sis hujjatlariga kiritilgan o`zgartirishlarni va yuridik
                  shaxs qayta tashkil etilganda vakolatli organlarda davlat
                  ro`yxatidan o`tkazish zarurati;
                </p>
              </div>
              <a href="#" className="text-blue-500 font-[700] float-right">
                Batafsil
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}