export default function Footer() {
    return (
      <div className="bg-[#073843] py-[50px] border-t-4">
        <div className="flex items-center gap-6 justify-center text-[#F0EAD6] text-[28px]">
          <div className="w-1/3">
            <h1>BESTBUXGALTER.UZ</h1>
          </div>
          <div className="w-1/3">
            <div className="flex items-center gap-4 float-right">
              <i className="bx bx-phone"></i>
              <h1>+998999098015</h1>
            </div>
            <div className="flex items-center gap-4">
              <i className="bx bxl-telegram text-blue-500"></i>
              <a href="https://t.me/best_buxgalter">@best_buxgalter</a>
            </div>
          </div>
            </div>
            <h1 className="text-center mt-[40px] text-[20px] text-[#F0EAD6]">©{new Date().getFullYear()} </h1>
      </div>
    );
}