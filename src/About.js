import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/ProductContext";

const About = () => {
  const myName = useProductContext();
  const data = {
    name: "Thapa Ecommerce",
  };

  return (
   <> <HeroSection myData={data} />
   {myName}
  </>
  )
  ;
};

export default About;