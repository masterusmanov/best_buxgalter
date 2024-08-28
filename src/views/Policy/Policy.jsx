import policy from '../../assets/Detail/policy.jpg'
export default function Policy() {
  return (
    <div>
      <div className="container mx-auto mt-[30px]">
        <div className="my-[50px]">
          <h1 className="text-center lg:text-start text-[#073843] font-[700] text-[28px] lg:text-[56px]">
            Hisob siyosatini tuzish
          </h1>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-justify px-2 lg:text-[18px]">
              <b>Hisob siyosati - </b>birlamchi kuzatish, xarajatlarni o'lchash,
              joriy guruhlash va iqtisodiy faoliyat faktlarini yakuniy
              umumlashtirish uchun buzgalteriya hisobi usullari majmui. Hozirgi
              vaqtda xo'jalik yurituvchi sub'ektlar ikki xil hisob siyosatiga
              ega bo'lishi kerak: 1. Buxgalteriya hisobi maqsadlari uchun hisob
              siyosati - buxgalteriya hisobining yuritish usullari yig'indisi;
              2. Soliq maqsadlari uchun hisob siyosati - soliq to'lovchining
              qabul qilingan soliq hisobi tizimini tasdiqlovchi ichki
              hujjatidir.
            </p>
            <img
              src={policy}
              alt="all_service"
              className="px-2 my-[25px] md:my-0 md:w-[400px] md:h-[210px] lg:w-[520px] lg:h-[200px] xl:w-[625px] 2xl:w-[800px] object-cover"
            />
          </div>
          <p className="text-justify px-2 lg:text-[18px] xl: mt-[15px]">
            Agar buxgalteriya hisobi uchun buxgalteriya siyosatining yo'qligi
            nazorat qiluvchi organlar, moliyaviy hisobot foydalanuvchilari va
            boshqalar bilan tekshirish paytida bahsli masalalarga olib kelishi
            mumkin bo'lsa, keyin hisob siyosatining yo'qligi BHMning 5 dan 10
            baravarigacha bo'lgan miqdorda jarimaga sabab bo’lishi ham mumkin.
            Ba'zi odamlar Buxgalteriya siyosati shablonini olib, o'zlari uchun
            tasdiqlaganlarida xato qilishadi, istisnosiz barcha kompaniyalar
            uchun mos keladigan universal hisob siyosati mavjud emas. Ushbu
            hujjatni to'g'ri rasmiylashtirish uchun nafaqat kompaniya tomonidan
            amalga oshirilgan operatsiyalarni, balki rejalashtirilgan
            operatsiyalarni ham hisobga olish kerak, shuningdek, amalga oshirish
            uchun mavjud bo'lgan operatsiyalarni ham hisobga olish kerak.
            Kompaniyamiz mutaxassislari siz uchun hisob siyosatini tuzishdan
            oldin, birinchi navbatda kompaniyangizning faoliyat doirasini
            o'rganadilar, qaysi usullardan foydalanish samaraliroq bo'lishi
            mumkin va tadqiqot natijalariga ko'ra sizga hisob siyosati
            loyihasini, tasdiqlash uchun taqdim etadilar.
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
