import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Package from "./Package";

import { pricing } from "@/mocks/pricing";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-greyscale-25" hero>
        <div className="pt-20 pb-30 xl:pb-24 md:py-12">
            <div className="container">
                <div className="mb-20 text-center xl:mb-16 md:mb-8">
                    <div className="label mb-4">
                        <Image
                            className="w-4.5 h-4.5 mr-2 opacity-100"
                            src="/images/content/icons/coins-stacked.svg"
                            width={18}
                            height={18}
                            alt=""
                        />
                        Pricing
                    </div>
                    <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                        Simple and Transparent
                    </div>
                    <div className="text-greyscale-400">
                        Simple pricing with no hidden fees.It’s free to start —
                        no trial, no contract, no risk.
                    </div>
                </div>
                <div className="flex space-x-6 lg:block lg:space-x-0 lg:space-y-8 md:space-y-6">
                    {pricing.map((item) => (
                        <Package item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    </Dividers>
);

export default Main;
