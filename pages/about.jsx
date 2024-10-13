const AboutPage = () => {
  return (
    <>
      <h1>A Little Bit About Me</h1>
      <h3>Technophile | Full Stack Developer | UI/UX Designer</h3>

      <p>As a 21-year-old technophile, I bring nearly two years of expertise in frontend, backend, UI/UX, with additional knowledge in cloud and AI. My journey includes working with overseas startups and international freelancing clients, providing me with a deep understanding of industry needs.

I've collaborated with founders and senior developers, gaining invaluable insights into real-world problem-solving beyond just coding algorithms. Unlike those who merely memorize code, I thrive on practical problem-solving. I choose the best technology for the situation, whether it's AWS/Azure for handling servers coded in Go, TypeScript, PHP, or C++.

In the past two years, I've delivered over 5+ successful freelancing projects to international clients, dedicating 6+ hours daily to honing my craft.

If you're a startup looking for an entry-level professional who can scale and optimize your infrastructure, let's connect. Drop me a message to see my proof of work drive folder.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
