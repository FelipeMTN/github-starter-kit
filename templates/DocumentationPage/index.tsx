"use client";

import { useRef } from "react";
import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Main from "./Main";
import List from "./List";

const DocumentationPage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout classHeader="!bg-greyscale-25 !border-none">
            <Main scrollToRef={scrollToRef} />
            <List scrollToRef={scrollToRef} />
            <Join />
        </Layout>
    );
};

export default DocumentationPage;
