import Dividers from "@/components/Dividers";
import Image from "@/components/Image";

const payments = [
    {
        title: "Prebuilt Payments",
        content:
            "Mollis morbi tellus etiam leo pretium varius. Duis ac id sed in. Convallis mauris eget orci volutpat. Ac auctor massa risus vitae eu lectus quam nulla tortor.",
        image: "/images/content/payments-pic-1.png",
    },
    {
        title: "Payment Links",
        content:
            "Dictumst tristique proin mauris mattis. Dui in id in arcu viverra condimentum posuere. Sit etiam diam duis",
        image: "/images/content/payments-pic-2.png",
    },
    {
        title: "UI Components",
        content:
            "Tristique nulla pellentesque ipsum mi pellentesque. Tellus viverra urna amet tortor purus erat etiam vitae",
        image: "/images/content/payments-pic-3.png",
    },
    {
        title: "One Click Checkout",
        content:
            "Tristique lacus donec vestibulum dolor mauris. Adipiscing arcu urna amet amet lacus imperdiet aliquam aliquet rutrum. Tortor scelerisque id ut congue",
        image: "/images/content/payments-pic-4.png",
    },
];

type PaymentsProps = {};

const Payments = ({}: PaymentsProps) => (
    <Dividers className="section bg-greyscale-25">
        <div className="container">
            <div className="mb-16 lg:mb-12 md:mb-8">
                <div className="stage">Online Payments</div>
                <div className="mb-4 text-h2 xl:text-h3 md:text-h4">
                    Optimize Your Checkout Experience
                </div>
                <div className="max-w-[46.6rem] text-greyscale-400">
                    Optimized checkout suite delivers a frictionless customer
                    experience. Increase revenue and save thousands of
                    engineering hours with prebuilt payment
                </div>
            </div>
            <div className="flex flex-wrap -mt-6 -mx-3 lg:block lg:m-0 lg:space-y-8 md:space-y-6">
                {payments.map((item, index) => (
                    <div
                        className={`flex flex-col justify-between mt-6 mx-3 p-4 shadow-2 bg-greyscale-0 border border-greyscale-100 lg:m-0 ${
                            index === 1 || index === 2
                                ? "flex flex-col-reverse w-[calc(41%-1.5rem)] lg:w-full"
                                : "w-[calc(59%-1.5rem)] lg:w-full"
                        }`}
                        key={index}
                    >
                        <div
                            className={`p-2 ${
                                index === 1 || index === 2 ? "mt-6" : "mb-6"
                            }`}
                        >
                            <div className="mb-3 text-h6">{item.title}</div>
                            <div className="text-lg text-greyscale-400">
                                {item.content}
                            </div>
                        </div>
                        <div className="bg-greyscale-25 border border-greyscale-100">
                            <Image
                                className="w-full"
                                src={item.image}
                                width={644}
                                height={250}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Dividers>
);

export default Payments;
