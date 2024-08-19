import line2 from "../../assets/SectionTwo/line2.svg";
import team from "../../assets/SectionThree/team.jpeg";

export default function SectionFour() {
  return (
    <div className="">
      <div className="container mx-auto flex justify-between gap-6 items-center">
        <div className="py-[150px]">
            <div className="border-4 border-[#D35E25] w-[600px] h-[400px] absolute ml-[30px] mt-[30px]"></div>
          <img src={team} alt="team" className="w-[600px] relative" />
        </div>
        <div className="w-1/2">
          <div className="py-[70px]">
            <h1 className="text-center text-[#073843] font-[700] text-[56px]">
              Biz haqimizda
            </h1>
            <img src={line2} alt="line" className="h-[15px] float-right" />
          </div>
          <div>
            <p className="text-[#073843] text-[20px] text-justify pb-[30px]">
              Bizning "Best buxgalter" MCHJ (INN 306581096) tashkilotimiz
              16.07.2019 yilda davlat ro`yxatidan o`tkazilgan.Korxonamiz barcha
              turdagi buxgalteriya xizmatlari ko`rsatishga ixtisoslashgan
              bo`lib,o`z qadriyatlariga tayangan holda quyidagi xizmatlarni
              taklif etadi: Yuridik shaxslarning buxgalteriya hisobini 1C 8.3
              programmasida yuritish;buxgalteriya hujjatlarini audit qilish;
              Milliy standartlar (BHMS) asosida moliyaviy hisobotlarni tuzish;
              buxgalteriya hisobini tiklash; soliq tekshiruviga hujjatlarni
              tayyorlash; hisob siyosati ishlab chiqish; hisob yuritish bo`yicha
              maslahatlar; tadbirkorlik subyektlarini ro`yxatdan o`tkazishga
              ko`maklashish, o`zgartirishlarni, qayta tashkil etishlarni, hamda
              foaliyatini tugatishni amalga oshirishga yordam berish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
