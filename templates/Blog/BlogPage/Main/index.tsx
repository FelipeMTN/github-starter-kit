import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Companies from "@/components/Companies";

import { companiesHeroDark } from "@/mocks/companies";
import { blog } from "@/mocks/blog";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="py-16 md:pt-12 md:pb-6">
        <div className="container">
            {blog.slice(0, 1).map((article) => (
                <div
                    className="flex items-center mb-16 lg:block md:mb-6"
                    key={article.id}
                >
                    <div className="grow pr-20 xl:pr-12 lg:mb-12 lg:pr-0 md:mb-8">
                        <div className="flex items-center mb-4 space-x-2.5">
                            <div className="label label-sm">
                                {article.category}
                            </div>
                            <div className="text-base font-medium text-greyscale-400">
                                {article.date}
                            </div>
                        </div>
                        <div className="max-w-[32rem] mb-4 text-h1 xl:text-h2 lg:max-w-full md:text-h4">
                            {article.title}
                        </div>
                        <div className="max-w-[29.63rem] mb-10 text-greyscale-400 lg:max-w-full md:mb-6">
                            {article.content}
                        </div>
                        <Link
                            className="btn-secondary pr-5.5 md:w-full"
                            href={`/blog/${article.id}`}
                        >
                            <span>Read More</span>
                            <Icon className="w-5 h-5" name="arrow-right" />
                        </Link>
                    </div>
                    <div className="relative shrink-0 w-[29.8125rem] aspect-square lg:w-full lg:aspect-[1.3]">
                        <Image
                            className="w-full h-full object-cover"
                            src={article.image}
                            width={477}
                            height={477}
                            alt=""
                        />
                    </div>
                </div>
            ))}
            <Companies
                title="Trusted by thousand companies in the world"
                images={companiesHeroDark}
            />
        </div>
    </div>
);

export default Main;
