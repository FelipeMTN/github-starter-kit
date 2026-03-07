import Link from "next/link";
import Icon from "@/components/Icon";

type PackageProps = {
    item: any;
};

const Package = ({ item }: PackageProps) => (
    <div
        className={`relative flex flex-col flex-1 p-8 border md:px-6 ${
            item.type === "popular"
                ? "bg-secondary-300 border-secondary-300 text-greyscale-100"
                : "bg-greyscale-0 border-greyscale-100"
        }`}
    >
        {item.type === "popular" && (
            <div className="label absolute -top-2 right-6 px-3 bg-primary-300 rotate-[8deg]">
                🔥 Most Popular
            </div>
        )}
        <div className="mb-1 font-semibold">{item.title}</div>
        <div
            className={`mb-3 text-lg font-medium ${
                item.type === "popular" ? "opacity-60" : "text-greyscale-400"
            }`}
        >
            {item.description}
        </div>
        {item.type === "custom" ? (
            <div className="text-h4">Talk to Us!</div>
        ) : (
            <div className="">
                <span className="text-h4">${item.price}</span>
                <span
                    className={`${
                        item.type === "popular"
                            ? "opacity-60"
                            : "text-greyscale-400"
                    }`}
                >
                    /month
                </span>
            </div>
        )}
        <div
            className={`mt-6 mb-auto pt-6 border-t space-y-3 ${
                item.type === "popular"
                    ? "border-white/10"
                    : "border-greyscale-100"
            }`}
        >
            {item.options.map((option: any, index: number) => (
                <div
                    className={`flex text-lg ${
                        item.type === "popular"
                            ? "opacity-60"
                            : "text-greyscale-400"
                    }`}
                    key={index}
                >
                    <Icon
                        className={`shrink-0 w-5 h-5 mt-0.5 mr-3 ${
                            item.type === "popular"
                                ? "fill-white/60"
                                : "fill-greyscale-400"
                        }`}
                        name="check"
                    />
                    <div className="grow">
                        {option.title}
                        {option.tooltip && (
                            <Icon
                                className={`w-4 h-4 -mt-0.5 ml-1.5 ${
                                    item.type === "popular"
                                        ? "fill-white/60"
                                        : "fill-greyscale-400"
                                }`}
                                name="question"
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
        <Link
            className={`w-full mt-9 md:mt-6 ${
                item.type === "custom" ? "btn-secondary" : "btn-primary"
            }`}
            href={item.type === "custom" ? "contact-us" : "sign-in"}
        >
            {item.type === "custom" ? "Contact Us" : "Get Started"}
        </Link>
    </div>
);

export default Package;
