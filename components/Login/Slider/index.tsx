// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "@/components/Image";

const items = [
    {
        title: "Take Your Business Faster",
        content:
            "Ullamcorper urna fringilla lorem scelerisque nunc. Amet odio cras amet adipiscing ut adipiscing urpis donec vel",
        image: "/images/content/slider-pic-1.png",
    },
    {
        title: "Create Custom Cards",
        content:
            "Ullamcorper urna fringilla lorem scelerisque nunc. Amet odio cras amet adipiscing ut adipiscing urpis donec vel",
        image: "/images/content/slider-pic-2.png",
    },
    {
        title: "Take Your Business Faster",
        content:
            "Ullamcorper urna fringilla lorem scelerisque nunc. Amet odio cras amet adipiscing ut adipiscing urpis donec vel",
        image: "/images/content/slider-pic-1.png",
    },
    {
        title: "Create Custom Cards",
        content:
            "Ullamcorper urna fringilla lorem scelerisque nunc. Amet odio cras amet adipiscing ut adipiscing urpis donec vel",
        image: "/images/content/slider-pic-2.png",
    },
];

type SliderProps = {};

const Slider = ({}: SliderProps) => (
    <div className="flex p-2.5 lg:hidden">
        <div className="relative flex items-center grow bg-secondary-300">
            <div className="relative z-2 w-[55rem] py-8 4xl:w-[41.875rem] 2xl:w-[36rem] xl:w-[30rem]">
                <Splide
                    className="splide-login"
                    options={{
                        arrows: false,
                        rewind: true,
                        gap: "1rem",
                    }}
                >
                    {items.map((item, index) => (
                        <SplideSlide className="px-8" key={index}>
                            <div className="relative w-[28.75rem] h-[22.5rem] mx-auto mb-12 xl:w-auto xl:h-[18rem] xl:mx-6">
                                <Image
                                    className="object-contain"
                                    src={item.image}
                                    fill
                                    sizes="(max-width: 767px) 100vw, 40vw"
                                    alt=""
                                />
                            </div>
                            <div className="max-w-[28.125rem] mx-auto text-center">
                                <div className="mb-4 text-h5 text-greyscale-0 xl:text-h6">
                                    {item.title}
                                </div>
                                <div className="text-lg text-white/50">
                                    {item.content}
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className="absolute top-0 left-12 right-12 bottom-0 flex justify-between pointer-events-none">
                {Array.from(Array(5).keys()).map((x) => (
                    <div
                        className="w-0.25 bg-repeat bg-[length:100%_.5rem] opacity-60 bg-gradient-divider-light"
                        key={x}
                    ></div>
                ))}
            </div>
        </div>
    </div>
);

export default Slider;
