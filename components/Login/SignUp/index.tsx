import { useState } from "react";
import Link from "next/link";
import Field from "@/components/Field";

type SignUpProps = {};

const SignUp = ({}: SignUpProps) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    return (
        <form className="" action="" onSubmit={() => console.log("Submit")}>
            <div className="flex mb-4 space-x-4 md:space-x-3 md:mb-3">
                <Field
                    className="flex-1"
                    classInput="h-12"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e: any) => setFirstName(e.target.value)}
                    required
                />
                <Field
                    className="flex-1"
                    classInput="h-12"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e: any) => setLastName(e.target.value)}
                    required
                />
            </div>
            <Field
                className="mb-4 md:mb-3"
                classInput="h-12"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
            />
            <Field
                className="mb-10 md:mb-6"
                classInput="h-12"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
            />
            <Link className="btn-primary btn-md w-full" href="/success">
                Sign Up
            </Link>
        </form>
    );
};

export default SignUp;
