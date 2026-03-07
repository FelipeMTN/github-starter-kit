import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Content from "./Content";

import { blog } from "@/mocks/blog";

export const socials = [
    {
        id: "0",
        icon: "linkedin",
        url: "https://www.linkedin.com/company/ui8",
    },
    {
        id: "1",
        icon: "twitter",
        url: "https://twitter.com/ui8",
    },
    {
        id: "2",
        icon: "facebook",
        url: "https://www.facebook.com/ui8.net/",
    },
];

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const article = blog.find((article) => article.id === id);

    return article ? (
        <div className="section-md">
            <div className="container max-w-[61.5rem]">
                <div className="max-w-[43.13rem] mx-auto mb-12 text-center md:mb-8">
                    <div className="flex justify-center items-center mb-4 space-x-2.5">
                        <div className="label label-sm">{article.category}</div>
                        <div className="text-base font-medium text-greyscale-400">
                            {article.date}
                        </div>
                    </div>
                    <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                        {article.title}
                    </div>
                    <div className="text-lg text-greyscale-400">
                        {article.content}
                    </div>
                </div>
                <div className="aspect-[1.76] md:aspect-[1.3]">
                    <Image
                        className="w-full h-full object-cover"
                        src={article.image}
                        width={920}
                        height={520}
                        alt=""
                    />
                </div>
                <Content />
                <div className="flex justify-between items-center mt-12 pt-12 border-t border-greyscale-200 md:block md:mt-8 md:pt-8">
                    <div className="flex items-center md:justify-center md:mb-4">
                        <div className="w-10 h-10 mr-4">
                            <Image
                                className="w-full h-full object-cover rounded-full"
                                src="/images/content/avatar-1.jpg"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div className="">
                            <div className="mb-1 text-lg font-semibold">
                                Alex Bergwijn
                            </div>
                            <div className="text-base text-greyscale-400">
                                Accounting at Mailchimp
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-3 md:justify-center">
                        {socials.map((social) => (
                            <a
                                className="group flex justify-center items-center w-10 h-10 rounded-full border border-greyscale-100 bg-greyscale-25 transition-colors hover:border-primary-100 md:w-8 md:h-8"
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={social.id}
                            >
                                <Icon
                                    className="w-5 h-5 fill-greyscale-400 transition-colors group-hover:fill-primary-100 md:w-4 md:h-4"
                                    name={social.icon}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Main;
