import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type FieldProps = {
    className?: string;
    classInput?: string;
    label?: string;
    textarea?: boolean;
    type?: string;
    value: string;
    onChange: any;
    placeholder?: string;
    required?: boolean;
};

const Field = ({
    className,
    classInput,
    label,
    textarea,
    type,
    value,
    onChange,
    placeholder,
    required,
}: FieldProps) => {
    return (
        <div className={`${className || ""}`}>
            {label && (
                <div className="mb-1.5 text-base font-semibold text-greyscale-700">
                    {label}
                </div>
            )}
            <div className={`relative ${textarea ? "text-0" : ""}`}>
                {textarea ? (
                    <textarea
                        className={twMerge(
                            `w-full h-[8.25rem] px-3.5 py-2.5 bg-transparent border border-greyscale-100 rounded-lg shadow-[0_0.0625rem_0.125rem_0_rgba(16,24,40,0.05)] text-lg text-greyscale-900 outline-none transition-colors placeholder:text-greyscale-300 resize-none focus:!border-primary-300 ${
                                classInput || ""
                            }`
                        )}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                    ></textarea>
                ) : (
                    <input
                        className={twMerge(
                            `w-full h-11 px-3.5 bg-transparent border border-greyscale-100 rounded-lg shadow-[0_0.0625rem_0.125rem_0_rgba(16,24,40,0.05)] text-lg text-greyscale-900 outline-none transition-colors placeholder:text-greyscale-300 focus:!border-primary-300 ${
                                classInput || ""
                            } ${type === "password" ? "pr-12" : ""}`
                        )}
                        type={type || "text"}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                    />
                )}
                {type === "password" && (
                    <button
                        className="group absolute top-0 right-0 bottom-0 w-12 text-0"
                        type="button"
                    >
                        <Icon
                            className="fill-greyscale-300 transition-colors group-hover:fill-primary-100"
                            name="eye"
                        />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Field;
