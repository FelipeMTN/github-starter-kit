import Link from "next/link";
import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-greyscale-25" hero>
        <div className="section text-center">
            <div className="container">
                <div className="label mb-4">
                    <Image
                        className="w-4.5 h-4.5 mr-2 opacity-100"
                        src="/images/content/icons/grid.svg"
                        width={18}
                        height={18}
                        alt=""
                    />
                    Integrations
                </div>
                <div className="max-w-[53.5rem] mx-auto mb-4 text-h1 xl:max-w-[40rem] xl:text-h2 md:text-h3">
                    Integration Tools You Need to Grow Business
                </div>
                <div className="max-w-[43.125rem] mx-auto mb-10 text-greyscale-400 md:mb-8">
                    Scelerisque maecenas vulputate arcu habitasse lacinia.
                    Fringilla et duis nulla leo fames volutpat. Faucibus quis
                    phasellus mi sem fermentum pellentesque.
                </div>
                <div className="flex justify-center space-x-4 md:block md:space-x-0 md:space-y-4">
                    <Link
                        className="btn-primary min-w-[10.6rem] px-5 md:min-w-full"
                        href="/sign-up"
                    >
                        Open an Account
                    </Link>
                    <Link
                        className="btn-secondary min-w-[10.6rem] bg-greyscale-25 px-5 md:min-w-full"
                        href="/contact-us"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </div>
    </Dividers>
);

export default Main;
