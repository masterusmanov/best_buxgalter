import './SectionOne.css'

export default function SectionOne() {
    return (
      <div className="main">
        <div className="container mx-auto">
          <div className="text-[#073843] font-[700] text-[48px] w-1/2 grid gap-14 py-[200px]">
            <div>
              <h1 className="">
                "Hisob-kitob aniq bo`lsa, <br /> biznes muvaffaqiyatli bo`ladi."
              </h1>
              <p className="text-[38px] float-right  mr-[100px]">Genry Ford</p>
            </div>

            <button className="text-[18px] border-4 border-[#D35E25] text-[#D35E25] py-2 px-4 w-[200px] rounded-lg hover:bg-[#2f3b3d] hover:text-white hover:border-[#2f3b3d]">
              Bog`lanish
            </button>
          </div>
        </div>
      </div>
    );
}