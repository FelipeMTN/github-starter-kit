"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Main from "./Main";
import Companies from "./Companies";

const IntegrationsPage = () => {
    return (
        <Layout classHeader="!bg-greyscale-25">
            <Main />
            <Companies />
            <Join />
        </Layout>
    );
};

export default IntegrationsPage;
