import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHeroDark } from "@/mocks/companies";

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
    return (
        <Dividers className="bg-greyscale-25" hero>
            <div className="py-16 md:pt-12 md:pb-6">
                <div className="container">
                    <div className="mb-16 lg:mb-12 md:mb-8">
                        <div className="label mb-4 ">Career</div>
                        <div className="max-w-[53.13rem] mb-4 text-h1 xl:max-w-[43rem] xl:text-h2 md:text-h3">
                            Our Company Are Building The Future
                        </div>
                        <div className="max-w-[46.63rem] mb-10 text-greyscale-400 md:mb-6 md:text-lg">
                            Keep your business account and all your finance
                            needs safely organized under one roof. Manage money
                            quickly, easily & efficiently. Whether you’re alone
                            or leading a team.
                        </div>
                        <button
                            className="btn-primary px-6 md:w-full"
                            onClick={() =>
                                scrollToRef.current.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                        >
                            See Open Positions
                        </button>
                    </div>
                    <div className="mb-16 md:mb-6">
                        <Image
                            className="w-full lg:aspect-[1.3] lg:object-cover"
                            src="/images/content/career-pic.jpg"
                            width={1160}
                            height={620}
                            alt=""
                        />
                    </div>
                    <Companies
                        title="Trusted by thousand companies in the world"
                        images={companiesHeroDark}
                    />
                </div>
            </div>
        </Dividers>
    );
};

export default Main;
