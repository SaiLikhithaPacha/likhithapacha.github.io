import React from "react";
import "./App.css";
import MyNavbar from "./components/Navbar/navbar";
import MyCarousel from "./components/Carousel/carousel";
import Title from "./components/Title/title";
import About from "./pages/About/about";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Skills from "./pages/Skills/skills";
import Contact from "./pages/Contact/contact";
import Particles from "react-particles-js";
import { particlesOptions } from "./particalsOptions";
import { HashRouter } from "react-router-dom";
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
), ...)

<Router basename="/likhithapacha.github.io"> //add basename
      <Switch>
        <Route path='sailikhithapacha.github.io/likhithapacha.github.io' />
//         <Route path='/about' component={About} />
//         <Route path='/services' component={Services} />
//         <Route path='/contact-us' component={Contact} />
      </Switch>
</Router>


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <Title />
      <MyCarousel />
          
      <div>
        <br/>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./images/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={150}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
      <Fade duration={150}>
          <hr />
          <Skills />
          </Fade>
      </Container>
//       <Container className="container-box rounded">
//       <Fade duration={150}>
//           <hr />
//           <TimeLine />
//           </Fade>
//       </Container>
//       <Container className="container-box rounded">
//         <Fade duration={150}>
//           <hr />
//           <Stats />
//         </Fade>
//       </Container>
      <Container className="container-box rounded">
        <Fade duration={150}>
          <hr />
          <Contact />
        </Fade>
      </Container>
    </div>
  );
};

return (
    <HashRouter base="/">
        <App />
    </HashRouter>
)

export default App;
