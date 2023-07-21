import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/logo.png"

const Home = ({ratio}) => {

    const ClientCount =useRef(null);
const animatioClientCount =()=>{
    animate(0,100,{
        duration:1,
        onUpdate:(v)=>ClientCount.current.textContent = v.toFixed()
    })
}
    const PrjectCount =useRef(null);
const animationProjectCount =()=>{
    animate(0,500,{
        duration:1,
        onUpdate:(v)=>PrjectCount.current.textContent = v.toFixed()
    })
}
 
    const animations = {

        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1
            },
        },

    }



    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1  {...animations.h1}
                    >
                        Hi i Am <br />Bharat Ravtole
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ["A Developer ", "A Designer ", " A Creator"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}

                    />
                    <div>
                        <a href="mailto:bkravtole99@gmail.com"> Hire ME </a>
                        <a href="#work">Projects<BsArrowUpRight /></a>
                    </div>
                    <article>
                        <p>+
                            {ratio <3 && <motion.span ref={ClientCount} whileInView={animatioClientCount}>100</motion.span>}
                        </p>
                            <span>Clients worldwide</span>

                    </article>

                    <aside> 
                    <article >
                        <p>+
                            {
                                ratio <3 && <motion.span ref={PrjectCount} whileInView={animationProjectCount}>500</motion.span>
                            }
                        </p>
                            <span>Projects Made</span>

                    </article>
                    <article data-special>
                       <p>Contact</p> 
                       <span>bkravtole99@gmail.com</span>

                    </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="temp seconday use" />
            </section>
            <BsChevronDown/>

        </div>
    )
}

export default Home
