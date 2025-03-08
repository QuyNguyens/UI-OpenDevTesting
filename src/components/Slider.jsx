import Attraction from "./Attraction";
import Footer from "./Footer";
import Entertainment from "./Entertainment";
import Registration from "./Registration";
import Banner from "./Banner";
import Gift from "./Gift";

const ImageSlider = () => {

  return (
    <div className="flex flex-col gap-10 lg:gap-25">
      <Banner />
      <Registration />
      <Entertainment/>
      <Attraction />
      <Gift/>
      <Footer/>
    </div>
  );
};

export default ImageSlider;
