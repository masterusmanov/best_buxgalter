import bestlogo from '../../assets/bestlogo.svg';
import './Header.css'
export default function Header() {
    return (
      <div className="flex items-center justify-between">
        <img src={bestlogo} alt="" className="w-[200px]" />
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-10 font-bold text-[18px]">
            <a href="">Bosh sahifa</a>
            <a href="">Tashkilot haqida</a>
            <a href="">Yangiliklar</a>
            <div className="dropdown">
              <button className="dropbtn font-bold text-[18px]">
                Xizmatlar
              </button>
              <div className="dropdown-content text-[14px] font-[500]">
                <a href="#">Barcha turdagi buxgalteriya xizmatlari</a>
                <a href="#">Buxgalteriya hisobini tiklash</a>
                <a href="#">Buxgalteriya hujjatlarini audit qilish,korxonangiz uchun ichki audit xizmatini tashkil qilish</a>
                <a href="#">Moliyaviy, soliq va statistik hisobotlarni tuzish</a>
                <a href="#">    Hisob siyosatini tuzish</a>
                <a href="#">Biznesni ro`yhatdan o`tkazish, o`zgarishlarni rasmiylashtirish va tugatish</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#363891] py-2 px-4 text-white rounded-xl">
              Bog`lanish
            </button>
            <select name="cars" id="cars">
              <option disabled>Tilni tanlang</option>
              <option value="UZB">UZB</option>
              <option value="RUS">RUS</option>
              <option value="ENG">ENG</option>
            </select>
          </div>
        </div>
      </div>
    );
}