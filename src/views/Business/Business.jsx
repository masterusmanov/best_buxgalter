import business from '../../assets/Detail/business.jpg'
export default function Business() {
  return (
    <div>
      <div className="container mx-auto mt-[30px]">
        <div className="my-[50px]">
          <h1 className="text-center lg:text-start text-[#073843] font-[700] text-[28px] lg:text-[56px]">
            Biznesni ro'yhatdan o'tkazish, o'zgarishlarni rasmiylashtirish va
            tugatish
          </h1>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-justify px-2 lg:text-[18px]">
              <b>Ro'yxatga olish - </b>yuridik shaxslarni va yakka tartibdagi
              tadbirkorlarni vakolatli davlat organlarida davlat ro'yxatidan
              o'tkazishga ko’maklashish;{" "}
              <b>
                Qayta tashkil etilganda va ta'sis hujjatlari o'zgartirilganda
                qayta ro'yxatdan o'tkazish -{" "}
              </b>
              ta'sis hujjatlariga kiritilgan o'zgartirishlarni va yuridik shaxs
              qayta tashkil etilganda vakolatli organlarda davlat ro'yxatidan
              o'tkazish zarurati; <b>Yuridik shaxslarni tugatish - </b>yuridik
              shaxsning faoliyatini va mavjudligini, ushbu tugatishni davlat
              ro'yxatidan o'tkazish uchun zarur bo'lgan tartiblar majmuasiga
              rioya qilgan holda tugatish.
            </p>
            <img
              src={business}
              alt="all_service"
              className="px-2 my-[25px] md:my-0 md:w-[400px] md:h-[210px] lg:w-[520px] lg:h-[200px] xl:w-[625px] 2xl:w-[800px] object-cover"
            />
          </div>
          <p className="text-justify px-2 lg:text-[18px] xl: mt-[15px]">
            Kompaniyamiz ta’sis hujjatlarini (nizom, ta’sis shartnomasi)
            tayyorlashdan boshlab, firma nomlarini zaxira qilishdan, vakolatli
            davlat organlarida davlat ro‘yxatidan o‘tkazish, zarur
            litsenziyalar, ruxsatnomalar va hokazolarni olishgacha bo‘lgan
            jarayonlarni, tadbirkorlikni yuridik shaxs sifatida davlat
            ro‘yxatidan o‘tkazish bilan bog‘liq barcha jarayonlarda sizga
            yordamchi bo’lishni o‘z zimmasiga oladi. Kompaniyangizni tugatishni
            ham bizga ishonib topshirishingiz mumkin. Biz tugatuvchining qonun
            bilan belgilangan barcha funktsiyalarini o'z zimmamizga olamiz va
            shu bilan sizni uzoq davom etadigan va muntazam tugatish ishlaridan
            ozod qilamiz. Ayni paytda siz yangi loyihalar haqida o'ylashingiz
            mumkin. Bu ishlarni kompaniyamizga ishonib topshirganingizdan so'ng
            biz o'z oldimizga qo'yilgan barcha vazifalarni yuqori saviyada
            bajarishimizga mutlaqo xotirjam bo'lishingiz mumkin.
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
