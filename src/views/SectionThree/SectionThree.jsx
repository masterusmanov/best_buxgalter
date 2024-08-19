import line2 from "../../assets/SectionTwo/line2.svg";
import imkon from "../../assets/SectionFour/imkon.jpeg";
import standard from "../../assets/SectionFour/standard.jpg";
import premium from "../../assets/SectionFour/premium.jpg";

export default function SectionThree() {
  return (
    <div className="bg-[#073843]">
      <div className="container mx-auto my-[50px]">
        <div className="pt-[70px]">
          <h1 className="text-center text-[#F0EAD6] font-[700] text-[56px]">
            Ta`riflar
          </h1>
          <img src={line2} alt="line" className="h-[12px] mx-[750px]" />
        </div>
        <div className="flex items-center gap-6 py-[70px]">
          <div className="flex gap-6 w-1/3 h-[300px] items-center  border-2 border-[#D35E25] p-5 rounded-2xl">
            <img src={imkon} alt="" className="w-[200px] h-[220px]" />
            <div className="text-[#F0EAD6]">
              <h1 className="text-center text-[28px] font-[700]">"Imkon"</h1>
              <p className="text-justify">
                Ushbu tarif endigina davlat ro`yxatidan o`tgan mijozlarimiz-ga
                taqdim etiladi. Davlat ro`y-xatidan o`tgan sanadan boshlab
                dastlabki 3 oy bepul xizmat ko`-rsatiladi. Ushbu muddatdan
                so`-ng keyingi qaysi tarifga o`zga-rishi kelishiladi.
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-1/3 items-center h-[300px]  border-2 border-[#D35E25] p-5 rounded-2xl">
            <img src={standard} alt="" className="w-[210px] h-[220px]" />
            <div className="text-[#F0EAD6]">
              <h1 className="text-center text-[28px] font-[700]">"Standart"</h1>
              <p className="text-justify">
                Ushbu tarif ishchi-hodimlar soni 5 nafargacha bo`lgan yillik
                aylanmasi 1 milliardgacha bo`lgan tadbirkorlar uchun mos keladi.
                Xizmat uchun oylik to`lov 2 mln so`m.
              </p>
            </div>
          </div>
          <div className="flex gap-6 w-1/3 items-center h-[300px] border-2 border-[#D35E25] p-5 rounded-2xl">
            <img src={premium} alt="" className="w-[210px] h-[220px]" />
            <div className="text-[#F0EAD6]">
              <h1 className="text-center text-[28px] font-[700]">"Premium"</h1>
              <p className="text-justify">
                Ushbu tarif ishchi - hodimlar soni 5 nafardan ortiq bo`lgan,
                nisbatan hujjatlar aylanishi ko`proq bo`lgan va yillik aylan-
                masi 1 milliard so`mdan ortiq-ni tashkil etuvchi korxonalar
                uchun tavsiya etiladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
