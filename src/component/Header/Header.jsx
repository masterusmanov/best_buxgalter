import bestlogo from '../../assets/bestlogo.svg';
import uzb from "../../assets/background/uzb.png";
import rus from "../../assets/background/rus.png";
import eng from '../../assets/background/eng.png'
import './Header.css'
export default function Header() {
    return (
      <div className="container mx-auto flex items-center justify-between">
        <img src={bestlogo} alt="" className="w-[200px]" />
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-10 font-bold text-[16px] mr-14">
            <a href="">Bosh sahifa</a>
            <a href="">Biz haqimizda</a>
            <div className="dropdown">
              <button className="dropbtn font-bold text-[16px]">
                Xizmatlar
              </button>
              <div className="dropdown-content text-[16px] font-[500]">
                <a href="#">Barcha turdagi buxgalteriya xizmatlari</a>
                <a href="#">Buxgalteriya hisobini tiklash</a>
                <a href="#">
                  Buxgalteriya hujjatlarini audit qilish,korxonangiz uchun ichki
                  audit xizmatini tashkil qilish
                </a>
                <a href="#">
                  Moliyaviy, soliq va statistik hisobotlarni tuzish
                </a>
                <a href="#"> Hisob siyosatini tuzish</a>
                <a href="#">
                  Biznesni ro`yhatdan o`tkazish, o`zgarishlarni rasmiylashtirish
                  va tugatish
                </a>
              </div>
            </div>
            <a href="">Yangiliklar</a>
          </div>
          <div className="flex items-center gap-6">

            <div>
              <div className="flex gap-3 items-center text-[18px] font-[700]">
                <i className="bx bxs-phone text-red-500 text-[24px]"></i>
                <h1>+998999098015</h1>
              </div>
              <div className="flex gap-3 items-center text-[18px] font-[700] mt-3">
                <i className="bx bxl-telegram text-blue-500 text-[24px]"></i>
                <a href="https://t.me/best_buxgalter">@best_buxgalter</a>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-2 font-[700]'>
                <img src={uzb} alt="" className="w-[25px]" />
                <span>UZB</span>
              </div>
              <div className='flex items-center gap-2 font-[700]'>
                <img src={rus} alt="" className="w-[25px]" />
                <span>RUS</span>
              </div>
              <div className='flex items-center gap-2 font-[700]'>
                <img src={eng} alt="" className="w-[25px]"/>
                <span>ENG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}