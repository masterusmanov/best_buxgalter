import Menu from '../../component/Menu/Menu'
import './SectionOne.css'

export default function SectionOne() {
    return (
      <div id="home" className="main lg:h-[700]">
        <div className="container mx-auto">
          <Menu className="" />
          <div className="text-[#073843] font-[700] text-[48px] lg:w-[60%] 2xl:w-1/2 grid gap-14 py-[100px] xl:py-[150px] 2xl:py-[200px] xl:px-2 2xl:px-0">
            <div>
              <h1 className="text-[40px] lg:text-[48px] text-center lg:text-start w-full ">
                "Hisob-kitob aniq bo`lsa, biznes muvaffaqiyatli bo`ladi."
              </h1>
              <p className="text-[24px] lg:text-[38px] text-end lg:float-right  mr-[100px]">Genry Ford</p>
            </div>

            <button className="mx-auto lg:mx-[150px] text-[18px] border-4 border-[#D35E25] text-[#D35E25] py-2 px-4 w-[200px] rounded-lg hover:bg-[#2f3b3d] hover:text-white hover:border-[#2f3b3d]">
              Bog`lanish
            </button>
          </div>
        </div>
      </div>
    );
}