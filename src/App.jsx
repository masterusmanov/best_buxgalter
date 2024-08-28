import Header from "./component/Header/Header";
import SectionOne from "./views/SectionOne/SectionOne";
import SectionThree from "./views/SectionThree/SectionThree";
import SectionTwo from "./views/SectionTwo/SectionTwo";
import SectionFour from "./views/SectionFour/SectionFour";
import SectionFive from "./views/SectionFive/SectionFive";
import SectionSex from "./views/SectionSex/SectionSex";
import SectionSeven from "./views/SectionSeven/SectionSeven";
import SectionEight from "./views/SectionEight/SectionEight";
import Footer from "./component/Footer/Footer";

function App() {

  return (
    <div id="#home" className="">
      <marquee direction="" className="text-red-600 font-[700] text-[16px]">
        Muhim yangilik! Xizmatimizdan mamnun bo’lsangiz do’stlaringizga tavsiya
        eting. Har qanday tarifdagi mijozimiz tavsiyasi orqali kelgan yangi
        mijoz uchun tavsiya etgan shaxsga o’z tarifidagi 1 oylik to’lovning 20%i
        miqdorida bir martalik chegirma beriladi.
      </marquee>
      <Header />
      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSex />
        <SectionSeven />
        <SectionEight/>
      </div>
      <Footer/>
    </div>
  );
}

export default App
