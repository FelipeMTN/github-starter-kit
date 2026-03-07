import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { team } from "@/mocks/team";

type TeamProps = {};

const Team = ({}: TeamProps) => (
    <div className="section">
        <div className="container">
            <div className="mb-20 xl:mb-16 md:mb-8">
                <div className="stage">Team</div>
                <div className="mb-4 text-h2">Meet The Finto Team</div>
                <div className="max-w-[46.63rem] text-greyscale-400">
                    Optimized checkout suite delivers a frictionless customer
                    experience. Increase revenue and save thousands of
                    engineering hours with prebuilt payment
                </div>
            </div>
            <div className="flex flex-wrap -mt-8 -mx-4 md:-mt-6 md:mx-0">
                {team.map((person) => (
                    <div
                        className="w-[calc(50%-2rem)] mt-8 mx-4 p-16 border border-greyscale-100 bg-greyscale-25 xl:p-8 lg:p-6 md:w-full md:mt-6 md:mx-0"
                        key={person.id}
                    >
                        <div className="w-18 h-18 mb-8 md:w-14 md:h-14 md:mb-6">
                            <Image
                                className="w-full h-full object-cover rounded-full opacity-100"
                                src={person.avatar}
                                width={72}
                                height={72}
                                alt=""
                            />
                        </div>
                        <div className="mb-4 text-h5 xl:text-h6 md:text-h5">
                            {person.name}
                        </div>
                        <div className="mb-8 text-greyscale-400 md:mb-6">
                            {person.position}
                        </div>
                        <div className="mb-8 text-greyscale-400 md:mb-6">
                            {person.description}
                        </div>
                        <a
                            className="group inline-flex items-center h-10 pl-5 pr-3 rounded-full bg-greyscale-0 shadow-2 text-base font-semibold text-secondary-300 transition-colors hover:text-primary-100"
                            href="https://twitter.com/ui8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @{person.social}
                            <Icon
                                className="w-5 h-5 ml-1 fill-secondary-300 transition-colors group-hover:fill-primary-100"
                                name="arrow-right"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Team;
