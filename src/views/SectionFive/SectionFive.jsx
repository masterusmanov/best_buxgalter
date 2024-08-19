import line from "../../assets/SectionTwo/line.svg";

export default function SectionFive() {
  return (
    <div className="bg-[#D35E25]">
      <div className="container mx-auto ">
        <div className="py-[70px]">
          <h1 className="text-center text-[#F0EAD6] font-[700] text-[56px]">
            Bizning ustunlik jihatlarimiz
          </h1>
          <img src={line} alt="line" className="h-[15px] mx-[1000px]" />
        </div>
        <div className="flex items-center gap-6 pb-[50px]">
          <div className="w-1/4 h-[210px] border-[#073843] rounded-2xl p-5">
            <div className="flex gap-3 justify-center">
              <i className="bx bx-user text-[80px] text-[#F0EAD6]"></i>
            </div>
            <div className="my-[20px]">
              <h1 className="text-center font-[700] text-[24px] text-[#F0EAD6]">
                Har bir mijozga alohida yondashuv
              </h1>
            </div>
          </div>
          <div className="w-1/4 h-[210px] border-[#073843] rounded-2xl p-5">
            <div className="flex gap-3 justify-center">
              <i className="bx bx-cog text-[80px] text-[#F0EAD6]"></i>
            </div>
            <div className="my-[20px]">
              <h1 className="text-center font-[700] text-[24px] text-[#F0EAD6]">
                Yuqori sifatli xizmatlar
              </h1>
            </div>
          </div>
          <div className="w-1/4 h-[210px] border-[#073843] rounded-2xl p-5">
            <div className="flex gap-3 justify-center">
              <i className="bx bx-briefcase text-[80px] text-[#F0EAD6]"></i>
            </div>
            <div className="my-[20px]">
              <h1 className="text-center font-[700] text-[24px] text-[#F0EAD6]">
                Biz o'z ishimizni bilamiz
              </h1>
            </div>
          </div>
          <div className="w-1/4 h-[210px] border-[#073843] rounded-2xl p-5">
            <div className="flex gap-3 justify-center">
              <i className="bx bxs-user-check text-[80px] text-[#F0EAD6]"></i>
            </div>
            <div className="my-[20px]">
              <h1 className="text-center font-[700] text-[24px] text-[#F0EAD6]">
                Bizda faqat mutaxassislar
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
