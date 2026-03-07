import Link from "next/link";
import Dividers from "@/components/Dividers";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHero } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
        <div className="py-22 md:pt-12 md:pb-6">
            <div className="container">
                <div className="flex items-center mb-22 lg:block md:mb-6">
                    <div className="grow pr-10 lg:pr-0">
                        <div className="label mb-4 bg-white/[.04] border border-[#FFC091]/50 text-sm text-[#FFC091]">
                            🎉 Announcing Finto Beta 2.0
                            <Icon
                                className="w-4 h-4 ml-2 fill-[#FFC091]"
                                name="arrow-right"
                            />
                        </div>
                        <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                            All In One App Finance for Your Business
                        </div>
                        <div className="mb-10 text-white/70 md:text-lg">
                            Keep your business account and all your finance
                            needs safely organized under one roof. Manage money
                            quickly, easily & efficiently. Whether you’re alone
                            or leading a team.
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
                    <div className="relative shrink-0 w-[49.48%] lg:w-full lg:mt-16 md:mt-8">
                        <Image
                            className="w-full border border-white/[.15] shadow-1"
                            src="/images/content/screenshot-1.jpg"
                            width={574}
                            height={520}
                            alt=""
                        />
                        <div className="absolute top-[5%] -right-[24.5%] w-[80%] 2xl:top-[15%] 2xl:-right-[16%] 2xl:w-[70%] lg:top-[5%] lg:-right-[15%] lg:w-[80%]">
                            <Image
                                className="w-full"
                                src="/images/content/mobile-1.png"
                                width={459}
                                height={690}
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
