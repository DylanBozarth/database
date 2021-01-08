import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const changepage = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};
const pagetransition = {
  duration: 1.5,
};
export const Navigation = () => (
  <nav class="navbar  navbar-dark navbar-expand-sm">
      <motion.div class="container" 
      initial="out"
      animate="in"
      exit="out"
      variants={changepage}
      transition={pagetransition}
      >
      
        <NavLink to="/" className="nav-link">
          {" "}
          <Nav.Link href="#features">Dylan Bozarth</Nav.Link>{" "}
        </NavLink>
      
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#toggler-nav"
          aria-controls="toggler-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon justify-content-end"></span>
        </button>
        <div class="collapse navbar-collapse" id="toggler-nav">
          <div class="navbar-nav">
          
        <NavLink to="/Projects" className="nav-link">
          {" "}
          <Nav.Link href="#features">Projects</Nav.Link>{" "}
        </NavLink>
      
      
        <NavLink to="/Skills" className="nav-link">
          {" "}
          <Nav.Link href="#features">Skills</Nav.Link>{" "}
        </NavLink>
      
      
        <NavLink to="/Testimonials" className="nav-link">
          {" "}
          <Nav.Link href="#features">Testimonials</Nav.Link>{" "}
        </NavLink>
      
          </div>
        </div>
      </motion.div>
    </nav>
);
