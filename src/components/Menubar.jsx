import logo from "../assets/logo.svg";
import earth from "../assets/earth.svg";
import menu from "../assets/menu.svg";

export default function Menubar() {
  return (
    <div className="fixed top-[20px] w-full flex justify-between z-100 pl-[46px] pr-[46px]">
        <div className="flex-1">
            <img className="w-[125.36px] h-[40.38px]" src={logo} alt="logo"/>
        </div>
        <div className="flex w-[108px] h-[48px] gap-8 items-center">
            <img className="w-[28px] h-[28px]" src={earth} alt="" />
            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-black-500">
                <img className="w-[18.67px] h-[16.33px]" src={menu} alt="" />
            </div>
        </div>
    </div>
  );
}
