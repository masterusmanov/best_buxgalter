import service from '../../assets/SectionTwo/service.png'
import recovery from "../../assets/SectionTwo/recovery.png";
import audit from "../../assets/SectionTwo/audit.png";
import financ from "../../assets/SectionTwo/financ.png";
import policy from "../../assets/SectionTwo/policy.png";
import business from "../../assets/SectionTwo/business.png";
import line from "../../assets/SectionTwo/line.svg";

export default function SectionTwo() {
  const datas = [
    {
      title: "Barcha turdagi buxgalteriya xizmatlari",
      desc: "Yuqori malakali hodimlar jamoasi, Buxgalteriya bo`limi bilan bog`liq bo`lgan kadrlar bilan bog`liq muammolar sizni bezovta qilmaydi, Buxgalteriya hisobi va hisobotingiz o`z vaqtida sifatli bo`ladi, Biz o`z kasbiy faoliyatimiz davomida qonunchilikdagi yangiliklardan xabardor bo`lib boramiz va sizning faoliyatingizga aloqador qismi bo`yicha zarur tavsiyalar berib boramiz.",
      icon: service,
      link: '/all_services'
    },
    {
      title: "Buxgalteriya hisobini tiklash",
      desc: "Buxgalteriya hisobini tiklash - </b>bu xo`jalik yurituvchi sub`ektning buxgalteriya hisobini qonun hujjatlari talablariga muvofiq tegishli holatga keltirish maqsadi bo`lgan hodisadir. Buxgalteriya hisobini tiklash zarurati registrlar yoki birlamchi buxgalteriya hujjatlari yo`qolganligi sababli, shuningdek boshqa fors-major sabablarga ko`ra yuzaga kelishi mumkin.",
      icon: recovery,
      link: '/recovery'
    },
    {
      title: "Buxgalteriya hujjatlarini audit qilish",
      desc: "Bu xizmat orqali siz o`z buxgalteringiz ishi sifatiga, hujjatlar to`liq va to`g`ri yuritilishiga yordam beruvchi tekshiruvchi nazari bilan qaray olasiz. Malakali auditorlarimiz yordamida korxonangizda ichki audit xizmatini tashkil etish orqali doimiy maslahat va amaliy yordamga ega bo`lasiz.",
      icon: audit,
      link: '/audit'
    },
    {
      title: "Moliyaviy, soliq va statistik hisobotlar",
      desc: "Moliyaviy hisobot (buxgalteriya hisoboti), Statistik hisobot, Buxgalteriya hisobi va hisobotingiz o`z vaqtida sifatli bo`ladi, Soliq hisoboti",
      icon: financ,
      link: '/financ'
    },
    {
      title: "Hisob siyosatini tuzish",
      desc: "Hozirgi vaqtda xo`jalik yurituvchi sub`ektlar ikki xil hisob siyosatiga ega bo`lishi kerak: 1. Buxgalteriya hisobi maqsadlari uchun hisob siyosati - buxgalteriya hisobining yuritish usullari yig`indisi; 2. Soliq maqsadlari uchun hisob siyosati - soliq to`lovchining qabul qilingan soliq hisobi tizimini tasdiqlovchi ichki hujjatidir.",
      icon: policy,
      link: '/policy'
    },
    {
      title: "Biznesni ro`yhatdan o`tkazish",
      desc: "Ro`yxatga olish - yuridik shaxslarni va yakka tartibdagi tadbirkorlarni vakolatli davlat organlarida davlat ro`yxatidan o`tkazishga ko`maklashish; Qayta tashkil etilganda va ta`sis hujjatlari o`zgartirilganda qayta ro`yxatdan o`tkazish - ta`sis hujjatlariga kiritilgan o`zgartirishlarni va yuridik shaxs qayta tashkil etilganda vakolatli organlarda davlat ro`yxatidan o`tkazish zarurati;",
      icon: business,
      link: '/business'
    },
  ];
    return (
      <div id="services" className="container mx-auto my-[50px] ">
        <div className="my-[70px]">
          <h1 className="text-center text-[#073843] font-[700] text-[56px]">
            Xizmatlar
          </h1>
          <img src={line} alt="line" className="mx-[180px] md:mx-[400px] lg:mx-[500px] xl:mx-[650px] 2xl:mx-[720px] 2xl:h-[15px]" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-[20px] mt-[20px] text-[#073843] p-2">
          {datas.map((el, index) => (
            <div key={index} className="border-4 border-gray-300 p-5 hover:border-gray-400 rounded-2xl hover:shadow-lg">
              <div className="flex gap-10 items-center">
                <img src={el.icon} alt="service" className="w-[60px] lg:w-[40px] xl:w-[60px] mt-4" />
                <h1 className="font-[700] text-[24px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[26px]">{el.title}</h1>
              </div>
              <div>
                <div className="md:h-[200px] lg:h-[200px] xl:h-[150px] my-6 grid gap-2 font-[500] text-[14px] ">
                  <p className="text-justify">{el.desc}</p>
                </div>
                <a href={el.link} className="text-blue-500 font-[700] float-right">Batafsil</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}