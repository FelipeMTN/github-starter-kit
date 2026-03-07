"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Main from "./Main";
import Details from "./Details";
import Team from "./Team";

const AboutUsPage = () => {
    return (
        <Layout darkHeader>
            <Main />
            <Details />
            <Team />
            <Join />
        </Layout>
    );
};

export default AboutUsPage;
