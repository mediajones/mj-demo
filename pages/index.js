import Head from "next/head";
import Hero from "../components/home";

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>MediaJones | Demo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
