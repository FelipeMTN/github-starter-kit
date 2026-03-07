import Link from "next/link";
import Dividers from "@/components/Dividers";
import FaqItem from "@/components/FaqItem";
import Icon from "@/components/Icon";

import { faqPricing } from "@/mocks/faq";

type FaqProps = {};

const Faq = ({}: FaqProps) => (
    <Dividers className="section bg-greyscale-25">
        <div className="container max-w-[69rem]">
            <div className="max-w-[50.75rem] mx-auto mb-20 text-center xl:mb-16 md:mb-8">
                <div className="mb-4 text-h3 xl:text-h4">
                    Frequently Asked Questions
                </div>
                <div className="text-greyscale-400">
                    Ac fermentum orci accumsan ullamcorper magna. Cursus
                    ullamcorper commodo nunc etiam praesent vel enim faucibus
                    non. Euismod consequat malesuada amet mollis diam
                </div>
            </div>
            <div className="space-y-3">
                {faqPricing.map((item) => (
                    <FaqItem item={item} key={item.id} />
                ))}
            </div>
            <div className="mt-20 text-center xl:mt-16 md:mt-8">
                <Link className="btn-primary pr-5.5 md:w-full" href="/faq">
                    <span>See All FAQ</span>
                    <Icon className="w-5 h-5" name="arrow-right" />
                </Link>
            </div>
        </div>
    </Dividers>
);

export default Faq;
