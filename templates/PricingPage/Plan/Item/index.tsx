import { useState } from "react";
import AnimateHeight from "react-animate-height";
import Icon from "@/components/Icon";

const Status = ({ value }: any) => (
    <div
        className={`flex justify-center items-center w-4 h-4 rounded-full ${
            value ? "bg-primary-300" : "bg-secondary-0"
        }`}
    >
        <Icon
            className={`w-2.5 h-2.5 ${
                value ? "fill-secondary-300" : "fill-greyscale-400"
            }`}
            name={value ? "yes" : "no"}
        />
    </div>
);

type ItemProps = {
    item: any;
};

const Item = ({ item }: ItemProps) => {
    const [height, setHeight] = useState<any>(item.defaultOpen ? "auto" : 0);

    return (
        <div className="border-b border-greyscale-100">
            <div
                className="flex justify-between items-center py-3.5 font-semibold cursor-pointer tap-highlight-color transition-colors hover:text-primary-100 lg:hover:text-greyscale-900"
                onClick={() => setHeight(height === 0 ? "auto" : 0)}
            >
                {item.title}
                <Icon
                    className={`w-5 h-5 ml-4 transition-all ${
                        height === 0 ? "rotate-0" : "rotate-180"
                    }`}
                    name="arrow-down"
                />
            </div>
            <AnimateHeight duration={500} height={height}>
                {item.parameters.map((item: any) => (
                    <div
                        className="flex items-center -mx-3 py-4 border-t border-greyscale-100 lg:flex-wrap lg:mx-0"
                        key={item.id}
                    >
                        <div className="w-[calc(25%-1.5rem)] mx-3 text-lg text-greyscale-500 lg:w-full lg:mx-0 lg:mb-6">
                            {item.title}
                        </div>
                        <div className="w-[calc(25%-1.5rem)] mx-3 px-2 lg:w-1/3 lg:m-0 lg:px-0">
                            <Status value={item.standart} />
                        </div>
                        <div className="w-[calc(25%-1.5rem)] mx-3 px-2 lg:w-1/3 lg:m-0 lg:px-0">
                            <Status value={item.professional} />
                        </div>
                        <div className="w-[calc(25%-1.5rem)] mx-3 px-2 lg:w-1/3 lg:m-0 lg:px-0">
                            <Status value={item.custom} />
                        </div>
                    </div>
                ))}
            </AnimateHeight>
        </div>
    );
};

export default Item;
