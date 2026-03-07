import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Dividers from "@/components/Dividers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
    paddingTop?: boolean;
    classHeader?: string;
    darkHeader?: boolean;
    children: React.ReactNode;
};

const Layout = ({
    paddingTop,
    classHeader,
    darkHeader,
    children,
}: LayoutProps) => {
    const pathname = usePathname();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);

    return (
        <>
            <Header className={classHeader} dark={darkHeader} />
            <Dividers
                className="flex flex-col min-h-screen overflow-hidden"
                classInner="flex flex-col grow"
                hero={paddingTop}
            >
                {children}
                <Footer />
            </Dividers>
        </>
    );
};

export default Layout;
