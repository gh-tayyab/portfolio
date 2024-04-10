'use client'
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from "react";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  useEffect(()=>{
    AOS.init({
        offset: 100,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
    });
    AOS.refresh();
  }, [])

  return (
    <>

    <Hero />
    <About />
    <Skills />
    <Projects />
    {/* <Services /> */}
    <Contact />
    </>
  );
}
