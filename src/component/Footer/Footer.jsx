import logo2 from '../../assets/logo/logo2.svg'
export default function Footer() {
    return (
      <div className="bg-[#073843] border-t-4">
        <div className="flex items-center gap-6 justify-center text-[#F0EAD6] text-[24px]">
          <div className="w-1/3">
            <div className="flex gap-6 items-center ">
              <img src={logo2} alt="logo" className="w-[250px]" />
              {/* <h1>BESTBUXGALTER.UZ</h1> */}
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex items-center justify-end gap-4">
              <i className="bx bx-phone"></i>
              <h1>+998999098015</h1>
            </div>
            <div className="flex items-center justify-end gap-4">
              <i className="bx bxl-telegram text-blue-500"></i>
              <a href="https://t.me/best_buxgalter">@best_buxgalter</a>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between px-5'>
        <h1 className="text-center text-[20px] text-[#F0EAD6]">
          ©{new Date().getFullYear()}. Barcha huqular himoyanlangan
        </h1>
          <div>
            <h1 className='text-end text-[#F0EAD6]'>Powered by</h1>
            <p className="text-end w-full text-[#F0EAD6]"><a href="https://t.me/masterusmanov"><span> <i className="bx bxl-telegram text-blue-500"></i></span> @masterusmanov</a> <br /><span><i className="bx bx-phone"></i></span> +998972179900</p>
          </div>
       </div>
      </div>
    );
}