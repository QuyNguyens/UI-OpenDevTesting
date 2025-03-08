import gift from "../assets/gift.svg";
import blackBlur from "../assets/black-blur.png";

const Gift = () => {
  return (
    <div className="w-full h-auto lg:h-[109px] pl-6 pr-6 flex justify-center gap-[10px]">
        <div className="relative flex flex-col lg:flex-row items-center justify-center w-[84.66%] lg:w-[66.13%] pt-6 pb-6 pl-[10px] pr-[10px] bg-red-500 rounded-3xl">
        <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-20"
            style={{ backgroundImage: `url(${blackBlur})` }}
        />
        <div className="absolute left-0 hidden -translate-y-1/2 lg:block w-55 h-55 top-1/2">
            <img className="w-full h-full" src={gift} alt="" />
        </div>
        <div className="flex flex-col w-full lg:w-[66.8%] h-full gap-1 ml-0 lg:ml-12 z-2">
            <h4 className="font-medium text-2xl lg:text-[32px] font-space-grotesk text-white leading-none">Make somebody happy with a gift voucher</h4>
            <p className="font-medium leading-none text-white text-base-16 font-space-grotesk">The voucher is valid for all services. Unforgettable experiences for children and adults!</p>
        </div>
        <button className="absolute right-0 hidden pt-3 pb-3 pl-6 pr-6 font-bold translate-x-1/2 -translate-y-1/2 bg-white hover:bg-white-200 lg:block h-11 top-1/2 text-base-16 font-space-grotesk leading-1 text-black-500 rounded-xl">
            <a href="https://vouchers.funarenacheb.cz/c/darkovy-poukaz">Buy now</a>
        </button>
        <button className="block w-1/2 pt-3 pb-3 pl-6 pr-6 font-bold bg-white hover:bg-white-200 lg:hidden h-11 text-base-16 font-space-grotesk leading-1 text-black-500 rounded-xl">
            <a href="https://vouchers.funarenacheb.cz/c/darkovy-poukaz">Buy now</a>
        </button>
        </div>
    </div>
  )
}

export default Gift