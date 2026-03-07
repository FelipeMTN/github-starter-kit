import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

import { companiesCustomer } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
        <div className="py-20 text-center md:py-12">
            <div className="container">
                <div className="max-w-[49rem] mx-auto mb-16 lg:mb-12 md:mb-8">
                    <div className="label bg-white/[0.08] text-greyscale-100 mb-4">
                        Customer Stories
                    </div>
                    <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                        Case Studies from Finto Customers
                    </div>
                    <div className="mx-auto text-white/70">
                        Odio risus nec sit semper massa tellus congue vulputate
                        cursus. In mattis sem tortor blandit sagittis. Ultricies
                        urna odio tempus eget ut. Leo massa mauris ut elementum
                        suspendisse id.
                    </div>
                </div>
                <div className="flex flex-wrap justify-between py-6 lg:justify-center lg:-mt-5 lg:py-0">
                    {companiesCustomer.map((image, index) => (
                        <div
                            className="lg:w-1/4 lg:mt-5 md:w-1/3 md:px-1"
                            key={index}
                        >
                            <Image
                                className="w-auto h-9 md:h-6 opacity-100"
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Dividers>
);

export default Main;
