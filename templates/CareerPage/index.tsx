"use client";

import { useRef } from "react";
import Layout from "@/components/Layout";
import Join from "@/components/Join";
import Main from "./Main";
import Perks from "./Perks";
import Quality from "./Quality";
import Jobs from "./Jobs";

const CareerPage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout classHeader="!bg-greyscale-25">
            <Main scrollToRef={scrollToRef} />
            <Perks />
            <Quality />
            <Jobs scrollToRef={scrollToRef} />
            <Join />
        </Layout>
    );
};

export default CareerPage;
