"use client";

import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const SuccessPage = () => {
    return (
        <Dividers
            className="flex flex-col min-h-screen min-h-screen-ios bg-secondary-300"
            classInner="flex flex-col grow"
            light
        >
            <div className="border-b border-white/[.09] bg-secondary-300">
                <div className="container-md flex items-center h-22 md:h-18">
                    <Link className="w-26 mr-auto" href="/">
                        <Image
                            className="w-full opacity-100"
                            src="/images/logo-light.svg"
                            width={103}
                            height={38}
                            alt=""
                        />
                    </Link>
                    <Link className="group" href="/">
                        <Icon
                            className="w-8 h-8 fill-greyscale-0 transition-colors group-hover:fill-primary-300"
                            name="close"
                        />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center grow pt-4 px-8 pb-16">
                <div className="max-w-[32.2rem] w-full text-center text-greyscale-0">
                    <div className="mb-10 md:mb-4">
                        <Image
                            className="w-[9.25rem] md:w-30"
                            src="/images/content/check.png"
                            width={148}
                            height={148}
                            alt=""
                        />
                    </div>
                    <div className="max-w-[27.5rem] mx-auto mb-4 text-h4 md:text-h5">
                        Successfully Created Your Account!
                    </div>
                    <div className="mb-10 opacity-50 md:mb-6 md:text-lg">
                        Lorem ipsum dolor sit amet consectetur. Sit sed turpis
                        magna habitant leo ac ante. Quam volutpat vitae nisi
                    </div>
                    <Link
                        className="btn-primary btn-md min-w-[16.5rem]"
                        href="/sign-in"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        </Dividers>
    );
};

export default SuccessPage;
