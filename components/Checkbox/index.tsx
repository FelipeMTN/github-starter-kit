import Icon from "@/components/Icon";

type CheckboxProps = {
    className?: string;
    classLabel?: string;
    label: string;
    value: any;
    onChange: any;
};

const Checkbox = ({
    className,
    classLabel,
    label,
    value,
    onChange,
}: CheckboxProps) => (
    <label
        className={`group relative flex items-start select-none cursor-pointer tap-highlight-color ${
            className || ""
        }`}
    >
        <input
            className="absolute top-0 left-0 opacity-0 invisible"
            type="checkbox"
            value={value}
            onChange={onChange}
            checked={value}
        />
        <span
            className={`relative flex justify-center items-center shrink-0 w-5 h-5 mt-0.5 mr-3 rounded-md border border-greyscale-100 transition-colors group-hover:border-primary-300 ${
                value ? "bg-primary-300 !border-primary-300" : "bg-transparent"
            }`}
        >
            <Icon
                className={`fill-greyscale-0 transition-opacity ${
                    value ? "opacity-100" : "opacity-0"
                }`}
                name="check"
            />
        </span>
        <span className={`text-lg text-greyscale-400 ${classLabel || ""}`}>
            {label}
        </span>
    </label>
);

export default Checkbox;
