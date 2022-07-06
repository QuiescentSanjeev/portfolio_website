import React from "react";
import './App.css';
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

import Title from "./components/Title";
import SkillsSection from "./components/SkillsSection";
import RecommendationSection from "./components/RecommendationSection";
import Contact from "./components/Contact";
//import WriteRecommendation from "./components/WriteRecommendation";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BlogSection from "./components/BlogSection";

function App() {
  return (
  
    <BrowserRouter>

    <Navbar />
    <Switch>
      <Route exact path="/">
      <Title myname="Sanjeev Gurunath Dastikopp" myjob="I am a Student at KLE Technological University, India" />
    <RecommendationSection />
    <SkillsSection />
    <ProjectSection/>
    <About/>
    <BlogSection />
      </Route>

      <Route path="/contact">
      <Contact/>
      </Route>

      <Route path="/write-a-recommendation">
      {/* <WriteRecommendation /> */}
      </Route>
    </Switch>
    <Footer/>
    </BrowserRouter>
   );
  
}

// class App extends Component {
//   render(){
//     return (
//           <div className="App">
//             <h1>Portfolio Website</h1>
//           </div>
//         );
//   }

// }
export default App;
