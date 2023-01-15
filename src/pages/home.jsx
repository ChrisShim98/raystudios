import React, {useLayoutEffect} from "react";
import Branding from "../components/branding/index.jsx";
import SampleForm from "../components/sampleForm/index.jsx";
import Landing from "../components/landing/index.jsx";
import OurTeam from "../components/ourTeam/index.jsx";
import Products from "../components/products/index.jsx";
import { motion, useScroll, useTransform } from 'framer-motion'

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])

  return (
    <div className="w-screen">
      <motion.div style={{y}} className="h-[90vh]">
        <Landing />
      </motion.div>
      
      <div className="relative">
        <Products />
      </div>

      <Branding />
      <OurTeam />
      <SampleForm />
    </div>
  );
};

export default Home;
