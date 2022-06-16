import './index.scss'
import Logo from '../../assets/img/Map.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLink, faCirclePlay} from '@fortawesome/free-solid-svg-icons'

const ProjCards = ({ imgSrc, head, cont, git, site, video }) => {
    return (
        <>
            <div className='proj-card'>
                <div className='content'>
                    <img src = {imgSrc} alt = "proj-img" /> 
                    <div class="img-desc">
                        <div>
                            <h2>{head}</h2>
                            <p>{cont}</p>
                        </div>
                    </div>  
                </div>
                
                <div className='Links'>
                <a href = {git}><FontAwesomeIcon icon = {faGithub}/></a>
                    <FontAwesomeIcon icon = {faLink} />
                    <FontAwesomeIcon icon = {faCirclePlay}/>
                </div>
            </div>
        </>
    )
}
export default ProjCards    