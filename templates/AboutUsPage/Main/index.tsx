import Dividers from "@/components/Dividers";
import Image from "@/components/Image";
import Companies from "@/components/Companies";

import { companiesHero } from "@/mocks/companies";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
        <div className="py-16 md:pt-12 md:pb-6">
            <div className="container">
                <div className="max-w-[51.5rem] mb-16 md:mb-8">
                    <div className="label bg-white/[0.08] text-greyscale-100 mb-4">
                        About Us
                    </div>
                    <div className="mb-4 text-h1 xl:max-w-[38rem] xl:text-h2 md:text-h3">
                        Setting the New Standard in Financial Future
                    </div>
                    <div className="max-w-[46.63rem] text-white/70 md:text-lg">
                        Keep your business account and all your finance needs
                        safely organized under one roof. Manage money quickly,
                        easily & efficiently. Whether you’re alone or leading a
                        team.
                    </div>
                </div>
                <div className="relative mb-16 after:absolute after:inset-0 after:bg-[#163300]/[0.12] md:mb-6">
                    <Image
                        className="w-full lg:aspect-[1.3] lg:object-cover"
                        src="/images/content/about-pic.jpg"
                        width={1160}
                        height={520}
                        alt=""
                    />
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
