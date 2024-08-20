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
            <img src={line} alt="line" className="h-[15px] mx-[900px]" />
          </div>
        </div>
        <Partner />
      </div>
    );
}