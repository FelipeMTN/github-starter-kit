import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Field from "@/components/Field";
import { supabase } from "@/src/integrations/supabase/client";

const ResetPasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check for recovery token in URL hash
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        if (hashParams.get("type") !== "recovery") {
            // If no recovery token, redirect to sign-in
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setLoading(true);

        const { error } = await supabase.auth.updateUser({ password });

        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
            setTimeout(() => navigate("/sign-in"), 3000);
        }
    };

    if (success) {
        return (
            <div className="flex items-center justify-center min-h-screen p-8">
                <div className="max-w-[31.875rem] w-full text-center">
                    <div className="mb-4 text-h5 text-greyscale-900">Password Updated!</div>
                    <div className="mb-8 text-lg text-greyscale-400">
                        Your password has been updated. Redirecting to sign in...
                    </div>
                    <Link className="btn-primary btn-md" to="/sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-8">
            <div className="max-w-[31.875rem] w-full">
                <div className="mb-4 text-center text-h5">Set New Password</div>
                <div className="mb-10 text-center text-lg text-greyscale-400">
                    Enter your new password
                </div>
                <form onSubmit={handleSubmit}>
                    {error && (
                        <div className="mb-4 p-3 rounded-lg bg-error-0 text-error-100 text-base">
                            {error}
                        </div>
                    )}
                    <Field
                        className="mb-4"
                        classInput="h-12"
                        placeholder="New password (min 6 characters)"
                        type="password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                        required
                    />
                    <Field
                        className="mb-8"
                        classInput="h-12"
                        placeholder="Confirm new password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e: any) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button
                        className="btn-primary btn-md w-full"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
