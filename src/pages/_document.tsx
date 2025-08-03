import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Angelo Centeno" />
        <meta
          name="description"
          content="Angelo Centeno - Full-Stack Web Developer based in Germany. Specialized in PERN stack development with expertise in React, Next.js, Node.js, PostgreSQL, and modern JavaScript technologies."
        />
        <meta
          name="keywords"
          content="Angelo Centeno, Full-Stack Developer, Web Developer, React, Next.js, Node.js, PostgreSQL, PERN Stack, JavaScript, TypeScript, Germany, Sankt Augustin"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Angelo Centeno - Full-Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Full-Stack Web Developer specializing in PERN stack development. Based in Germany, creating innovative digital experiences."
        />
        <meta property="og:image" content="/images/profile.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Angelo Centeno - Full-Stack Web Developer"
        />
        <meta
          property="twitter:description"
          content="Full-Stack Web Developer specializing in PERN stack development. Based in Germany, creating innovative digital experiences."
        />
        <meta property="twitter:image" content="/images/profile.jpeg" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/profile.jpeg" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-primary text-white font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
