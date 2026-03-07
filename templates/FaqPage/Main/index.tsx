import Dividers from "@/components/Dividers";

type MainProps = {};

const Main = ({}: MainProps) => (
    <Dividers className="bg-secondary-300 text-greyscale-0" hero light>
        <div className="py-20 text-center md:py-12">
            <div className="container">
                <div className="label bg-white/[0.08] text-greyscale-100 mb-4">
                    FAQ
                </div>
                <div className="mb-4 text-h1 xl:text-h2 md:text-h3">
                    Frequently Asked Question
                </div>
                <div className="max-w-[48rem] mx-auto text-white/70">
                    Odio risus nec sit semper massa tellus congue vulputate
                    cursus. In mattis sem tortor blandit sagittis. Ultricies
                    urna odio tempus eget ut. Leo massa mauris ut elementum
                    suspendisse id.
                </div>
            </div>
        </div>
    </Dividers>
);

export default Main;
