import Image from "@/components/Image";

type ImageType = {
    src: string;
    width: number;
    height: number;
};

type CompaniesProps = {
    light?: boolean;
    title: string;
    images: ImageType[];
};

const Companies = ({ images, light, title }: CompaniesProps) => (
    <div className="flex items-start py-6 lg:block">
        <div
            className={`max-w-[11.9rem] mr-28 text-base font-medium xl:mr-16 lg:max-w-full lg:mb-8 lg:mr-0 lg:text-center md:max-w-[11.9rem] md:mx-auto md:mb-0 ${
                light ? "text-white/70" : "text-greyscale-300"
            }`}
        >
            {title}
        </div>
        <div className="flex flex-wrap justify-between grow pt-0.5 lg:pt-0">
            {images.map((image, index) => (
                <div className="md:w-1/2 md:mt-6 md:text-center" key={index}>
                    <Image
                        className="w-auto h-10 md:h-8 opacity-100"
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt=""
                    />
                </div>
            ))}
        </div>
    </div>
);

export default Companies;
