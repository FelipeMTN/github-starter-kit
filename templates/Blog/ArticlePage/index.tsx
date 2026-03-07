"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Main from "./Main";
import RelatedArticle from "./RelatedArticle";

const ArticlePage = ({ id }: any) => {
    return (
        <Layout paddingTop>
            <Main id={id} />
            <RelatedArticle />
            <Join />
        </Layout>
    );
};

export default ArticlePage;
