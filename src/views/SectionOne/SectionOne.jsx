import './SectionOne.css'

export default function SectionOne() {
    return (
      <div className="main">
        <div className="container mx-auto">
          <div className="text-[#073843] font-[700] text-[48px] w-1/2 grid gap-10 py-[50px]">
            <h1 className="font-kaushan">
              Buxgalteriya bo`yicha barcha xizmatlar
            </h1>
            <h1 className="font-kaushan">
              Moliyaviy xisobotni Milliy standartlar (BHMS)dan xalqaro
              standartlar (IFRS)ga o`girish
            </h1>
            <h1 className="font-kaushan">
              Xisob siyosati va Biznes-reja tuzish <br />
              Boshqaruv xisobini tashkil etish
            </h1>
            <button className="text-[18px] bg-[#073843] text-white py-2 px-4 w-[200px] rounded-lg hover:bg-[#2f3b3d]">
              Bog`lanish
            </button>
          </div>
        </div>
      </div>
    );
}