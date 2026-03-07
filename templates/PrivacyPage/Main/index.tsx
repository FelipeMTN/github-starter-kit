import Dividers from "@/components/Dividers";
import Content from "./Content";

type MainProps = {};

const Main = ({}: MainProps) => {
    return (
        <Dividers className="bg-greyscale-25" hero>
            <div className="pt-16 pb-24 md:py-12">
                <div className="container max-w-[61.5rem]">
                    <div className="text-center">
                        <div className="mb-4 label label-sm">
                            License and Notes
                        </div>
                        <div className="mb-4 text-h2 md:text-h4">
                            Privacy Policy
                        </div>
                        <div className="text-lg text-greyscale-400">
                            Last Updated:{" "}
                            <span className="font-semibold text-greyscale-900">
                                October 31, 2023
                            </span>
                        </div>
                    </div>
                    <Content />
                    <div className="mt-16 pt-16 border-t border-greyscale-200 lg:mt-12 lg:pt-12 md:mt-8 md:pt-8">
                        <div className="mb-2 text-h6">Contact us:</div>
                        <div className="mb-2 text-greyscale-400">
                            Email: support(at)finto.co
                        </div>
                        <div className="mb-8 text-greyscale-400">
                            Address: Flowbase PTY LTD, 4170, Brisbane, Australia
                        </div>
                        <div className="mb-8 text-greyscale-400">
                            Thank you for your continued support, and we hope
                            our website remains a valuable resource for you.
                        </div>
                        <div className="text-greyscale-400">
                            Sincerely, <br></br>The Finto Team
                        </div>
                    </div>
                </div>
            </div>
        </Dividers>
    );
};

export default Main;
