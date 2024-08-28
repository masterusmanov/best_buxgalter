import all_service from '../../assets/Detail/all_service.webp'
export default function AllService() {
  return (
    <div>
      <div className="container mx-auto mt-[30px]">
        <div className="my-[50px]">
          <h1 className="text-center lg:text-start text-[#073843] font-[700] text-[28px] lg:text-[56px]">
            Barcha turdagi buxgalteriya xizmatlari
          </h1>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-justify px-2 lg:text-[18px]">
              <b>
                Buxgalteriya hisobi (buxgalteriya xizmatlarining autsorsingi deb
                ataladi) -{" "}
              </b>
              bu korxonadagi buxgalteriya bo'limining barcha funksiyalarni,
              professional buxgalteriya firmasiga, ya'ni kasbiy faoliyatida
              tajriba va obro'ga ega bo'lgan mutaxassislarga o'tkazish.
              Rivojlanayotgan O'zbekiston iqtisodiyoti uchun buxgalteriya
              xizmatlarini autsorsing qilish juda keng tarqalgan faoliyat sohasi
              hisoblanadi.
            </p>
            <img
              src={all_service}
              alt="all_service"
              className="px-2 my-[25px] md:my-0 md:w-[400px] md:h-[210px] lg:w-[520px] lg:h-[200px] xl:w-[625px] 2xl:w-[800px] object-cover"
            />
          </div>
          <p className="text-justify px-2 lg:text-[18px] xl: mt-[15px]">
            Buxgalteriya hisobi funktsiyasini, buxgalteriya xizmatlarini
            ko'rsatadigan kompaniyaga o'tkazishning afzalliklari nafaqat
            buxgalteriya hisobini yuritish uchun sarflangan resurslarni
            tejashdan iborat, balki bunday afzalliklar ko'pchilikni tashkil
            etadi. Biz quyida sizga nima uchun biz bilan ishlash foydali
            ekanligini aytib beramiz: Buxgalteriya hisobi funktsiyasini
            kompaniyamizga o'tkazib, siz mutlaqo xotirjam bo'lishingiz mumkin,
            chunki: 1. Yuqori malakali hodimlar jamoasi: bosh buxgalter, ichki
            auditor, soliq maslahatchisi, kadrlar bo‘yicha inspektor,
            huquqshunos va boshqa mutaxassislar faoliyat samaradorligini
            ta’minlaydi, sizning bosh buxgalteringiz bir shaxs emas, balki butun
            bir buxgalteriya firmasi bo‘ladi; 2. Buxgalteriya bo'limi bilan
            bog'liq bo'lgan kadrlar bilan bog'liq muammolar sizni bezovta
            qilmaydi: munosib nomzodni topish, shuningdek, kasallik tufayli
            ishlamay qolish, ta'tilga chiqish, tug'ruq ta'tiliga chiqish va h.k.
            3. Buxgalteriya hisobi va hisobotingiz o’z vaqtida sifatli bo'ladi;
            4. Biz o'z kasbiy faoliyatimiz davomida qonunchilikdagi
            yangiliklardan xabardor bo’lib boramiz va sizning faoliyatingizga
            aloqador qismi bo’yicha zarur tavsiyalar berib boramiz.
          </p>
        </div>
        <a
          href="/"
          className="px-4 py-2 bg-[#073843] text-white rounded-lg float-right my-[15px] mr-2"
        >
          Orqaga
        </a>
      </div>
      <div className="bg-[#D35E25] p-5 mt-[70px]">
        <h1 className="text-center text-[#073843] font-[700] text-[34px] lg:text-[56px]">
          Bizning xizmatdan foydalnmoqchimisiz?
        </h1>
        <div className="flex justify-center items-center">
          <button className="mt-[30px] lg:mx-[150px] text-[18px] border-4 border-[#073843] text-[#073843] font-[700] py-2 px-4 w-[250px] rounded-lg hover:bg-[#2f3b3d] hover:text-white hover:border-[#2f3b3d]">
            Biz bilan bog`laning
          </button>
        </div>
      </div>
    </div>
  );
}
