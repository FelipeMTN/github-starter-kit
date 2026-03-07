import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

const items = [
    {
        title: "Our Mission",
        content:
            "Tortor pulvinar vestibulum eget aliquet penatibus interdum pellentesque. Diam ultrices in risus ac nunc imperdiet ultricies. Viverra est nunc condimentum aliquam pharetra ac. Aenean sit hendrerit aliquam sapien proin. Nam duis porta a vel commodo proin posuere. Curabitur cursus aenean sodales",
        image: "/images/content/icons/layers.svg",
    },
    {
        title: "Our Values",
        content:
            "Tortor pulvinar vestibulum eget aliquet penatibus interdum pellentesque. Diam ultrices in risus ac nunc imperdiet ultricies. Viverra est nunc condimentum aliquam pharetra ac. Aenean sit hendrerit aliquam sapien proin. Nam duis porta a vel commodo proin posuere. Curabitur cursus aenean sodales",
        image: "/images/content/icons/zap.svg",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <Dividers className="section bg-greyscale-25">
        <div className="container">
            <div className="stage">Mission + Values</div>
            <div className="mb-20 text-h3 xl:mb-16 xl:text-h4 lg:mb-12 md:mb-8">
                Finto is on a mission to make selling digital products
                easy-peasy.{" "}
                <span className="text-greyscale-300">
                    We know first-hand the challenges of selling digital goods
                    globally and are here to shake that up for the better.
                </span>
            </div>
            <div className="flex space-x-10 lg:block lg:space-x-0">
                <div className="flex-1 lg:mb-6">
                    {items.map((item, index) => (
                        <div
                            className="group p-8 border border-transparent even:border-greyscale-100 even:bg-greyscale-0 even:shadow-2 xl:p-6 lg:p-8"
                            key={index}
                        >
                            <div className="flex justify-center items-center w-12 h-12 mb-6 bg-secondary-0 rounded-full group-even:bg-secondary-300">
                                <Image
                                    className="w-6 h-6"
                                    src={item.image}
                                    width={24}
                                    height={24}
                                    alt=""
                                />
                            </div>
                            <div className="mb-3 text-h6">{item.title}</div>
                            <div className="text-greyscale-400 xl:text-lg lg:text-xl">
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-end flex-1 border border-primary-300 bg-primary-50">
                    <Image
                        className="w-full"
                        src="/images/content/screenshot-4.png"
                        width={560}
                        height={624}
                        alt=""
                    />
                </div>
            </div>
        </div>
    </Dividers>
);

export default Details;
