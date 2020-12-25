import React from "react";
import { Navigation } from "./components/navbar";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Homepage  from "./pages/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Projects  from "./pages/projects";
import { Skills } from "./pages/skills";
import { Testimonials } from "./pages/Testimonials";
import Hireme from "./pages/hireme";
import { AnimatePresence, motion } from "framer-motion";
import { SkylimitFocus } from "./components/skylimitfocus";
import {PowerstrokeFocus} from './components/powerstrokefocus'
import { Weaponsshopfocus } from "./components/weaponsshopfocus";
import { ThiswebsiteFocus } from "./components/thiswebsitefocus";
import { JymrDoodlesFocus } from "./components/jymrdoodlesfocus";
import UseFavicon from './components/useFavicon'
import { Jsquizfocus } from "./components/jsquizfocus";
import { Weatherappfocus } from "./components/weatherappfocus";
 import  {pizzaFocus} from './components/pizzaFocus'
 import ParticlesBg from "particles-bg";
function App() {
 UseFavicon('./images/Dicon.png')
  return (
    <Router>
      <motion.div className="wrapper">
        <Navigation />{" "}
       
        <div className="backgroundclass">
          <ParticlesBg type="thick" bg={true}/>
        </div>
         
          <AnimatePresence > {/* this is where we control animations */}
            <Switch>
               <Route exact path="/" component={Homepage} /> 
              <Route path="/Projects" component={Projects} />
              <Route path="/Skills" component={Skills} />
              <Route path="/Testimonials" component={Testimonials} />
              <Route path="/hireme" component={Hireme} />
              <Route path="/skylimit" component={SkylimitFocus} />
              <Route path="/powerstroke" component={PowerstrokeFocus} />
              <Route path="/weaponsshop" component={Weaponsshopfocus} />
              <Route path="/portfolio" component={ThiswebsiteFocus} />
              <Route path="/doodles" component={JymrDoodlesFocus} />
              <Route path="/jsquiz" component={Jsquizfocus} />
              <Route path="/weather" component={Weatherappfocus} />
              <Route path="/pizza" component={pizzaFocus} />
            </Switch>
          </AnimatePresence>
          
      </motion.div>
    </Router>
  );
}

export default App;
