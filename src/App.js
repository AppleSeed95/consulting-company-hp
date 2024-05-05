import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Services from './components/Services';
import Token from './components/Token';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Calendly from './components/utils/Calendly';
import ViewportTrigger from './components/atoms/ViewportTrigger';
function App() {
  return (
    <div className="App">
      <div className='bg'></div>
      <ViewportTrigger />
      <Header />
      <Home />
      <Services />
      <Token />
      <Contact />
      <Footer />
      <Calendly />
    </div>
  );
}

export default App;
