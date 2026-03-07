import Link from "next/link";
import Image from "@/components/Image";
import Slider from "./Slider";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

type LoginProps = {
    signUp?: boolean;
};

const Login = ({ signUp }: LoginProps) => (
    <div className="flex min-h-screen min-h-screen-ios">
        <Slider />
        <div className="flex items-center grow p-8 md:px-6">
            <div className="max-w-[31.875rem] w-full mx-auto">
                <div className="mb-4 text-center text-h5 md:h-6">
                    {signUp ? "Sign up to Finto" : "Sign in to Finto"}
                </div>
                <div className="mb-10 text-center text-lg text-greyscale-400 md:mb-6">
                    Send, spend and save smarter
                </div>
                <div className="flex space-x-4 mb-5 md:block md:mb-4 md:space-x-0 md:space-y-4">
                    <button className="btn-secondary btn-md flex-1 rounded-lg md:w-full">
                        <Image
                            className="w-5 opacity-100"
                            src="/images/content/google.svg"
                            width={22}
                            height={22}
                            alt=""
                        />
                        <span>Sign In with Google</span>
                    </button>
                    <button className="btn-secondary btn-md flex-1 rounded-lg md:w-full">
                        <Image
                            className="w-5 opacity-100"
                            src="/images/content/apple.svg"
                            width={22}
                            height={20}
                            alt=""
                        />
                        <span>Sign In with Google</span>
                    </button>
                </div>
                <div className="flex items-center mb-5 md:mb-4">
                    <div className="grow h-0.25 bg-greyscale-100"></div>
                    <div className="mx-3 text-base text-greyscale-400">
                        Or with email
                    </div>
                    <div className="grow h-0.25 bg-greyscale-100"></div>
                </div>
                {signUp ? <SignUp /> : <SignIn />}
                <div className="mt-10 text-center text-lg text-greyscale-400 md:mt-6">
                    Don’t have an account?{" "}
                    <Link
                        className="font-semibold text-greyscale-900 transition-colors hover:text-primary-100"
                        href={signUp ? "/sign-in" : "sign-up"}
                    >
                        {signUp ? "Sign In" : "Sign Up"}
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Login;
