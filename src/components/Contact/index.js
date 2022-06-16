import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import React, { createRef, useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import Map from "../../assets/img/Map.png"
import Loader from 'react-loaders'

const Contact = () => {
    let form = createRef()
    const [letterClass, setLetterClass] = useState('text-animate')
    // const [loading, setLoading] = useState(true);
    // const refForm = useRef
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        //    setLoading(false)
        }, 3000)
      }, [])
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_tyseysk',
                form.current,
                'taDgZ8L5UAd-p3SlH'
            )
            .then(
                () => {
                  alert('Message successfully sent!')
                  window.location.reload(false)
                },
                () => {
                  alert('Failed to send the message, please try again')
                }
              )
    }
    return (
        <>
       <div className='cotainer contact-page'>
            <div className='text-zone-side'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx = {15}
                    />
                </h1>
                <div className="contact-form">
            <form ref = {form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
            </div>
            <div className='map-wrap'>
                <img src = {Map} alt = "Location"></img>
            </div>
        </div>
        <Loader type = "semi-circle-spin" />
        </>
    )
}
export default Contact;