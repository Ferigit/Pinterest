import type { ReactElement } from "react";
import Head from "next/head";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Layout from "@/src/components/shared/Layout";
import HomePage from "@/src/components/business/HomePage";
import Posts from "@/src/components/business/PostList";
import { useUser } from "@/src/hooks/useUser";

export default function Page({
  isLoggedIn,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { user } = useUser();

  return <>{isLoggedIn || user ? <Posts /> : <HomePage />}</>;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Save and publish your posts" />
        <meta name="keywords" content="Pinterest, post, publish post" />

        {/* Open Graph tags for better social media sharing */}
        <meta property="og:title" content="Pinterest, publish your posts" />
        <meta
          property="og:description"
          content="You can publish your posts here at pinterest"
        />
        <meta property="og:type" content="website" />
        {/* Twitter card for better Twitter sharing */}
        <meta
          name="twitter:pinterest"
          content="Pintereset, publish your posts here"
        />
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export const getServerSideProps = (async (context) => {
  const isLoggedIn = context.req?.cookies?.user ?? false;

  return { props: { data: [], isLoggedIn } };
}) satisfies GetServerSideProps<{}>;
