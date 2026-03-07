import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

import { customers } from "@/mocks/customers";

type ListProps = {};

const List = ({}: ListProps) => {
    return (
        <Dividers className="section bg-greyscale-25">
            <div className="container">
                <div className="flex flex-wrap -mt-8 -mx-4 lg:block lg:mx-0 md:-mt-6">
                    {customers.map((customer) => (
                        <Link
                            className="group flex flex-col w-[calc(50%-2rem)] mt-8 mx-4 p-4 bg-greyscale-0 border border-greyscale-100 shadow-2 lg:w-full lg:mx-0 md:mt-6"
                            key={customer.id}
                            href="/customers"
                        >
                            <div className="flex justify-center items-center h-[16.25rem] bg-primary-100 md:h-[13.75rem]">
                                <Image
                                    className="w-auto h-20 md:h-16"
                                    src={customer.logo}
                                    width={260}
                                    height={80}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col grow mt-4 p-2">
                                <div className="mb-2 text-lg font-medium text-greyscale-400">
                                    {customer.company}
                                </div>
                                <div className="mb-2 text-h5 transition-colors group-hover:text-primary-100 xl:text-h6 lg:text-h5 md:text-h6">
                                    {customer.title}
                                </div>
                                <div className="mt-auto line-clamp-2 text-lg text-greyscale-400">
                                    {customer.content}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Dividers>
    );
};

export default List;
