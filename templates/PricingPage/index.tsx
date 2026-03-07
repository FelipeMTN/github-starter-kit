"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Main from "./Main";
import Plan from "./Plan";
import Faq from "./Faq";

const PricingPage = () => {
    return (
        <Layout classHeader="!bg-greyscale-25">
            <Main />
            <Plan />
            <Faq />
            <Join />
        </Layout>
    );
};

export default PricingPage;
