import bestlogo from '../../assets/bestlogo.svg';
import uzb from "../../assets/background/uzb.png";
import rus from "../../assets/background/rus.png";
import eng from '../../assets/background/eng.png'
import './Header.css'
export default function Header() {
  return (
    <div className="container mx-auto px-2 lg:px-0 xl:px-2 2xl:px-0 flex items-center justify-between">
      <img
        src={bestlogo}
        alt=""
        className="w-[120px] md:w-[150px] xl:w-[200px]"
      />
      <div className="lg:flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-10 font-bold text-[13px] xl:text-[16px] mr-14">
          <a href="/">BOSH SAHIFA</a>
          <a href="#about">BIZ HAQIMIZDA</a>
          <div className="dropdown">
            <button className="dropbtn font-bold text-[13px] xl:text-[16px]">
              XIZMATLAR
            </button>
            <div className="dropdown-content text-[16px] font-[500]">
              <a href="/all_service">Barcha turdagi buxgalteriya xizmatlari</a>
              <a href="/recovery">Buxgalteriya hisobini tiklash</a>
              <a href="/audit">
                Buxgalteriya hujjatlarini audit qilish,korxonangiz uchun ichki
                audit xizmatini tashkil qilish
              </a>
              <a href="/financ">
                Moliyaviy, soliq va statistik hisobotlarni tuzish
              </a>
              <a href="/policy"> Hisob siyosatini tuzish</a>
              <a href="/business">
                Biznesni ro`yhatdan o`tkazish, o`zgarishlarni rasmiylashtirish
                va tugatish
              </a>
            </div>
          </div>
          <a href="#">YANGILIKLAR</a>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div className="flex gap-3 items-center font-[700]">
              <i className="bx bxs-phone text-red-500 text-[14px] lg:text-[20px] 2xl:text-[20px]"></i>
              <h1 className="text-[14px] lg:text-[18px] 2xl:text-[20px]">
                +998999098015
              </h1>
            </div>
            <div className="flex gap-3 items-center text-[18px] font-[700] mt-3">
              <i className="bx bxl-telegram text-blue-500 text-[14px] lg:text-[20px] 2xl:text-[20px]"></i>
              <a
                href="https://t.me/best_buxgalter"
                className="text-[14px] lg:text-[18px] 2xl:text-[20px]"
              >
                @best_buxgalter
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 font-[700]">
              <img src={uzb} alt="" className="w-[15px] lg:w-[25px]" />
              <span className="text-[14px] lg:text-[18px] 2xl:text-[20px]">
                UZB
              </span>
            </div>
            <div className="flex items-center gap-2 font-[700]">
              <img src={rus} alt="" className="w-[15px] lg:w-[25px]" />
              <span className="text-[14px] lg:text-[18px] 2xl:text-[20px]">
                RUS
              </span>
            </div>
            <div className="flex items-center gap-2 font-[700]">
              <img src={eng} alt="" className="w-[15px] lg:w-[25px]" />
              <span className="text-[14px] lg:text-[18px] 2xl:text-[20px]">
                ENG
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}