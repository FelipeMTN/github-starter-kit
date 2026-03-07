import Link from "next/link";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHeroDark } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className="py-18 pb-20 md:pt-12 md:pb-6">
        <div className="container">
            <div className="flex items-center mb-18 lg:block md:mb-6">
                <div className="grow pr-10 lg:mb-10 lg:pr-0 md:mb-8">
                    <div className="label mb-4">
                        <Image
                            className="w-4.5 mr-2 opacity-100"
                            src="/images/content/icons/wallet.svg"
                            width={18}
                            height={18}
                            alt=""
                        />
                        Payments
                    </div>
                    <div className="max-w-[32rem] mb-4 text-h1 xl:text-h2 lg:max-w-full">
                        Global Payment to Grow Your Businesses
                    </div>
                    <div className="max-w-[29.6rem] mb-10 text-greyscale-400 lg:max-w-full md:mb-6">
                        Growing a SaaS business can be hard work. Whether you’re
                        just starting out or selling like hotcakes, we’ve got
                        your back. It’s free to start no trial, no contract, no
                        risk.
                    </div>
                    <div className="flex space-x-4 md:block md:space-x-0 md:space-y-4">
                        <Link
                            className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
                            href="/sign-up"
                        >
                            Open an Account
                        </Link>
                        <Link
                            className="btn-secondary min-w-[10.6rem] px-5 md:min-w-full"
                            href="/contact-us"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
                <div className="relative shrink-0 w-[31.25rem] p-10 bg-greyscale-25 lg:w-full md:p-6">
                    <Image
                        className="w-full border border-greyscale-100 shadow-3"
                        src="/images/content/features-pic.jpg"
                        width={420}
                        height={420}
                        alt=""
                    />
                </div>
            </div>
            <Companies
                title="Trusted by thousand companies in the world"
                images={companiesHeroDark}
            />
        </div>
    </div>
);

export default Main;
