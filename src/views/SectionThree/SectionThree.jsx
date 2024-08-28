import line2 from "../../assets/SectionTwo/line2.svg";
import imkon from "../../assets/SectionFour/imkon.jpeg";
import standard from "../../assets/SectionFour/standard.jpg";
import premium from "../../assets/SectionFour/premium.jpg";

export default function SectionThree() {
  const tarif = [
    {
      title: "Imkon",
      description:
        "Ushbu tarif endigina davlat ro`yxatidan o`tgan mijozlarimizga taqdim etiladi. Davlat ro`yxatidan o`tgan sanadan boshlab dastlabki 3 oy bepul xizmat ko`rsatiladi. Ushbu muddatdan so`ng keyingi qaysi tarifga o`zgarishi kelishiladi.",
      img: imkon,
    },
    {
      title: "Standart",
      description:
        "Ushbu tarif ishchi-hodimlar soni 5 nafargacha bo`lgan yillik aylanmasi 1 milliardgacha bo`lgan tadbirkorlar uchun mos keladi. Xizmat uchun oylik to`lov 2 mln so`m.",
      img: standard,
    },
    {
      title: "Premium",
      description: "Ushbu tarif ishchi - hodimlar soni 5 nafardan ortiq bo`lgan, nisbatan hujjatlar aylanishi ko`proq bo`lgan va yillik aylanmasi 1 milliard so`mdan ortiqni tashkil etuvchi korxonalar uchun tavsiya etiladi.",
      img: premium,
    },
  ];
  return (
    <div id="paket" className="bg-[#073843]">
      <div className="container mx-auto my-[50px]">
        <div className="pt-[70px]">
          <h1 className="text-center text-[#F0EAD6] font-[700] text-[56px]">
            Ta`riflar
          </h1>
          <img src={line2} alt="line" className="mx-[180px] md:mx-[400px] lg:mx-[500px] xl:mx-[650px] 2xl:mx-[720px] 2xl:h-[15px]" />
        </div>
        <div className="grid lg:grid-cols-3 gap-6 py-[70px] px-2 md:px-0 xl:px-2 2xl:px-0">
          {tarif.map((el, index) => (
            <div key={index} className=" border-2 border-[#D35E25] p-5 rounded-2xl text-[#F0EAD6]">
              <div className="w-full flex items-center ">
                <img src={el.img} alt="" className="w-[80px] md:w-[120px] h-[80px] object-cover" />
                <h1 className=" mx-auto text-[42px] md:text-[56px] lg:text-[42px] font-[700]">{el.title}</h1>
              </div>
              <div className="text-[#F0EAD6] mt-6 text-[20px] md:text-[26px] lg:text-[18px]">
                <p className="text-justify">{ el.description }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
