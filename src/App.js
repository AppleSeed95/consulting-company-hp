import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Calendly from './components/utils/Calendly';
import ViewportTrigger from './components/atoms/ViewportTrigger';
function App() {
  return (
    <div className="App">
      <ViewportTrigger />
      <Header />
      <Home />
      <Services />
      <Blog />
      <Contact />
      <Footer />
      <Calendly />
    </div>
  );
}

export default App;
