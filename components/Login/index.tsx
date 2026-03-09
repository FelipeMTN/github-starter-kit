import { Link } from "react-router-dom";
import Image from "@/components/Image";
import Slider from "./Slider";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { lovable } from "@/src/integrations/lovable/index";

type LoginProps = {
    signUp?: boolean;
};

const Login = ({ signUp }: LoginProps) => {
    const handleGoogleSignIn = async () => {
        const { error } = await lovable.auth.signInWithOAuth("google", {
            redirect_uri: window.location.origin,
        });
        if (error) console.error("Google sign-in error:", error);
    };

    const handleAppleSignIn = async () => {
        const { error } = await lovable.auth.signInWithOAuth("apple", {
            redirect_uri: window.location.origin,
        });
        if (error) console.error("Apple sign-in error:", error);
    };

    return (
        <div className="flex min-h-screen min-h-screen-ios">
            <Slider />
            <div className="flex items-center grow p-8 md:px-6 bg-cream">
                <div className="max-w-[31.875rem] w-full mx-auto">
                    <div className="mb-4 text-center text-h5 text-charcoal md:h-6">
                        {signUp ? "Criar conta no CAFE" : "Entrar no CAFE"}
                    </div>
                    <div className="mb-10 text-center text-lg text-charcoal/60 md:mb-6">
                        Cultive suas finanças com sabedoria
                    </div>
                    <div className="flex space-x-4 mb-5 md:block md:mb-4 md:space-x-0 md:space-y-4">
                        <button
                            className="btn-secondary btn-md flex-1 rounded-lg md:w-full"
                            onClick={handleGoogleSignIn}
                            type="button"
                        >
                            <Image
                                className="w-5 opacity-100"
                                src="/images/content/google.svg"
                                width={22}
                                height={22}
                                alt=""
                            />
                            <span>Entrar com Google</span>
                        </button>
                        <button
                            className="btn-secondary btn-md flex-1 rounded-lg md:w-full"
                            onClick={handleAppleSignIn}
                            type="button"
                        >
                            <Image
                                className="w-5 opacity-100"
                                src="/images/content/apple.svg"
                                width={22}
                                height={20}
                                alt=""
                            />
                            <span>Entrar com Apple</span>
                        </button>
                    </div>
                    <div className="flex items-center mb-5 md:mb-4">
                        <div className="grow h-0.25 bg-taupe"></div>
                        <div className="mx-3 text-base text-charcoal/60">
                            Ou com email
                        </div>
                        <div className="grow h-0.25 bg-taupe"></div>
                    </div>
                    {signUp ? <SignUp /> : <SignIn />}
                    <div className="mt-10 text-center text-lg text-charcoal/60 md:mt-6">
                        {signUp ? "Já tem uma conta?" : "Não tem uma conta?"}{" "}
                        <Link
                            className="font-semibold text-charcoal transition-colors hover:text-rust"
                            to={signUp ? "/sign-in" : "/sign-up"}
                        >
                            {signUp ? "Entrar" : "Criar Conta"}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
