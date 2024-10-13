import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Hitha C is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="hitha c, hitha, c, web developer portfolio, hitha web developer, hitha developer, mern stack, hitha c portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Hitha C's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/pdz4RmF" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Hitha C',
};
