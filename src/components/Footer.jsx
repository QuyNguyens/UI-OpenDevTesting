import logoFooter from "../assets/logo-footer.svg";
import fbIcon from "../assets/icon-fb.svg";
import insIcon from "../assets/icon-ins.svg";
import mailIcon from "../assets/icon-mail.svg";
import phoneIcon from "../assets/icon-phone.svg";
import arrowUp from "../assets/arrow-up.svg";

const Footer = () => {
  return (
    <div className='flex w-full flex-col gap-6 rounded-[1px] h-[319px] pt-20 pb-20 pl-6 pr-6 border border-top border-black-500'>
        <div className='flex flex-col items-center justify-between mx-auto w-84_66 lg:flex-row'>
            <img className="w-50 h-[95px]" src={logoFooter} alt="logo footer" />
            <p className="w-full text-center lg:text-start lg:w-[23.43%] font-normal text-sm font-space-grotesk leading-tight-150 text-white">New entertainment centre FUN arena Cheb. You will find entertainment and sports activities for children and adults here.</p>
            <p className="w-full lg:w-auto flex flex-col items-center lg:items-end justify-center lg:justify-end gap-[10px] font-normal text-sm font-space-grotesk leading-tight-150 text-white">
                <span>Potočiště 3, 350 02 Odrava</span>
                <span>fun@funarenacheb.cz</span>
                <span>+420737878891</span>
            </p>
        </div>
        <div className='flex flex-col items-center justify-between mx-auto w-84_66 lg:flex-row'>
            <div className="flex gap-3 pt-1 pb-1 pl-3 pr-3 rounded-[300px] bg-black-500">
                <img className="w-8 h-8" src={fbIcon} alt="facebook" />
                <img className="w-8 h-8" src={insIcon} alt="instagram" />
                <img className="w-8 h-8" src={mailIcon} alt="email" />
                <img className="w-8 h-8" src={phoneIcon} alt="phone" />
            </div>
            <div className="flex items-center gap-12">
                <span className="text-sm font-normal text-white font-space-grotesk">© 2025 FUN Arena Cheb. All rights Reserved.</span>
                <div className="flex justify-center items-center w-10 h-10 pt-[9px] pb-[9px] pr-[6px] pl-[6px] rounded-full bg-black-500">
                    <img className="w-3 h-[6px]" src={arrowUp} alt="arrow up" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer