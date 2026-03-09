import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import { supabase } from "@/src/integrations/supabase/client";

type SignInProps = {};

const SignIn = ({}: SignInProps) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [remember, setRemember] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            navigate("/");
        }
    };

    return (
        <form className="" action="" onSubmit={handleSubmit}>
            {error && (
                <div className="mb-4 p-3 rounded-lg bg-rust/10 text-rust text-base">
                    {error}
                </div>
            )}
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
                className="mb-5 md:mb-4"
                classInput="h-12"
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
            />
            <div className="flex justify-between items-center mb-10 md:mb-6">
                <Checkbox
                    classLabel="font-medium text-charcoal"
                    label="Lembrar de mim"
                    value={remember}
                    onChange={() => setRemember(!remember)}
                />
                <Link
                    className="text-lg font-medium text-charcoal transition-colors hover:text-rust"
                    to="/forgot-password"
                >
                    Esqueceu a senha?
                </Link>
            </div>
            <button
                className="btn-primary btn-md w-full"
                type="submit"
                disabled={loading}
            >
                {loading ? "Entrando..." : "Entrar"}
            </button>
        </form>
    );
};

export default SignIn;
