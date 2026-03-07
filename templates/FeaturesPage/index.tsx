"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Reviews from "@/components/Reviews";
import Main from "./Main";
import Payments from "./Payments";
import Global from "./Global";

const FeaturesPage = () => {
    return (
        <Layout paddingTop>
            <Main />
            <Payments />
            <Global />
            <Reviews />
            <Join />
        </Layout>
    );
};

export default FeaturesPage;
