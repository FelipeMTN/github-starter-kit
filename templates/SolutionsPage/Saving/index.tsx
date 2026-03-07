import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
    {
        title: "Get Paid More Quickly with Prebuilt Invoices",
        content:
            "Dictumst tristique proin mauris mattis. Dui in id in arcu viverra condimentum posuere. Sit etiam diam duis",
        image: "/images/content/saving-pic-1.jpg",
    },
    {
        title: "Launch a Customer Portal in Minutes",
        content:
            "Dictumst tristique proin mauris mattis. Dui in id in arcu viverra condimentum posuere. Sit etiam diam duis",
        image: "/images/content/saving-pic-2.jpg",
    },
];

type SavingProps = {};

const Saving = ({}: SavingProps) => (
    <div className="section xl:py-20 md:py-12">
        <div className="container">
            <div className="mb-16 xl:mb-12 md:mb-8">
                <div className="stage">Reduce Engineering Effort</div>
                <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                    Save Time and Resources
                </div>
                <div className="max-w-[46.6rem] text-greyscale-400">
                    Stop compromising between billing needs and engineering
                    bandwidth. With Finto’s prebuilt interfaces and billing
                    components
                </div>
            </div>
            <div className="flex space-x-6 lg:block lg:space-x-0 lg:space-y-8 md:space-y-6">
                {items.map((item, index) => (
                    <div
                        className="flex flex-col flex-1 p-4 bg-greyscale-0 border border-greyscale-100 shadow-2"
                        key={index}
                    >
                        <div className="flex flex-col items-start grow mb-5 p-2">
                            <div className="mb-3 text-h6">{item.title}</div>
                            <div className="mb-5 text-lg text-greyscale-400">
                                {item.content}
                            </div>
                            <Link
                                className="btn-primary btn-sm mt-auto pl-5 pr-3"
                                href="/pricing"
                            >
                                <span>Learn More</span>
                                <Icon className="w-5 h-5" name="arrow-right" />
                            </Link>
                        </div>
                        <div className="p-11 pb-0 bg-greyscale-25 border border-greyscale-100">
                            <Image
                                className="w-full"
                                src={item.image}
                                width={448}
                                height={305}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Saving;
