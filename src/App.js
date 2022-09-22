import Navbar from "./Navbar"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

import { Route, Routes } from "react-router-dom";

//const App = () => {}
function App() {


  return (
    <>
      <Navbar />


      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div>


        </div>
      </div>
      <hr />
      <br />
      <section id="contact">
        <div class="footer">
          <div class="main">
            <div className="flogo">
              <img src="logo.png"></img>
            </div>



            <div class="list">
              <pre> <h2>     MATHUR SABHA Jaipur</h2></pre>
              <div class="social">
                <a href="#"><i class='bx bxl-facebook' ></i></a>
                <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
                <a href="#"><i class='bx bxl-twitter' ></i></a>
                <a href="#"><i class='bx bxl-linkedin' ></i></a>
              </div>
            </div>
          </div>
        </div>


      </section>

    </>

  );
}

export default App;