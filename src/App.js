import './App.css';
import Nav from './components/RedFoxNavbar';
import AboutUs from './components/AboutUs';
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <AboutUs />
      <ContactUs />
        <Reviews />
        <Footer />
    </div>
  );
}

export default App;
