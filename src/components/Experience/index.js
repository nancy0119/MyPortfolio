import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Chrono } from "react-chrono"
import data from './data.js' 
const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, []);
return (
    <>
    <div className='container education-page'>
        <div className='text-zone-center'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                    idx = {15}
                />
            </h1>
            <div  className = 'timeline' style={{ width: "1000px", height: "500px"}}>
                <Chrono 
                    items={data}  
                    slideShow 
                    mode="VERTICAL_ALTERNATING"
                    cardHeight = {50}
                    enableOutline
                    theme={{
                        titleColor: 'white'
                    }}
                >
                <div>
                    <h2>Frontend Web Developer Intern</h2>
                    <h3>Failure To Success</h3>
                    <ul>
                        <li>Created 4 group projects - Spotify Clone, Survey Form(with Login Page), Personal Blog Site, Online Calculator(with Login Page)</li>
                        <li>Tech - HTML, CSS</li>
                    </ul>
                </div>
                <div>
                <h2>Machine Learning Intern</h2>
                    <h3>ACM IGDTUW</h3>
                    <ul>
                        <li>Created a group project - Image Restoration</li>
                        <li>Learned a lot about Machine Learning and Deep Learning</li>
                    </ul>
                </div>
                <div>
                <h2>Class 12<sup>th</sup> (CBSE)</h2>
                    <h3>The Mann School</h3>
                    <ul>
                        <li>Branch: Non-Medical(PCM)</li>
                        <li>Percentage: 94.80%</li>
                        <li>Bagged a percentile of 95.1940672 in JEE Mains Exam.</li>
                        <li>Achieved 2nd rank at school level in CBSE Boards</li>
                    </ul>
                </div>
                <div>
                <h2>Class 10<sup>th</sup> (CBSE)</h2>
                    <h3>The Mann School</h3>
                    <ul>
                        <li>Percentage: 96.40%</li>
                        <li>Achieved 2nd rank at school level in CBSE Boards</li>
                    </ul>
                </div>
                </Chrono>
            </div>
        </div>
        </div>
        <Loader type='semi-circle-spin' />
    </>
)}
export default Experience