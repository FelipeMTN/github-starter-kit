import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
    {
        title: "Accepting Payment",
        content:
            "Test your product idea by launching payments with little to no code.",
        icon: "/images/content/icons/wallet.svg",
    },
    {
        title: "Support Any Pricing",
        content:
            "Test your product idea by launching payments with little to no code.",
        icon: "/images/content/icons/coins-stacked.svg",
    },
    {
        title: "Custom Pricing",
        content:
            "Test your product idea by launching payments with little to no code.",
        icon: "/images/content/icons/trophy.svg",
    },
];

type RevenueProps = {};

const Revenue = ({}: RevenueProps) => (
    <div className="pt-30 pb-22 xl:pt-24 xl:pb-20 md:py-12">
        <div className="container">
            <div className="flex items-center -mx-20 mb-14 xl:-mx-10 lg:flex-col-reverse lg:items-stretch lg:mx-0 md:mb-8">
                <div className="w-[calc(50%-5rem)] mx-20 bg-greyscale-25 border border-greyscale-100 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0">
                    <Image
                        className="w-full"
                        src="/images/content/revenue-pic.png"
                        width={500}
                        height={450}
                        alt=""
                    />
                </div>
                <div className="w-[calc(50%-5rem)] mx-20 xl:w-[calc(50%-2.5rem)] xl:mx-10 lg:w-full lg:mx-0 lg:mb-10 md:mb-8">
                    <div className="stage">Capture More Revenue</div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        Support All Billing Models Easily
                    </div>
                    <div className="mb-12 text-greyscale-400 lg:mb-8 md:mb-6">
                        Nunc in tortor lectus quis sagittis quisque. Eget eget
                        mattis senectus risus faucibus ultrices sem tellus
                        etiam. Consectetur dictum viverra sit ultrices at eros
                        neque.
                    </div>
                    <Link
                        className="btn-primary pr-5.5 md:w-full"
                        href="/pricing"
                    >
                        <span>Learn More</span>
                        <Icon className="w-5 h-5" name="arrow-right" />
                    </Link>
                </div>
            </div>
            <div className="flex space-x-8 lg:block lg:space-x-0 lg:space-y-8 md:space-y-6">
                {items.map((item, index) => (
                    <div
                        className="flex-1 p-6 bg-greyscale-0 border border-greyscale-100 shadow-2"
                        key={index}
                    >
                        <div className="flex justify-center items-center w-12 h-12 mb-6 rounded-full bg-secondary-0">
                            <Image
                                src={item.icon}
                                className="w-6"
                                width={24}
                                height={24}
                                alt=""
                            />
                        </div>
                        <div className="mb-3 text-h6">{item.title}</div>
                        <div className="text-greyscale-400">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Revenue;
