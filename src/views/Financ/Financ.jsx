import financ from '../../assets/Detail/financ.jpg';

export default function Financ() {
  return (
    <div>
      <div className="container mx-auto mt-[30px]">
        <div className="my-[50px]">
          <h1 className="text-center lg:text-start text-[#073843] font-[700] text-[28px] lg:text-[56px]">
            Moliyaviy, soliq va statistik hisobotlarni tuzish
          </h1>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-justify px-2 lg:text-[18px]">
              <b>Moliyaviy hisobot (buxgalteriya hisoboti) - </b>qonun
              hujjatlarida belgilangan talablarga muvofiq tizimlashtirilgan
              xo'jalik yurituvchi subyektining hisobot sanasidagi moliyaviy
              holati, uning faoliyatining moliyaviy natijalari va hisobot
              davridagi pul mablag'lari harakati to'g'risidagi ma'lumotlar.
              <b> Statistik hisobot - </b>qonun hujjatlarida belgilangan
              shakllarda xo'jalik yurituvchi subyektning faoliyati to'g'risida
              ma'lum vaqt ichida statistika organiga taqdim etiladigan hisobot.
              <b> Soliq hisoboti - </b>soliq to'lovchining hujjatlari, shu
              jumladan soliq va to'langan daromadlarning har bir turi bo'yicha
              hisob-kitoblar va deklaratsiyalar, shuningdek soliq to'lovchilar
              va soliq agentlarining soliq majburiyatlarini aniqlash uchun asos
              bo'lib xizmat qiluvchi hisob-kitoblar va soliq deklaratsiyasiga
              ilova.
            </p>
            <img
              src={financ}
              alt="all_service"
              className="px-2 my-[25px] md:my-0 md:w-[400px] md:h-[210px] lg:w-[520px] lg:h-[200px] xl:w-[625px] 2xl:w-[800px]"
            />
          </div>
          <p className="text-justify px-2 lg:text-[18px] xl: mt-[15px]">
            Yuridik shaxslar tadbirkorlik faoliyati jarayonida turli organlarga
            hisobot taqdim etishlari kerak. Bu organlar davlat yoki ularning
            oliy boshqaruv organi, shuningdek investorlar, kreditorlar va boshqa
            tashqi foydalanuvchilar bo'lishi mumkin. Bizning kompaniyamiz sizni
            ushbu muntazam ishdan qutqaradi, sizning o'rniga biz sizning
            hisobotingizni tayyorlaymiz va taqdim etamiz. Va siz, o'z navbatida,
            o'z biznesingizga e'tibor qaratasiz. Moliyaviy, soliq, statistik
            hisobotlarni tayyorlash va taqdim etishda katta tajribaga ega yuqori
            malakali mutaxassislar jamoasi sizning kompaniyangizning moliyaviy
            hisobotlarini BHMS ga muvofiq tuzadi. Biz sizning hisobotlaringizni
            yuqori sifatli tayyorlashni kafolatlaymiz. Hisobotlaringizni
            tayyorlashni bizga ishonib topshirib, siz mutlaqo xotirjam
            bo'lishingiz mumkin, chunki sizning hisobotlaringizni bir hodim
            emas, balki professionallar jamoasi tuzadi.
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
