import './index.scss';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from "react";
import Logo from './Logo'
import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArr = [' ', 'N', 'a', 'n', 'c', 'y']
    const jobArr = ['W', 'e', 'b', ' ', '&', ' ', 'M', 'L', ' ', 'E', 'n', 't', 'h', 'u', 's', 'i', 'a', 's', 't', '.']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} -12`}>i,</span>  
                <br /> 
                <span className={`${letterClass} -13`}>I</span>
                <span className={`${letterClass} -14`}>'m</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArr} idx={15} />
                ,<br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArr} idx={21} />
                </h1>
                <h2>Code in JAVA, C, Python and Javascript. Interested in Data<br /> Structures, Web Development and Machine Learning. Spends <br/>free time doing swimming, cycling & dancing.</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                <a href = "https://drive.google.com/file/d/1ZK9nrOUudx9GM5DUeFU4ZxGBhnfU_OcH/view?usp=sharing" target= "blank" className="flat-button">RESUME</a>
            </div>
            <Logo />
        </div>
        <Loader type = "semi-circle-spin" />
        </>
    )
}
export default Home;