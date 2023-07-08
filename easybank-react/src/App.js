import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";
import Credits from "./components/Credits";

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Footer/>
          <Credits/>
    </div>
  );
}

export default App;
