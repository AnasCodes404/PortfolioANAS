import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './section/Hero/Hero'
import Projects from './section/Projects/Projects'
import Contact from './section/Contact/contact'
import Skills from './section/Skills/skills'
import Footer from './section/Footer/Footer'


function App() {

  const location = ["Belgium","Denmark", "France" , "Germany" ]


  const b1 = { location:"Belgium" , driver: "Alex" , brand: "BMW", model: "2024"}
  const b2 = { location:"Belgium" , driver: "volk" , brand: "LLK", model: "2024"}
  const b3 = { location:"Belgium" , driver: "Ade" , brand: "JDJ", model: "2024"}
  const b4 = { location:"Belgium" , driver: "Alix" , brand: "CCK", model: "2024"}
  const b5 = { location:"Belgium" , driver: "conor" , brand: "NDM", model: "2024"}
  const b6 = { location:"Belgium" , driver: "david" , brand: "LSL", model: "2024"}
  const b7 = { location:"Belgium" , driver: "hamad" , brand: "KKS", model: "2024"}
  const b8 = { location:"Belgium" , driver: "lorem" , brand: "SSS", model: "2024"}
  const b9 = { location:"Belgium" , driver: "lorem2" , brand: "MSM", model: "2024"}
  const b10 = { location:"Belgium" , driver: "lorem3" , brand: "BMW", model: "2024"}


  const d1 = { location:"Denmark" , driver: "lorem4" , brand: "BMW", model: "2024"}
  const d2 = { location:"Denmark" , driver: "lorem5" , brand: "LLK", model: "2024"}
  const d3 = { location:"Denmark" , driver: "lorem6" , brand: "JDJ", model: "2024"}
  const d4 = { location:"Denmark" , driver: "lorem7" , brand: "CCK", model: "2024"}
  const d5 = { location:"Denmark" , driver: "lorem8" , brand: "NDM", model: "2024"}
  const d6 = { location:"Denmark" , driver: "lorem9" , brand: "LSL", model: "2024"}
  const d7 = { location:"Denmark" , driver: "lorem10" , brand: "KKS", model: "2024"}
  const d8 = { location:"Denmark" , driver: "lorem11" , brand: "SSS", model: "2024"}
  const d9 = { location:"Denmark" , driver: "lorem12" , brand: "MSM", model: "2024"}
  const d10 = { location:"Denmark" , driver: "lorem13" , brand: "BMW", model: "2024"}
 

  const f1 = { location:"France" , driver: "lorem14" , brand: "BMW", model: "2024"}
  const f2 = { location:"France" , driver: "lorem15" , brand: "LLK", model: "2024"}
  const f3 = { location:"France" , driver: "lorem16" , brand: "JDJ", model: "2024"}
  const f4 = { location:"France" , driver: "lorem17" , brand: "CCK", model: "2024"}
  const f5 = { location:"France" , driver: "lorem18" , brand: "NDM", model: "2024"}
  const f6 = { location:"France" , driver: "lorem19" , brand: "LSL", model: "2024"}
  const f7 = { location:"France" , driver: "lorem20" , brand: "KKS", model: "2024"}
  const f8 = { location:"France" , driver: "lorem21" , brand: "SSS", model: "2024"}
  const f9 = { location:"France" , driver: "lorem22" , brand: "MSM", model: "2024"}
  const f10 = { location:"France" , driver: "lorem23" , brand: "BMW", model: "2024"}

  const g1 = { location:"Germany" , driver: "lorem24" , brand: "BMW", model: "2024"}
  const g2 = { location:"Germany" , driver: "lorem25" , brand: "LLK", model: "2024"}
  const g3 = { location:"Germany" , driver: "lorem26" , brand: "JDJ", model: "2024"}
  const g4 = { location:"Germany" , driver: "lorem27" , brand: "CCK", model: "2024"}
  const g5 = { location:"Germany" , driver: "lorem28" , brand: "NDM", model: "2024"}
  const g6 = { location:"Germany" , driver: "lorem29" , brand: "LSL", model: "2024"}
  const g7 = { location:"Germany" , driver: "lorem30" , brand: "KKS", model: "2024"}
  const g8 = { location:"Germany" , driver: "lorem31" , brand: "SSS", model: "2024"}
  const g9 = { location:"Germany" , driver: "lorem32" , brand: "MSM", model: "2024"}
  const g10 = { location:"Germany" , driver: "lorem33" , brand: "BMW", model: "2024"}
 


const location_var =[b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,d1,d2,d3,d4,d4,d5,d6,d7,d8,d9,d10,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,g1,g2,g3,g4,g4,g5,g6,g7,g8,g9,g10]

console.log(location);
console.log(location_var);


const date = new Date();
 
const hour = date.getHours();
console.log(hour);

const day = date.getDay();
console.log(day);

const year = date.getFullYear();


const month = date.getMonth();
console.log(month);

console.log(`${day}/${month}/${year}`);

let car = "Volvo";

let text = "";

switch (car){
  case "saab":
    text = "You have a Saab!";
    break;
  case "Volvo":
    text = "You have a Volvo";
    break;
  case "BMW":
    text = "You have a BMW";
    break;
  default:
    text = "You have a different car."  

}
console.log(text);
 
 
 
  return (
    <>
    <Hero/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    
    
    </>
    
  )
    
}

export default App
