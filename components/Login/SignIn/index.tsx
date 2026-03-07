import { useState } from "react";
import Link from "next/link";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";

type SignInProps = {};

const SignIn = ({}: SignInProps) => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [remember, setRemember] = useState<boolean>(false);

    return (
        <form className="" action="" onSubmit={() => console.log("Submit")}>
            <Field
                className="mb-4 md:mb-3"
                classInput="h-12"
                placeholder="Email or username"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                required
            />
            <Field
                className="mb-5 md:mb-4"
                classInput="h-12"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
            />
            <div className="flex justify-between items-center mb-10 md:mb-6">
                <Checkbox
                    classLabel="font-medium text-greyscale-900"
                    label="Remember me"
                    value={remember}
                    onChange={() => setRemember(!remember)}
                />
                <Link
                    className="text-lg font-medium text-secondary-300 transition-colors hover:text-primary-100"
                    href="/forgot-password"
                >
                    Forgot Password?
                </Link>
            </div>
            <button className="btn-primary btn-md w-full">Sign In</button>
        </form>
    );
};

export default SignIn;
