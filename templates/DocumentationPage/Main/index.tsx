import { useState } from "react";
import Link from "next/link";
import Dividers from "@/components/Dividers";

const sorting = [
    {
        id: "0",
        title: "Home",
    },
    {
        id: "1",
        title: "Payments",
    },
    {
        id: "2",
        title: "Finance Automations",
    },
    {
        id: "3",
        title: "Banking as a Service",
    },
    {
        id: "4",
        title: "Developer Tools",
    },
    {
        id: "5",
        title: "No-code",
    },
    {
        id: "6",
        title: "All Products",
    },
];

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
    const [activeId, setActiveId] = useState<string>("0");

    return (
        <Dividers className="bg-greyscale-25" hero>
            <div className="pb-6 bg-greyscale-25 border-b border-greyscale-200/60">
                <div className="container-md">
                    <div className="flex flex-wrap -mt-2 -ml-2 lg:flex-nowrap lg:mt-0 lg:overflow-auto lg:scroll-smooth lg:scrollbar-none lg:-mx-12 lg:before:shrink-0 lg:before:w-12 lg:after:shrink-0 lg:after:w-12 md:-mx-6 md:before:w-6 md:after:w-6">
                        {sorting.map((button) => (
                            <button
                                className={`shrink-0 mt-2 ml-2 px-2.5 py-1 text-base font-medium text-greyscale-400 transition-all hover:text-primary-100 lg:mt-0 lg:first:ml-0 ${
                                    activeId === button.id
                                        ? "bg-primary-25 !text-secondary-300"
                                        : ""
                                }`}
                                key={button.id}
                                onClick={() => setActiveId(button.id)}
                            >
                                {button.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pt-16 pb-22 text-center md:py-12">
                <div className="container">
                    <div className="mb-4 text-h3 md:text-h4">Documentation</div>
                    <div className="mb-8 text-greyscale-400">
                        Explore our guides and examples to integrate Finto.
                    </div>
                    <div className="flex justify-center space-x-4 md:block md:space-x-0 md:space-y-4">
                        <Link className="btn-primary md:w-full" href="/pricing">
                            Get started with payments
                        </Link>
                        <button
                            className="btn-secondary md:w-full bg-greyscale-25"
                            onClick={() =>
                                scrollToRef.current.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                        >
                            Explore all products
                        </button>
                    </div>
                </div>
            </div>
        </Dividers>
    );
};

export default Main;
