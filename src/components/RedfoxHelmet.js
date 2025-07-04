import { Helmet } from "react-helmet";

function RedFoxHelmet() {
    return (
        <Helmet>
            <title>Red Fox Construction | McHenry County Construction</title>
            <meta name="description" content="Red Fox Construction provides roofing, siding, gutters, windows, and deck services in McHenry County Illinois. View our project gallery and contact us for a quote." />
            <meta name="keywords" content="roofing, roof repair, roof construction, siding, gutters, windows, doors, decks, fences, Crystal Lake IL, McHenry County, RedFox Construction, Red Fox Construction, contractor" />
            <meta name="theme-color" content="#eeeeee" />

            <link rel="canonical" href="https://redfoxtesting.netlify.app/" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="RedFox Construction | Quality Roofing & Construction Services" />
            <meta property="og:description" content="Professional roofing and construction services with exceptional quality and customer service." />
            <meta property="og:image" content="https://redfoxtesting.netlify.app/redfox.png" />
            <meta property="og:url" content="https://redfoxtesting.netlify.app/" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}

export default RedFoxHelmet;
