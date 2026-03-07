import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

const details = [
    {
        title: "Sell to Businesses",
        content:
            "Launch a B2B business and collect one-time or recurring payments from customers.",
        image: "/images/content/details-pic-1.jpg",
    },
    {
        title: "Validate Your Idea",
        content:
            "Test your product idea by launching payments with little to no code.",
        image: "/images/content/details-pic-2.jpg",
    },
    {
        title: "Sell to Consumer",
        content:
            "Launch a B2C business with a prebuilt payment page that’s optimized for conversion.",
        image: "/images/content/details-pic-3.jpg",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <Dividers className="pt-24 pb-28 bg-greyscale-25 xl:pb-24 md:py-12">
        <div className="container">
            <div className="mb-18 lg:mb-14 md:mb-10">
                <div className="stage">Built for Growth</div>
                <div className="mb-4 text-h3 md:text-h4">
                    Take Your Business Faster
                </div>
                <div className="max-w-[40.9rem] text-greyscale-400">
                    Amet lacus ipsum morbi nisl ac. Vel morbi turpis vitae nulla
                    lobortis integer purus consectetur. Parturient ut tempor
                    massa mi
                </div>
            </div>
            <div className="flex space-x-8 lg:block lg:space-x-0 lg:space-y-10 md:space-y-6">
                {details.map((item, index) => (
                    <div className="flex-1" key={index}>
                        <div className="mb-8 p-2 bg-greyscale-0 border border-greyscale-100 shadow-2 lg:mb-6">
                            <div className="border border-primary-50">
                                <Image
                                    className="w-full"
                                    src={item.image}
                                    width={345}
                                    height={230}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mb-3 text-h5 xl:text-h6 lg:text-h5 md:text-h6">
                            {item.title}
                        </div>
                        <div className="text-greyscale-400">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </Dividers>
);

export default Details;
