import type { ReactElement } from "react";
import Head from "next/head";
import Layout from "@/src/components/shared/Layout";
import NewPostTool from "@/src/components/business/NewPostTool";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <NewPostTool />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Save and publish at pinterest</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;
