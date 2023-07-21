import { Toaster } from "react-hot-toast";
import Contact from "./Components/Contact";
import Header,{PhoneHeader} from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Timeline from "./Components/Timeline";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
const [menuopen ,setMenuopen] = useState(false);
const [ratio , setRatio] = useState(window.innerWidth/window.innerHeight);
// console.log(menuopen)


useEffect(()=>{
  const resizeRatio =() =>{
    setRatio(window.innerWidth/window.innerHeight)
  }; 
  window.addEventListener("resize" , resizeRatio )
  return ()=>{
    window.removeEventListener("resize" , resizeRatio )
  }
 },[ratio]);

  return ratio <3 ? (
    <div className="App">
      <PhoneHeader menuopen={menuopen} setMenuopen ={setMenuopen}/>
     <Header menuopen={menuopen} setMenuopen ={setMenuopen}/>
     <Home ratio={ratio}/>
     <Work/>
     <Timeline/>
     <Services/>
     <Testimonial/>
     <Contact/>
     <Toaster/>
     <Footer/>
    </div>
  ) : (<em id="customMessage">Please change the ratio to the view!</em>)
}  

export default App;
