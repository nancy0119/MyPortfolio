import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Chrono } from "react-chrono"
import data from './data.js' 
const Education = () => {
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
                    strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
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
                    <h2>Bachelor of Technology - Information Technology</h2>
                    <h3>Indira Gandhi Delhi Technical University for Women</h3>
                    <ul>
                        <li>GPA: 9.40</li>
                        <li>Beta Microsoft Learn Student Ambassador (April 2021-Present)</li>
                        <li>Mentor-Coordinator Desh ke Mentor (March 2021-March 2022)</li>
                        <li>Web Developer at Minerva IGDTUW (March 2022-Present)</li>
                        <li>Web Developer at ACM IGDTUW (Jan 2022-Present)</li>
                    </ul>
                </div>
                <div>
                <h2>Women’s Engineers Fellowship</h2>
                    <h3>TalentSprint (Supported by Google) </h3>
                    <ul>
                        <li>Batch: Maryam Mirzakhani</li>
                        <li>Received 100% scholarship of 3 Lakhs for being among the top 50 (Aptitude Round, English Language Skills Test and Online Coding Round basis) in an applicant pool of 27000+ candidates</li>
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
export default Education