import './App.css';
import Tabs from './components/Tabs';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
     <Tabs 
      config={[
        {header: "Home", component: <Home />},
        {header: "About", component: <About />},
        {header: "Contact", component: <Contact />}
      ]}
     />
  );
}

export default App;
