"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Reviews from "@/components/Reviews";
import Main from "./Main";
import Solutions from "./Solutions";
import Details from "./Details";
import Global from "./Global";

const HomePage = () => {
    return (
        <Layout darkHeader>
            <Main />
            <Solutions />
            <Details />
            <Global />
            <Reviews />
            <Join />
        </Layout>
    );
};

export default HomePage;
