import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Field from "@/components/Field";
import { supabase } from "@/src/integrations/supabase/client";

type SignUpProps = {};

const SignUp = ({}: SignUpProps) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName,
                },
                emailRedirectTo: window.location.origin,
            },
        });

        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
        }
    };

    if (success) {
        return (
            <div className="text-center">
                <div className="mb-4 text-h6 text-charcoal">Verifique seu email</div>
                <div className="text-lg text-charcoal/60">
                    Enviamos um link de confirmação para <strong className="text-charcoal">{email}</strong>. Verifique sua caixa de entrada para ativar sua conta.
                </div>
            </div>
        );
    }

    return (
        <form className="" action="" onSubmit={handleSubmit}>
            {error && (
                <div className="mb-4 p-3 rounded-lg bg-rust/10 text-rust text-base">
                    {error}
                </div>
            )}
            <div className="flex mb-4 space-x-4 md:space-x-3 md:mb-3">
                <Field
                    className="flex-1"
                    classInput="h-12"
                    placeholder="Nome"
                    value={firstName}
                    onChange={(e: any) => setFirstName(e.target.value)}
                    required
                />
                <Field
                    className="flex-1"
                    classInput="h-12"
                    placeholder="Sobrenome"
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
                placeholder="Senha (mínimo 6 caracteres)"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
            />
            <button
                className="btn-primary btn-md w-full"
                type="submit"
                disabled={loading}
            >
                {loading ? "Criando conta..." : "Criar Conta"}
            </button>
        </form>
    );
};

export default SignUp;
