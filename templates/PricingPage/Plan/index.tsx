import Link from "next/link";
import Item from "./Item";

import { pricing, plan } from "@/mocks/pricing";

type PlanProps = {};

const Plan = ({}: PlanProps) => (
    <div className="section">
        <div className="container">
            <div className="max-w-[50.75rem] mx-auto mb-20 text-center xl:mb-16 md:mb-8">
                <div className="mb-4 text-h3 md:text-h5">Comparison Plan</div>
                <div className="text-greyscale-400">
                    Ac fermentum orci accumsan ullamcorper magna. Cursus
                    ullamcorper commodo nunc etiam praesent vel enim faucibus
                    non. Euismod consequat malesuada amet mollis diam
                </div>
            </div>
            <div className="flex -mx-3 mb-8 lg:hidden">
                <div className="w-[calc(25%-1.5rem)] mx-3"></div>
                {pricing.map((item) => (
                    <div
                        className="w-[calc(25%-1.5rem)] mx-3 p-5 bg-greyscale-0 border border-greyscale-100 shadow-2"
                        key={item.id}
                    >
                        <div className="mb-1 font-semibold">{item.title}</div>
                        <div className="mb-4 text-base text-greyscale-400">
                            {item.description}
                        </div>
                        <Link
                            className={`w-full btn-sm ${
                                item.type === "custom"
                                    ? "btn-secondary"
                                    : "btn-primary"
                            }`}
                            href={
                                item.type === "custom"
                                    ? "contact-us"
                                    : "sign-up"
                            }
                        >
                            {item.type === "custom"
                                ? "Contact Us"
                                : "Get Started"}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="bg-greyscale-0 border-t border-greyscale-100 overflow-hidden">
                {plan.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </div>
        </div>
    </div>
);

export default Plan;
