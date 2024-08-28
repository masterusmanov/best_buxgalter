import line2 from "../../assets/SectionTwo/line2.svg";
import team from "../../assets/SectionThree/team.jpeg";

export default function SectionFour() {
  return (
    <div id="about" className="">
      <div className="container mx-auto md:flex justify-between gap-6 items-center xl:px-2">
        <div className="md:hidden py-[50px] ">
          <h1 className="text-center text-[#073843] font-[700] text-[50px]">
            Biz haqimizda
          </h1>
          <img src={line2} alt="line" className="h-[10px] mx-[180px] md:mx-[400px]" />
        </div>
        <div className="grid justify-center py-[20px] lg:py-[150px] px-2 md:px-0 ">
          <div>
             <div className="border-4 border-[#D35E25] w-[300px] h-[200px] lg:w-[500px] lg:h-[330px] xl:w-[600px] xl:h-[400px] absolute ml-[30px] mt-[30px]"></div>
            <img src={team} alt="team" className="w-[300px] lg:w-[500px] xl:w-[600px] relative" />
         </div>
        </div>
        <div className=" py-[30px] md:w-1/2 px-2">
          <div className="hidden md:grid lg:ml-[50px] 2xl:ml-0">
            <h1 className="text-center text-[#073843] font-[700] md:text-[48px] lg:text-[56px]">
              Biz haqimizda
            </h1>
            <img src={line2} alt="line" className="md:ml-[180px] lg:ml-[170px] xl:ml-[250px] 2xl:ml-[350px] lg:h-[15px] md:h-[10px] lg:float-right" />
          </div>
          <div className="lg:ml-[30px]">
            <p className="text-[#073843] text-[14px] lg:text-[17px] 2xl:text-[20px] text-justify pb-[30px] font-[700] md:py-[30px]">
              Bizning "Best buxgalter" MCHJ (INN 306581096) tashkilotimiz
              16.07.2019 yilda davlat ro`yxatidan o`tkazilgan.Korxonamiz barcha
              turdagi buxgalteriya xizmatlari ko`rsatishga ixtisoslashgan
              bo`lib,o`z qadriyatlariga tayangan holda quyidagi xizmatlarni
              taklif etadi: Yuridik shaxslarning buxgalteriya hisobini 1C 8.3
              programmasida yuritish; buxgalteriya hujjatlarini audit qilish;
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
