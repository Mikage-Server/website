import Script from 'next/script';

const Head = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" href="/favicon.webp" />
      <meta name="google-site-verification" content="9MFGKY2INTNuKmR8Lq0XJCIbI2_iowGRlOGMZ-YGR-s" />
      <Script defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "124496809bcf4a82a14d220e48612dea"}'
      />
    </>
  );
};

export default Head;
