import './App.css';
import Nav from './components/RedFoxNavbar';
import AboutUs from './components/AboutUs';
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <AboutUs />
      <ContactUs />
        <Reviews />
    </div>
  );
}

export default App;
