import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({menuopen ,setMenuopen}) => {
  return (
   <nav>
    <NavContent setMenuopen={setMenuopen}/>
    <button onClick={()=>setMenuopen(!menuopen)}>
       
        <AiOutlineMenu/>
    </button>
   </nav>
  )
};

 export const PhoneHeader = ({menuopen ,setMenuopen}) => {
    return (
      <div className={`navPhone ${menuopen ? "navPhoneComes" : ""}`}>
       <NavContent setMenuopen={setMenuopen}/>
      </div>
    )
  }


const NavContent =({setMenuopen ,menuopen})=>(
    <>
    <h2>Bharat.</h2>
    <div>
        <a onClick={()=>setMenuopen(false)} href="#home">Home</a>
        <a  onClick={()=>setMenuopen(false)}  href="#timeline">Exprerience</a>
        <a   onClick={()=>setMenuopen(false)} href="#services">Services</a>
        <a  onClick={()=>setMenuopen(false)}  href="#work">Work</a>
        <a  onClick={()=>setMenuopen(false)}  href="#testimonial">Testimomial</a>
        <a  onClick={()=>setMenuopen(false)}  href="#contact">Contact</a>
    </div>
    <a href="mailto:bkravtole99@gmail.com">
        <button>Email</button>
    </a>
    </>
)

export default Header
