import React, { useState } from 'react'
import vg from "../assets/vg.png"
import { toast } from 'react-hot-toast'
import { motion } from "framer-motion"
import { addDoc, collection } from "firebase/firestore"
import { database } from '../firebase'

const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [disablebtn, setDisablebtn] = useState(false)

  const contactanimation = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        Y: "-100%",
        opacity: 0,
      },
      whileInView: {
        Y: 0,
        opacity: 1,
      },
      transition: 0.5
    }
  }

  const actiontrigger = async (e) => {
    e.preventDefault();
    setDisablebtn(true)
    //  console.log( {name ,email,message})
    try {
      await addDoc(collection(database, "fcontact"), {
        name,
        email,
        message, 
      })
      setName("")
      setEmail("")
      setMessage("")
      toast.success("message sent")
      setDisablebtn(false)
    } catch (error) {
      console.log(error)
      toast.error("Error");
      setDisablebtn(false)
    }

  }

  return (
    <div id='contact'>
      <section>
        <motion.form {...contactanimation.form}>
          <h2>Contact Me</h2>
          <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your Name' required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' required />
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' required />

          <motion.button
            disabled={disablebtn}
            className={disablebtn ? "disableBtn" : ""}
            {...contactanimation.button}
            type='submit'
            onClick={actiontrigger}>
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  )
}

export default Contact
