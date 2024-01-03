import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "react-bootstrap";
// // import Hi from "./components/class-component";

// import ClassEvent from "./components/class-eventhandling";
// import Eventhand from "./components/eventhandlingtutors";
// import Hookfun from "./components/hookfun";

// import Subscribe from "./components/states";

// // import Proportyc from "./components/Proportyc";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./projects/Header";
import SlideShow from "./projects/slideshows";
// import image1 from "./images/image1.jpg";
// import image2 from "./images/image2.jpg";
// import image3 from "./images/image3.jpg";
const App = () => {
  // const slides = [
  //   <img class="image" src={image1} alt="Image 1" />,
  //   <img src={image2} alt="Image 2" />,
  //   <img src={image3} alt="Image 3" />,
  // ];

  return (
    <div>
      {/* <h1>React Slide Show</h1>
      <SlideShow slides={slides} /> */}
    </div>
  );
};

export default App;
