import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHero } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
        <div className="py-22 md:pt-12 md:pb-6">
            <div className="container">
                <div className="flex items-center mb-22 lg:block md:mb-6">
                    <div className="grow pr-10 xl:pr-6 lg:mb-12 lg:pr-0 md:mb-8">
                        <div className="label bg-white/[0.08] text-greyscale-100 mb-4">
                            SaaS Solution
                        </div>
                        <div className="max-w-[30.625rem] mb-4 text-h1 xl:text-h2 lg:max-w-full md:text-h3">
                            SaaS Solution for Customer Experience
                        </div>
                        <div className="mb-10 text-white/70 md:text-lg">
                            Keep your business account and all your finance
                            needs safely organized under one roof. Manage money
                            quickly, easily & efficiently. Whether you’re alone
                            or leading a team.
                        </div>
                        <div className="flex space-x-4 lg:block md:space-x-0 md:space-y-4">
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
                    <div className="relative shrink-0 w-[49.48%] xl:w-[52%] lg:w-full md:pr-5">
                        <Image
                            className="w-full border border-white/[.15] shadow-1"
                            src="/images/content/screenshot-2.jpg"
                            width={574}
                            height={520}
                            alt=""
                        />
                        <div className="absolute top-[9%] -right-[10.45%] w-[73.17%] 2xl:-right-[4%] md:top-[7%] md:right-0">
                            <Image
                                className="w-full border border-greyscale-100 shadow-[-0.625rem_1.25rem_5rem_0_rgba(10,10,10,0.20)]"
                                src="/images/content/screenshot-3.jpg"
                                width={420}
                                height={420}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <Companies
                    title="Trusted by thousand companies in the world"
                    images={companiesHero}
                    light
                />
            </div>
        </div>
    </Dividers>
);

export default Main;
