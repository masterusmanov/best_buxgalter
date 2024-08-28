import recovery from '../../assets/Detail/recovery.jpg'
export default function Recovery() {
  return (
    <div>
      <div className="container mx-auto mt-[30px]">
        <div className="my-[50px]">
          <h1 className="text-center lg:text-start text-[#073843] font-[700] text-[28px] lg:text-[56px]">
            Buxgalteriya hisobini tiklash
          </h1>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-justify px-2 lg:text-[18px]">
              <b>Buxgalteriya hisobini tiklash -</b> bu xo'jalik yurituvchi
              sub'ektning buxgalteriya hisobini qonun hujjatlari talablariga
              muvofiq tegishli holatga keltirish maqsadi bo'lgan hodisadir.
              Buxgalteriya hisobini tiklash zarurati registrlar yoki birlamchi
              buxgalteriya hujjatlari yo'qolganligi sababli, shuningdek boshqa
              fors-major sabablarga ko'ra yuzaga kelishi mumkin. Buxgalteriya
              hisobini o'z vaqtida tiklash tadbirkorlik sub'ektiga mumkin
              bo'lgan jarimalar va qo'shimcha soliq to'lovlarini o'z vaqtida
              oldini olishga imkon beradi.
            </p>
            <img
              src={recovery}
              alt="all_service"
              className="px-2 my-[25px] md:my-0 md:w-[400px] md:h-[210px] lg:w-[520px] lg:h-[200px] xl:w-[625px] 2xl:w-[800px] object-cover"
            />
          </div>
          <p className="text-justify px-2 lg:text-[18px] xl: mt-[15px]">
            Agar buxgalteriya hisobini tiklash zarurati tug'ilsa, bugungi kunda
            kompaniyangizning buxgalteriya hisobini tiklashni kompaniyamizga
            topshirish eng yaxshi qarordir. Bizning buxgalteriya firmamiz
            buxgalteriya hisobini tiklash xizmatlarini taklif etadi. Biz
            shartnomada mustahkamlangan sifatli xizmat kafolatini beramiz.
            Bizning kompaniyamiz yuqori darajali mutaxassislarni ishga jalb
            qiladi va tiklash jarayonida nafaqat buxgalterlar, balki hujjatlarni
            to'g'ridan-to'g'ri tayyorlash va qayta ishlashni ta'minlaydi,
            O‘zbekiston Respublikasi qonun hujjatlariga muvofiq vazifalarni
            belgilash, ularning bajarilishini nazorat qilish va ishlarni qabul
            qilish uchun mas'ul bo'lgan auditorlar ham ishlaydi. Bundan
            tashqari, jarayonga soliq maslahatchilari jalb qilinishi mumkin. Ish
            jarayonida bizning mutaxassislarimiz har doim muayyan harakatlar
            uchun tegishli tushuntirishlar va asoslar berishga tayyor, shu bilan
            birga kompaniyangizning keyingi buxgalteriya faoliyati bo'yicha
            tavsiyalar faqat professional va malakali darajaga ega bo'ladi.
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
