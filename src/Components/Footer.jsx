import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube,AiOutlineArrowUp  } from "react-icons/ai"
import fimg from "../assets/footerimg.jpg"
const Footer = () => { 
    return (
        <footer>
            <div>
                <img
                    src={fimg}
                    alt="Founder" />
                <h2>Bharat Ravtole</h2>
                <p>Motivation is Temporary , but the dicipline last</p>
            </div>

            <aside>
                <h2> Social Media</h2>

                <article>
                    <a href="#youtube">
                        <AiFillYoutube />
                    </a>
                    <a href="#insta">
                        <AiFillInstagram />
                    </a>
                    <a href="#github">
                        <AiFillGithub/>
                    </a>
                </article>

            </aside>
            <a href="#home">
        <AiOutlineArrowUp />
      </a>


        </footer> 
    )
}

export default Footer
