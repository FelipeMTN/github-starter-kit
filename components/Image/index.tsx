import { useState } from "react";

type ImageProps = {
    className?: string;
    src: string;
    width?: number;
    height?: number;
    alt?: string;
    fill?: boolean;
    sizes?: string;
    style?: React.CSSProperties;
};

const Image = ({ className, src, width, height, alt, fill, ...rest }: ImageProps) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    const fillStyle: React.CSSProperties = fill
        ? { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }
        : {};

    return (
        <img
            className={`inline-block align-top opacity-0 transition-opacity ${
                loaded && "opacity-100"
            } ${className || ""}`}
            src={src}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            alt={alt || ""}
            style={fillStyle}
            onLoad={() => setLoaded(true)}
        />
    );
};

export default Image;
