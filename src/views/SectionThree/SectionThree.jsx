import line2 from "../../assets/SectionTwo/line2.svg";

export default function SectionThree() {
  return (
    <div className="bg-[#073843]">
      <div className="container mx-auto my-[50px]">
        <div className="py-[70px]">
          <h1 className="text-center text-[#F0EAD6] font-[700] text-[56px]">
            Biz haqimizda
          </h1>
          <img src={line2} alt="line" className="mx-[720px] h-[15px]" />
        </div>
      </div>
    </div>
  );
}
