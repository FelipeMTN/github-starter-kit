import Image from "@/components/Image";
import Icon from "@/components/Icon";

const items = [
    {
        title: "Build Trust",
        content:
            "Test your product idea by launching payments with little to no code.",
        icon: "/images/content/icons/heart-hand.svg",
    },
    {
        title: "Drive Client Joy",
        content:
            "Test your product idea by launching payments with little to no code.",
        icon: "/images/content/icons/server.svg",
    },
    {
        title: "Move with Urgency",
        content:
            "Test your product idea by launching payments with little to no code.",
        icon: "/images/content/icons/speedometer.svg",
    },
];

type PerksProps = {};

const Perks = ({}: PerksProps) => (
    <div className="pt-30 pb-22 xl:pt-24 md:py-12">
        <div className="container">
            <div className="flex items-center mb-12 lg:block md:mb-6">
                <div className="grow pr-10 lg:pr-0">
                    <div className="max-w-[33.13rem] lg:max-w-full lg:mb-12 md:mb-8">
                        <div className="stage">Perks and Benefits</div>
                        <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                            Perks and Benefit
                        </div>
                        <div className="mb-8 text-greyscale-400 md:mb-6">
                            We provide a collaborative and inclusive workplace
                            with competitive benfits such as affordable health
                            insurance, unlimited paid time off, and a strong
                            startup company culture.
                        </div>
                        <div className="space-y-3">
                            {[
                                "Competitive compensation",
                                "Flexible and hybrid working hours",
                                "Health and wellness benefits",
                                "Medical, dental & vision insurance",
                                "New York-based + remote friendly",
                            ].map((item, index) => (
                                <div className="flex" key={index}>
                                    <div className="flex justify-center items-center w-5 h-5 mt-0.75 mr-4 rounded-full bg-primary-300">
                                        <Icon
                                            className="w-3 h-3 fill-secondary-300"
                                            name="yes"
                                        />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="shrink-0 w-[31.25rem] bg-greyscale-25 border border-greyscale-100 lg:w-full">
                    <Image
                        src="/images/content/career-pic-1.jpg"
                        className="w-full lg:aspect-[1.3] lg:object-cover"
                        width={500}
                        height={450}
                        alt=""
                    />
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

export default Perks;
