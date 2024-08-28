import Partner from "../../component/Partner/Partner";
import line from "../../assets/SectionTwo/line.svg";

export default function SectionSex() {
    return (
      <div>
        <div className="container mx-auto ">
          <div className="py-[70px]">
            <h1 className="text-center text-[#073843] font-[700] text-[56px]">
              Hamkor mijozlarimiz
            </h1>
            <img src={line} alt="line" className="h-[10px] lg:h-[15px] mx-[170px] md:mx-[530px] lg:mx-[600px] xl:mx-[720px] 2xl:mx-[850px]" />
          </div>
        </div>
        <Partner />
      </div>
    );
}