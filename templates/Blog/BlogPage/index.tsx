"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Reviews from "@/components/Reviews";
import Main from "./Main";
import List from "./List";

const BlogPage = () => {
    return (
        <Layout paddingTop>
            <Main />
            <List />
            <Reviews />
            <Join />
        </Layout>
    );
};

export default BlogPage;
