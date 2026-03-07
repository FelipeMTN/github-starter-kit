import { useState } from "react";
import Dividers from "@/components/Dividers";
import FaqItem from "@/components/FaqItem";

import { faq } from "@/mocks/faq";

type ListProps = {};

const List = ({}: ListProps) => {
    const [activeId, setActiveId] = useState<string>("1");

    return (
        <Dividers className="section bg-greyscale-25">
            <div className="container flex md:block">
                <div className="shrink-0 w-[16.25rem] lg:w-44 md:flex md:w-auto md:mb-6 md:overflow-auto md:scroll-smooth md:scrollbar-none md:-mx-6 md:before:shrink-0 md:before:w-6 md:after:shrink-0 md:after:w-6">
                    {faq.map((button) => (
                        <button
                            className={`flex w-full p-3 border border-transparent text-lg font-medium transition-colors hover:text-greyscale-900 md:shrink-0 md:w-auto ${
                                activeId === button.id
                                    ? "bg-greyscale-0 !border-greyscale-100 text-greyscale-900"
                                    : "text-greyscale-400"
                            }`}
                            key={button.id}
                            onClick={() => setActiveId(button.id)}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>
                <div className="grow pl-30 xl:pl-20 lg:pl-10 md:pl-0">
                    {faq
                        .filter((x: any) => x.id === activeId)
                        .map((x) => (
                            <div className="space-y-3" key={x.id}>
                                {x.items.map((item) => (
                                    <FaqItem item={item} key={item.id} />
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </Dividers>
    );
};

export default List;
