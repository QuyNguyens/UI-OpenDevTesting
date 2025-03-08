import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { bannerData } from "../static/data/banner";
import plag from "../assets/plag.svg";
import phone from "../assets/phone.svg";
import reserveBtn from "../assets/reserve_btn.svg";
import TrapezoidButton from "./TrapezoidButton";

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
        appendDots: dots => (
          <div className="absolute">
            <ul className="flex h-4 gap-2 w-28">{dots}</ul>
          </div>
        ),
        customPaging: i => (
            <div
                className={`w-4 h-4 p-[2px] rounded-full transition-all duration-300
                ${i === activeIndex ? "bg-white border border-solid border-black" : "bg-white/70 hover:bg-white hover:border hover:border-solid hover:border-black"}`}
            ></div>
        )
    };

    return (
        <div className="w-full h-[720px] relative">
            <Slider {...settings}>
                {bannerData.map((value, index) => (
                    <div key={index} className="relative w-full h-[720px] overflow-hidden">
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-cover overlay-gradient"
                            style={{ backgroundImage: `url(${value.image})` }}
                        />
                        <div className="absolute w-full inset-0 flex flex-col lg:flex-row justify-center lg:justify-between items-end text-white pt-[50px] pb-[50px] px-12">
                            <div className="mb-8 w-full lg:w-[552.25px] overflow-visible">  
                                <h1 className="text-[80px] md:text-[100px] lg:text-[120px] font-big-shoulders font-[700] leading-[100px] md:leading-[120px] lg:leading-[143px] whitespace-nowrap">{value.title}</h1>
                                <div className="flex flex-col items-center justify-between mt-2 md:flex-row">
                                    <p className="w-full md:w-[347px] h-auto text-white-200 font-normal text-sm font-space-grotesk text-center md:text-left">{value.desc}</p>
                                    <TrapezoidButton isFind={true} backgroundColor="bg-white-200">
                                        <span className="font-medium font-space-grotesk text-base-16">Find out more</span>
                                    </TrapezoidButton>
                                </div>
                            </div>

                            <div className="flex justify-end relative w-full lg:w-[573px] h-auto">
                                <div className="relative w-full md:w-[382px] h-full p-4 bg-black-200 rounded-4xl">
                                    <div className="absolute left-[-10px] top-[-18px] w-[87px] h-[87px]">
                                        <img src={plag} alt="" />
                                    </div>
                                    <h3 className="text-white-200 text-center md:text-end w-full md:w-[352px] h-[38px] font-big-shoulders-text font-[400] text-2xl md:text-[32px]">EVERYDAY FUN FOR EVERYONE</h3>
                                    <p className="text-white-200 mt-3 font-space-grotesk font-normal text-sm text-center md:text-left w-full md:w-[352px] h-auto">
                                        A few kilometers from Cheb, we have built a new entertainment centre 
                                        <span className="text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
                                            {" FUN Arena Cheb "}
                                        </span>
                                        for you. You will find entertainment and sports activities for children and adults here.
                                    </p>
                                    <div className="flex gap-[10px] items-center w-auto md:w-[178px] h-[38px] rounded-4xl absolute bg-white-200 right-0 bottom-[-20px] p-1 pl-3">
                                        <span className="w-auto text-sm font-bold text-black-500 md:text-base-16 font-lexend-deca">+420737878891</span>
                                        <img className="w-6 md:w-[30px] h-6 md:h-[30px]" src={phone} alt="" />
                                    </div>
                                </div>
                            </div>        
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-7px]">
                <img className="w-[264.75px] h-[65px]" src={reserveBtn} alt="" />
            </div>
        </div>
    );
}

export default Banner;
