import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import ProjCards from '../ProjCards'
import ML from '../../assets/img/Projs/ImgRestoration.png'
import Note from '../../assets/img/Projs/OurNote.png'
import Spotify from '../../assets/img/Projs/Spotify.png'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, []);
return (
    <>
    <div className='container projects-page'>
        <div className='text-zone-center'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx = {15}
                />
            </h1>
            <div className='proj-list'>
               <ProjCards 
                   imgSrc={ML}
                   head = "IMAGE RESTORATION"
                   cont = "A Deep Learning project which helps in deblurring and denoising images"
                   git = "https://github.com/24gyanvi/Image_Restoration"
               />
               <ProjCards 
                   imgSrc={Note}
                   head = "OUR NOTE"
                   cont = "A Web App inspired by Microsoft’s OneNote with annotating functionality"
                   git = "https://github.com/nancy0119/OurNote"
               />
               <ProjCards 
                    imgSrc={Spotify}
                    head = "SPOTIFY CLONE"
                    cont = "Frontend clone of spotify landing page"
                    git = "https://github.com/nancy0119/Spotify-Clone"
               />
            </div>
        </div>
        </div>
        <Loader type='semi-circle-spin' />
    </>
)}
export default Projects