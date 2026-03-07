import { Link } from "react-router-dom";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { navigationFooter } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => (
    <div className="mt-auto py-16 md:pt-12 md:pb-6">
        <div className="container">
            <div className="flex mb-18 lg:block lg:mb-14 md:mb-8">
                <Link className="block w-23 mr-auto lg:mb-12 md:mb-8" to="/">
                    <Image
                        className="w-full opacity-100"
                        src="/images/logo-dark.svg"
                        width={92}
                        height={29}
                        alt=""
                    />
                </Link>
                <div className="flex w-full max-w-[50rem] 3xl:max-w-[45.625rem] lg:max-w-full md:flex-wrap md:-mt-5">
                    {navigationFooter.map((group) => (
                        <div
                            className="grow pr-8 text-lg font-medium last:pr-0 md:w-1/2 md:mt-5 md:pr-5"
                            key={group.id}
                        >
                            <Link
                                className="inline-block mb-4 text-[#666D80] transition-colors hover:text-primary-100 md:mb-2 md:text-base"
                                to={group.url}
                            >
                                {group.title}
                            </Link>
                            <div className="flex flex-col items-start space-y-3">
                                {group.links.map((link) => (
                                    <Link
                                        className="transition-colors hover:text-primary-100 md:text-base"
                                        to={link.url}
                                        key={link.id}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center md:block md:pt-8 md:border-t md:border-greyscale-200">
                <div className="flex items-center text-lg text-[#666D80] md:justify-center md:mb-4">
                    <Icon
                        className="w-5 h-5 mr-1 fill-[#666D80]"
                        name="copyright"
                    />
                    2023 Finto. All right reserved
                </div>
                <div className="flex space-x-4 md:justify-center">
                    {socials.map((social) => (
                        <a
                            className="group text-0"
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={social.id}
                        >
                            <Icon
                                className="fill-[#666D80] transition-colors group-hover:fill-primary-100 md:w-5 md:h-5"
                                name={social.icon}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
