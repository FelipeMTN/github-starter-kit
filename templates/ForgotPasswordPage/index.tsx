"use client";

import { useState } from "react";
import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Field from "@/components/Field";

import { socials } from "@/constants/socials";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState<string>("");

    return (
        <Dividers
            className="flex flex-col min-h-screen bg-secondary-300 min-h-screen-ios"
            classInner="flex flex-col grow"
            light
        >
            <div className="border-b border-white/[.09] bg-secondary-300">
                <div className="container-md flex items-center h-22 md:h-18">
                    <Link className="w-26 mr-auto md:w-22" href="/">
                        <Image
                            className="w-full opacity-100"
                            src="/images/logo-light.svg"
                            width={103}
                            height={38}
                            alt=""
                        />
                    </Link>
                    <div className="flex items-center ml-auto space-x-3">
                        <Link
                            className="btn-secondary bg-transparent btn-sm text-greyscale-0 hover:border-primary-300 hover:bg-primary-300 hover:text-greyscale-900 md:h-8 md:px-3 md:text-sm"
                            href="/sign-in"
                        >
                            Sign In
                        </Link>
                        <Link
                            className="btn-primary btn-sm md:h-8 md:px-3 md:text-sm"
                            href="/sign-up"
                        >
                            Open an Account
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center grow p-8 md:px-6">
                <div className="max-w-[31.25rem] w-full px-10 py-14 bg-greyscale-0 md:px-6 md:py-8">
                    <div className="flex justify-center items-center w-16 h-16 mx-auto mb-5 bg-primary-300 border-[0.625rem] border-primary-25 rounded-full md:w-14 md:h-14 md:border-[0.5rem]">
                        <Image
                            className="w-7 opacity-100"
                            src="/images/content/icons/key.svg"
                            width={28}
                            height={28}
                            alt=""
                        />
                    </div>
                    <div className="mb-3 text-center text-h5 md:text-h6">
                        Forgot password?
                    </div>
                    <div className="mb-10 text-center text-lg text-greyscale-400 md:mb-6">
                        No worries, we’ll send you reset instructions.
                    </div>
                    <form
                        className=""
                        action=""
                        onSubmit={() => console.log("Submit")}
                    >
                        <Field
                            className="mb-6"
                            label="Email"
                            classInput="h-12"
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            required
                        />
                        <button className="btn-primary btn-md w-full">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-white/[.09] bg-secondary-300">
                <div className="container-md flex justify-between items-center h-22 md:block md:h-auto md:py-5">
                    <div className="flex items-center text-lg text-white/50 md:justify-center md:mb-4">
                        <Icon
                            className="w-5 h-5 mr-1 fill-white/50"
                            name="copyright"
                        />
                        2023 Finto. All right reserved
                    </div>
                    <div className="flex space-x-4 md:justify-center">
                        {socials.map((social) => (
                            <a
                                className="group opacity-50 text-0 transition-opacity hover:opacity-100"
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={social.id}
                            >
                                <Icon
                                    className="fill-white md:w-5 md:h-5"
                                    name={social.icon}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Dividers>
    );
};

export default ForgotPasswordPage;
