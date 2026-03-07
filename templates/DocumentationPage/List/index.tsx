import Image from "@/components/Image";

import { documents } from "@/mocks/documents";

type ListProps = {
    scrollToRef: any;
};

const List = ({ scrollToRef }: ListProps) => (
    <div className="relative py-22 md:py-12">
        <div
            className="absolute -top-12 left-0 right-0"
            ref={scrollToRef}
        ></div>
        <div className="container">
            <div className="mb-14 text-h4 xl:text-h5 md:mb-10">
                Browse by products
            </div>
            <div className="space-y-14 md:space-y-10">
                {documents.map((group) => (
                    <div className="" key={group.id}>
                        <div className="mb-8 text-h6 text-greyscale-400 md:mb-6">
                            {group.title}
                        </div>
                        <div className="flex flex-wrap -mt-6 -mx-3 md:mx-0">
                            {group.items.map((document) => (
                                <div
                                    className="w-[calc(33.333%-1.5rem)] mt-6 mx-3 p-6 border border-greyscale-100 bg-greyscale-0 shadow-2 lg:w-[calc(50%-1.5rem)] md:w-full md:mx-0"
                                    key={document.id}
                                >
                                    <div className="flex justify-center items-center w-12 h-12 mb-8 rounded-full bg-secondary-300">
                                        <Image
                                            className="w-6"
                                            src={document.icon}
                                            width={24}
                                            height={24}
                                            alt=""
                                        />
                                    </div>
                                    <div className="mb-3 text-h6">
                                        {document.title}
                                    </div>
                                    <div className="text-greyscale-400">
                                        {document.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default List;
