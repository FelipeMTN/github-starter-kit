"use client";

import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Main from "./Main";
import List from "./List";

const CustomersPage = () => {
    return (
        <Layout darkHeader>
            <Main />
            <List />
            <Join />
        </Layout>
    );
};

export default CustomersPage;
