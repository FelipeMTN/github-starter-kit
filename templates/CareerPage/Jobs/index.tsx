import Link from "next/link";
import Dividers from "@/components/Dividers";
import Icon from "@/components/Icon";

import { jobs } from "@/mocks/jobs";

type JobsProps = {
    scrollToRef: any;
};

const Jobs = ({ scrollToRef }: JobsProps) => (
    <Dividers className="section bg-greyscale-25">
        <div
            className="absolute -top-[8.75rem] left-0 right-0 md:-top-24"
            ref={scrollToRef}
        ></div>
        <div className="container">
            <div className="max-w-[37.5rem] mb-16 md:mb-8">
                <div className="stage">Jobs</div>
                <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                    Jobs Opening
                </div>
                <div className="text-greyscale-400">
                    Hendrerit fames metus leo ut orci pretium. Sit vitae montes
                    egestas montes mauris. Auctor vitae neque urna nam nunc
                    pellentesque.
                </div>
            </div>
            <div className="space-y-4">
                {jobs.map((job) => (
                    <Link
                        className="group flex items-center p-6 border border-greyscale-100 bg-greyscale-0 transition-colors hover:border-primary-100 md:p-4"
                        href="/career"
                        key={job.id}
                    >
                        <div className="grow">
                            <div className="mb-3 text-h5 md:mb-2 md:text-h6">
                                {job.title}
                            </div>
                            <div className="flex flex-wrap items-center">
                                <div className="text-lg text-greyscale-400">
                                    {job.duration}
                                </div>
                                <div className="w-1.5 h-1.5 mx-2 bg-greyscale-100 rounded-full"></div>
                                <div className="text-lg text-greyscale-400">
                                    {job.location}
                                </div>
                            </div>
                        </div>
                        <Icon
                            className="shrink-0 ml-8 fill-greyscale-300 transition-all group-hover:rotate-45 group-hover:fill-primary-100"
                            name="arrow-up-right"
                        />
                    </Link>
                ))}
            </div>
            <div className="mt-16 text-greyscale-400 md:mt-8">
                Don’s see opportunity that suits you?{" "}
                <Link
                    className="text-secondary-300 underline transition-colors hover:text-primary-100 hover:no-underline"
                    href="/contact-us"
                >
                    Get notified when new roles added
                </Link>
            </div>
        </div>
    </Dividers>
);

export default Jobs;
