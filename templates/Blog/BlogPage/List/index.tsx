import { useState } from "react";
import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { blog } from "@/mocks/blog";

const sorting = [
    {
        id: "0",
        title: "All Post",
    },
    {
        id: "1",
        title: "Products",
    },
    {
        id: "2",
        title: "Engineering",
    },
    {
        id: "3",
        title: "Company",
    },
    {
        id: "4",
        title: "Growath",
    },
];

type ListProps = {};

const List = ({}: ListProps) => {
    const [activeId, setActiveId] = useState<string>("0");

    return (
        <Dividers className="section-md bg-greyscale-25">
            <div className="container">
                <div className="flex mb-10 md:mb-6 md:overflow-auto md:scroll-smooth md:scrollbar-none md:-mx-6 md:before:shrink-0 md:before:w-6 md:after:shrink-0 md:after:w-6">
                    {sorting.map((button) => (
                        <button
                            className={`px-5 py-2 rounded-full text-base font-semibold text-greyscale-400 transition-all hover:text-primary-100 md:shrink-0 ${
                                activeId === button.id
                                    ? "bg-secondary-300 !text-primary-300"
                                    : ""
                            }`}
                            key={button.id}
                            onClick={() => setActiveId(button.id)}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>
                <div className="space-y-10 lg:space-y-6">
                    {blog.slice(1).map((article) => (
                        <div
                            className="flex p-4 border border-greyscale-100 bg-greyscale-0 shadow-2 lg:block"
                            key={article.id}
                        >
                            <div className="shrink-0 w-[31.25rem] min-h-[21.875rem] xl:w-[24rem] lg:w-full lg:min-h-full lg:mb-4">
                                <Image
                                    className="w-full h-full object-cover"
                                    src={article.image}
                                    width={477}
                                    height={477}
                                    alt=""
                                />
                            </div>
                            <div className="grow self-center pl-12 pr-6 xl:pl-8 lg:p-4 md:p-2">
                                <div className="flex items-center mb-4 space-x-2.5">
                                    <div className="label label-sm">
                                        {article.category}
                                    </div>
                                    <div className="text-base font-medium text-greyscale-400">
                                        {article.date}
                                    </div>
                                </div>
                                <div className="mb-4 text-h5 md:text-h6">
                                    {article.title}
                                </div>
                                <div className="line-clamp-3 text-lg text-greyscale-400 md:line-clamp-2">
                                    {article.content}
                                </div>
                                <Link
                                    className="btn-secondary btn-md mt-9 pr-3.5 lg:mt-6 md:w-full"
                                    href={`/blog/${article.id}`}
                                >
                                    <span>Read More</span>
                                    <Icon
                                        className="w-5 h-5"
                                        name="arrow-right"
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Dividers>
    );
};

export default List;
