"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Reviews from "@/components/Reviews";
import Main from "./Main";
import Revenue from "./Revenue";
import Saving from "./Saving";

const SolutionsPage = () => {
    return (
        <Layout darkHeader>
            <Main />
            <Revenue />
            <Saving />
            <Reviews />
            <Join />
        </Layout>
    );
};

export default SolutionsPage;
