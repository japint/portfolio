import Head from "next/head";
import Accomplishments from "../components/Accomplishments/Accomplishments";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Angelo Centeno - Full-Stack Web Developer | React, Next.js, Node.js
        </title>
        <meta
          name="description"
          content="Angelo Centeno - Full-Stack Web Developer based in Sankt Augustin, Germany. Specialized in PERN stack development, React, Next.js, Node.js, and PostgreSQL. From engineering to web development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://angelocenteno.dev" />
      </Head>

      <Layout>
        <div className="min-h-screen bg-gradient-to-b from-primary via-primary to-primary/90">
          <Hero />
          <Projects />
          <Technologies />
          <About />
          <Timeline />
          <Accomplishments />
        </div>
      </Layout>
    </>
  );
};

export default Home;
