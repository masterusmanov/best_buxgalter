import "./Partner.css";
import Hischool from "../../assets/Partner/Hischool.png";
import Supermiya_logo from "../../assets/Partner/Supermiya_logo.png";
import supermiya_color from "../../assets/Partner/supermiya_color.png";
import Spetion from "../../assets/Partner/Spetion.png";
import GL from "../../assets/Partner/GL.png";
import Target from "../../assets/Partner/Target.png";
import Basaltkom from "../../assets/Partner/Basaltkom.png";
import masshtab from "../../assets/Partner/masshtab.png";
import modern from "../../assets/Partner/modern.png";
import medical from "../../assets/Partner/medical.png";
import tuyxona from "../../assets/Partner/tuyxona.png";
import sinfxona from "../../assets/Partner/sinfxona.png";
import zulxumor from "../../assets/Partner/zulxumor.png";

const images = [
  Hischool,
  medical,
  Supermiya_logo,
  Target,
  Spetion,
  supermiya_color,
  GL,
  Basaltkom,
  masshtab,
  modern,
  tuyxona,
  sinfxona,
  zulxumor,
  // Duplicate images to create the seamless scroll effect
  Hischool,
  medical,
  Supermiya_logo,
  Target,
  Spetion,
  supermiya_color,
  GL,
  Basaltkom,
  masshtab,
  modern,
  tuyxona,
  sinfxona,
  zulxumor,
];

const Partner = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Partner;
