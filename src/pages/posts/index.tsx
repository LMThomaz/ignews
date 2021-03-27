import Head from "next/head";
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
