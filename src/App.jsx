import Header from "./component/Header/Header";
import SectionOne from "./views/SectionOne/SectionOne";
import SectionTwo from "./views/SectionTwo/SectionTwo";

function App() {

  return (
    <div className="">
      <Header />
      <div>
        <SectionOne />
        <SectionTwo/>
      </div>
    </div>
  )
}

export default App
