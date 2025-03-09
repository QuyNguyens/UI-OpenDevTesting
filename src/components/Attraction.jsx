import { useState } from "react";
import polygonBlue from "../assets/polygon-blue.svg";
import polygonRed from "../assets/polygon-red.svg";
import { attractionData } from "../static/data/attraction";
import blackBlur from "../assets/black-blur.png";
import "./attraction.css";

const Attraction = () => {
    const [selectedAttraction, setSelectedAttraction] = useState(attractionData[1]);

  return (
    <div className="pl-6 pr-6 pt-25 w-full pb-25 h-full lg:h-[858px] flex flex-col gap-12">
      <div className="w-84_66 mx-auto h-[86px] flex flex-col gap-3 lg:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold font-big-shoulders-text lg:text-7xl text-white-200">
          OUR ATTRACTIONS
        </h1>
        <div className="flex items-center gap-6">
          <span className="font-medium font-space-grotesk text-base-16 text-white-200">
            Multiple activities at Fun Arena Cheb
          </span>
          <div className="flex items-center">
            <img className="w-4 h-4" src={polygonRed} alt="" />
            <img className="w-4 h-4" src={polygonBlue} alt="" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-84_66">
        <div className="flex flex-col w-full gap-8 lg:flex-row">
          
          <div className="relative order-1 w-full lg:flex-1 lg:order-2">
            <div
              className="w-full h-[518px] rounded-3xl bg-cover bg-center transition-all duration-300 relative"
              style={{ backgroundImage: `url(${selectedAttraction.image})` }}
            >
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-20 z-1"
              style={{ backgroundImage: `url(${blackBlur})` }}
            />
            </div>

            <div className="absolute bottom-0 right-0 w-full lg:w-[95.76%] h-auto flex flex-col lg:flex-row lg:justify-between items-center lg:items-end gap-3 lg:gap-0 z-2">
              <p className="leading-[100%] mb-4 w-full lin lg:w-[49%] font-space-grotesk font-normal text-base-16 text-white text-center lg:text-left">
                {selectedAttraction.desc}
              </p>
              <div className="flex justify-center w-full lg:w-auto lg:justify-end">
                <button className="px-6 py-3 font-bold rounded-full font-space-grotesk text-base-16 bg-white-200 hover:bg-white-400 text-black-500">
                  Find out more
                </button>
              </div>
            </div>

          </div>

          <div className="w-full lg:w-[39%] flex items-center order-2 lg:order-1">
            <div className="flex flex-col w-full gap-3">
              {attractionData.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-[92%] h-16 attraction-trapezoid cursor-pointer overflow-hidden 
                              hover:w-[100%] ${selectedAttraction.title === item.title ? "active" : ""}`}
                  onClick={() => setSelectedAttraction(item)}
                  style={{ "--bg-image": `url(${item.image})` }}
                >
                  <div className="inner-content">
                    <span className="absolute top-1/2 right-5 -translate-y-1/2 font-big-shoulders-text font-normal text-[32px] uppercase text-black-500">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>

  
  )
}

export default Attraction