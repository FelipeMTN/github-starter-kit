"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Main from "./Main";
import List from "./List";

const FaqPage = () => {
    return (
        <Layout darkHeader>
            <Main />
            <List />
            <Join />
        </Layout>
    );
};

export default FaqPage;
