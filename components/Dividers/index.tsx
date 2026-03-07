type DividersProps = {
    className?: string;
    classInner?: string;
    hero?: boolean;
    light?: boolean;
    children?: React.ReactNode;
};

const Dividers = ({
    className,
    classInner,
    hero,
    light,
    children,
}: DividersProps) => (
    <div
        className={`relative ${hero ? "pt-22 md:pt-18" : ""} ${
            className || ""
        }`}
    >
        <div className={`relative z-2 ${classInner || ""}`}>{children}</div>
        <div className="absolute top-0 left-1/2 bottom-0 flex justify-between w-[81rem] -translate-x-1/2 pointer-events-none 3xl:w-[75rem] lxl:left-6 lxl:right-6 lxl:w-auto lxl:translate-x-0 md:left-4.5 md:right-4.5">
            {Array.from(Array(5).keys()).map((x) => (
                <div
                    className={`w-0.25 bg-repeat bg-[length:100%_.5rem] opacity-60 ${
                        light
                            ? "bg-gradient-divider-light"
                            : "bg-gradient-divider"
                    }`}
                    key={x}
                ></div>
            ))}
        </div>
    </div>
);

export default Dividers;
