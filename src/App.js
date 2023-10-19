import "./App.css";
import Textform from "./components/Textform";
import Navbar from "./components/Navbar"
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze"/>
      </div>
      <About heading="About Us"/>
    </>
  );
}

export default App;
