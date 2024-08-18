import Header from "./component/Header/Header";
import SectionOne from "./views/SectionOne/SectionOne";
import SectionThree from "./views/SectionThree/SectionThree";
import SectionTwo from "./views/SectionTwo/SectionTwo";

function App() {

  return (
    <div className="">
      <Header />
      <div>
        <SectionOne />
        <SectionTwo />
        <SectionThree/>
      </div>
    </div>
  )
}

export default App
