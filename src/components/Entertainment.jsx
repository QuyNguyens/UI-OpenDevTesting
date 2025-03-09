import arrowRight from "../assets/arrow-right.svg"
import entertainment from "../assets/entertainment.png";
import play from "../assets/play.svg";
import blackBlur from "../assets/black-blur.png";

const Entertainment = () => {
  return (
          <div className="pl-6 pr-6 w-full h-auto lg:h-[867px] flex flex-col items-center">
            <div className="flex flex-col items-center w-full gap-8 mx-auto lg:w-84_66 lg:items-end lg:gap-12">
              
              <div className="w-full lg:w-[81.79%] flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-6 lg:gap-0">
                <div className="w-full lg:w-[55.2%] flex flex-col gap-4 lg:gap-8 flex-shrink-0">
                  <h1 className="w-full text-4xl font-bold uppercase font-big-shoulders-text lg:text-7xl text-white-200">
                    New entertainment centre near Cheb
                  </h1>
                  <p className="w-full lg:w-[64.5%] font-space-grotesk font-normal text-base-16 text-white-200">
                    We have been entertaining children and adults in western Bohemia for more than 10 years!
                  </p>
                </div>
                <div className="flex items-end justify-center w-full h-full lg:justify-end">
                  <div className="flex items-end justify-center gap-3 lg:flex-1 lg:flex-row lg:justify-end">
                    <span className="font-medium font-space-grotesk text-base-16 text-white-200">
                      Find more about us
                    </span>
                    <img className="w-6 h-6" src={arrowRight} alt="" />
                  </div>
                </div>
              </div>
    
              <div className="relative w-full h-75 lg:h-[567px] rounded-3xl overflow-hidden">
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${entertainment})` }}
                />
                <div
                    className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-50 z-1"
                    style={{ backgroundImage: `url(${blackBlur})` }}
                />
                <img
                    className="absolute w-12 h-48 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-20 lg:h-80 z-2"
                    src={play}
                    alt=""
                />
            </div>

            </div>
          </div>
  )
}

export default Entertainment