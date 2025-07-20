import { Helmet } from "react-helmet";

function RedFoxHelmet() {
  return (
    <Helmet>
      <title>RedFox Construction</title>
      <meta
        name="description"
        content="RedFox Construction provides roofing, siding, gutters, windows, and deck services in McHenry County Illinois. View our project gallery and contact us for a quote."
      />
      <meta
        name="keywords"
        content="roofing, roof repair, roof construction, siding, gutters, windows, doors, decks, fences, Crystal Lake, IL, McHenry County, Wonder Lake, Woodstock, Harvard, McHenry, RedFox Construction, Red Fox Construction, Red Fox, contractor"
      />
      <meta name="theme-color" content="#eeeeee" />

      {/* from google search console */}
      <meta
        name="google-site-verification"
        content="PKZvW7utJ_i0xmotUoFha5dBvriuxYUG3uaHkpZRS2g"
      />

      <link rel="canonical" href="https://therealredfox.com/" />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="RedFox Construction | Quality Roofing & Construction Services"
      />
      <meta
        property="og:description"
        content="Professional roofing and construction services with exceptional quality and customer service."
      />
      <meta
        property="og:image"
        content="https://therealredfox.com/redfox.png"
      />
      <meta property="og:url" content="https://therealredfox.com/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default RedFoxHelmet;
