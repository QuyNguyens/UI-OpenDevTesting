import "./trapezoi.css"

const TrapezoidButton = ({
  children,
  backgroundColor = "transparent",
  width = "162.25px",
  height = "49px",
  skewX = "-23deg",
  border = "1px solid #D9D9D9",
  borderRadius = "7px",
  justifyContent = "center",
  isFind = false,
}) => {
  return (
    <div
      className={`button-trapezoid ${backgroundColor} ${width=="auto" ? "flex-1": ""} ${isFind ? "hover:!bg-white-200 hover:!text-black-500" : ""}`}
      style={{
        width,
        height,
        transform: `skewX(${skewX})`,
        border,
        borderRadius,
        justifyContent,
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="flex items-center h-full"  style={{ transform: `skewX(${parseFloat(skewX) * -1}deg)` }}>
        {children}
      </div>
    </div>
  );
};

export default TrapezoidButton;
