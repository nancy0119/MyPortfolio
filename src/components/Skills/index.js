import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Cards from '../SkillsCards'
import Java from "../../assets/img/skills/java.png";
import C from "../../assets/img/skills/C.png";
import Python from "../../assets/img/skills/Python.png";
import HTML from "../../assets/img/skills/HTML2.png";
import CSS from "../../assets/img/skills/CSS2.png";
import JS from "../../assets/img/skills/JS.jpg";
import Bootstrap from "../../assets/img/skills/Bootstrap.png";
import jQuery from "../../assets/img/skills/jQuery.png";
import React from '../../assets/img/skills/React.png';
import Nodejs from  '../../assets/img/skills/Nodejs.png';
import SQL from  '../../assets/img/skills/SQL.png';
import MongoDB from  '../../assets/img/skills/MongoDB.png';
import Pandas from  '../../assets/img/skills/Pandas.png'; 
import NumPy from  '../../assets/img/skills/NumPy.png';
import Scikit from  '../../assets/img/skills/Scikit.png';
import Matplotlib from  '../../assets/img/skills/Matplotlib.png';
import Git from  '../../assets/img/skills/Git.png';
import VsCode from  '../../assets/img/skills/VsCode.png';

const Skills = () => {
        const [letterClass, setLetterClass] = useState('text-animate')
        useEffect(() => {
            setTimeout(() => {
              setLetterClass('text-animate-hover')
            }, 3000)
          }, []);
    return (
        <>
        <div className='container skills-page'>
            <div className='text-zone-center'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['S', 'k', 'i', 'l', 'l', 's']}
                        idx = {15}
                    />
                </h1>
                <div className='lang animate-left'>
                    {/* <div><Cards name={"JAVA"} icon={faJava}/></div> */}
                    <Cards srcLink={Java} name = {"Java"}/>
                    <Cards srcLink={C} name = {"C"}/>
                    <Cards srcLink={Python} name = {"Python"}/>
                    <Cards srcLink={HTML} name = {"HTML"}/>
                    <Cards srcLink={CSS} name = {"CSS"}/>
                    <Cards srcLink={JS} name = {"JS"}/>
                </div>
                <div className = 'lang animate-right'>
                    <Cards srcLink={Bootstrap} name = {"Bootstrap"}/>
                    <Cards srcLink={jQuery} name = {"jQuery"}/>
                    <Cards srcLink={React} name = {"React"}/>
                    <Cards srcLink={Nodejs} name = {"Nodejs"}/>
                    <Cards srcLink={SQL} name = {"SQL"}/>
                    <Cards srcLink={MongoDB} name = {"MongoDB"}/>
                </div>
                <div className = 'lang animate-left'>
                    <Cards srcLink={Pandas} name = {"Pandas"}/>
                    <Cards srcLink={NumPy} name = {"NumPy"}/>
                    <Cards srcLink={Scikit} name = {"Scikit"}/>
                    <Cards srcLink={Matplotlib} name = {"Matplotlib"}/>
                    <Cards srcLink={Git} name = {"Git"}/>
                    <Cards srcLink={VsCode} name = {"VsCode"}/>
                </div>
            </div>
        </div>
        <Loader type='semi-circle-spin' />
        </>
    )
}
export default Skills