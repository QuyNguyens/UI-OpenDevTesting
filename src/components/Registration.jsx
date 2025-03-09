import { registrationData } from "../static/data/registration";
import qr from "../assets/qr.svg";
import TrapezoidButton from "./TrapezoidButton";
import logo from "../assets/Floating Logo.svg";

const Registration = () => {
  return (
    <div className="relative w-full h-auto pl-6 pr-6 pt-25 pb-25">
        <div className="absolute -translate-y-8 left-20 top-1/2">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-12 mx-auto w-84_66 md:flex-row md:gap-20">
          <div className="flex flex-col w-full md:w-[44.21%] gap-8">
            <h1 className="text-white-200 font-bold font-big-shoulders-text text-[42px] md:text-[56px] lg:text-7xl">
              REGISTRATION
            </h1>
            <p className="text-sm font-normal text-white-200 font-space-grotesk md:text-base-16 leading-tight-150">
              For organizational and security reasons, every visitor to the FUN arena Cheb must register before entering the attraction. At the reception, your registration will be completed and you will receive a loyalty card which you will use for our services.
            </p>
          </div>
          <div className="flex flex-col gap-12 w-full md:w-[49.5%]">
            {registrationData.map((step, index) => (
              <div key={index} className="flex flex-col w-full gap-2">
                <div className="flex items-end gap-3">
                  <TrapezoidButton backgroundColor="!bg-black-200" border="none" width="66px" height="50px">
                    <span className="text-4xl font-bold text-blue-300 space-grotesk md:text-5xl lg:text-7xl" style={{ lineHeight: '50px' }}>
                      {step.number}
                    </span>
                  </TrapezoidButton>
                  <div className="relative w-full">
                    <TrapezoidButton backgroundColor="!bg-black-200" justifyContent="start" border="none" width="auto" height="64px">
                      <span className="ml-5 text-xl font-bold font-space-grotesk md:text-2xl text-white-200">
                        {step.title}
                      </span>
                    </TrapezoidButton>
                    {
                      step.title=="Register" && <div className="absolute flex gap-3 right-4 top-1/5">
                          <div className="mt-2">
                            <a href="https://web.racefacer.com/kiosk/kartarenacheb" target="_blank" rel="noopener noreferrer" className="font-space-grotesk font-bold text-sm text-white rounded-[8px] bg-red-500 hover:bg-red-400 pt-1 pb-1 pl-2 pr-2">Click here</a>
                          </div>
                          <div className="hidden w-32 h-32 rounded-xl lg:block">
                            <img src={qr} alt="" />
                          </div>
                      </div>
                    }
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-[66px]"></div>
                  <div className={`ml-5 ${step.title=="Register" ? "lg:w-[56%] md:w-[70%]" : "w-[70%]"}`}>
                    <span className="text-sm font-normal font-space-grotesk text-white-200 md:text-base-16">
                      {step.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Registration