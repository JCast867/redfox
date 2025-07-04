import './App.css';
import Nav from './components/RedFoxNavbar';
import AboutUs from './components/AboutUs';
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import RedFoxHelmet from './components/RedfoxHelmet';

function App() {
  return (
    <>
      <RedFoxHelmet />
      <Nav />
      <Main />
      <AboutUs />
      <ContactUs />
      <Reviews />
      <Footer />
    </>
      
  );
}

export default App;
