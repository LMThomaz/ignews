import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de marlo de 2021</time>
            <strong>Creating a Monorepo with Lenna & Yarn Workspace</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              fugiat eius temporibus iusto tempore.
            </p>
          </a>
          <a href="#">
            <time>12 de marlo de 2021</time>
            <strong>Creating a Monorepo with Lenna & Yarn Workspace</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              fugiat eius temporibus iusto tempore.
            </p>
          </a>
          <a href="#">
            <time>12 de marlo de 2021</time>
            <strong>Creating a Monorepo with Lenna & Yarn Workspace</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              fugiat eius temporibus iusto tempore.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "posts")],
    {
      fetch: ["posts.title", "posts.content"],
      pageSize: 100,
    }
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
