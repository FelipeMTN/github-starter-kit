import { useState } from "react";
import Field from "@/components/Field";
import Image from "@/components/Image";
import Checkbox from "@/components/Checkbox";

type MainProps = {};

const Main = ({}: MainProps) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [privacy, setPrivacy] = useState<boolean>(false);

    return (
        <div className="pt-16 pb-24 bg-greyscale-0 md:py-10">
            <div className="container-md">
                <div className="flex items-center -mx-8 2xl:items-start lg:block lg:mx-0">
                    <form
                        className="w-[calc(50%-4rem)] mx-8 px-16 2xl:px-8 xl:px-0 lg:w-full lg:m-0"
                        action=""
                        onSubmit={() => console.log("Submit")}
                    >
                        <div className="mb-4 text-h4 md:mb-2 md:text-h6">
                            Contact us
                        </div>
                        <div className="mb-12 text-[#475467] md:mb-8 md:text-lg">
                            Our friendly team would love to hear from you.
                        </div>
                        <div className="flex space-x-8 mb-6 md:space-x-3 md:mb-5">
                            <Field
                                className="flex-1"
                                label="First name"
                                placeholder="First name"
                                value={firstName}
                                onChange={(e: any) =>
                                    setFirstName(e.target.value)
                                }
                                required
                            />
                            <Field
                                className="flex-1"
                                label="Last name"
                                placeholder="Last name"
                                value={lastName}
                                onChange={(e: any) =>
                                    setLastName(e.target.value)
                                }
                                required
                            />
                        </div>
                        <Field
                            className="mb-6 md:mb-5"
                            label="Email"
                            placeholder="you@company.com"
                            type="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            required
                        />
                        <Field
                            className="mb-6 md:mb-5"
                            label="Phone number"
                            placeholder="+1 (555) 000-0000"
                            type="tel"
                            value={phone}
                            onChange={(e: any) => setPhone(e.target.value)}
                            required
                        />
                        <Field
                            className="mb-6 md:mb-5"
                            label="Message"
                            placeholder="Leave us a message..."
                            value={message}
                            onChange={(e: any) => setMessage(e.target.value)}
                            required
                            textarea
                        />
                        <Checkbox
                            className="mb-8 md:mb-6"
                            label="You agree to our friendly privacy policy."
                            value={privacy}
                            onChange={() => setPrivacy(!privacy)}
                        />
                        <button className="btn-primary btn-md w-full">
                            Send Message
                        </button>
                    </form>
                    <div className="w-[calc(50%-4rem)] mx-8 lg:hidden">
                        <Image
                            className="w-full"
                            src="/images/content/contact-pic.jpg"
                            width={608}
                            height={800}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
