import './index.scss';
import LogoS from '../../../assets/img/Nancy_Technical.jpeg'
const Logo = () => {
    return(
        <div className = "logo-container">
                <img className="solid-logo" src = {LogoS} alt="Nancy-pic" />
        </div>
    )
}
export default Logo