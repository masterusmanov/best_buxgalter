import SectionEight from "../SectionEight/SectionEight";
import SectionFive from "../SectionFive/SectionFive";
import SectionFour from "../SectionFour/SectionFour";
import SectionOne from "../SectionOne/SectionOne";
import SectionSeven from "../SectionSeven/SectionSeven";
import SectionSex from "../SectionSex/SectionSex";
import SectionThree from "../SectionThree/SectionThree";
import SectionTwo from "../SectionTwo/SectionTwo";

export default function MainPage() {
    return (
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
    )
}