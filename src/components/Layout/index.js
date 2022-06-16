import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>
            <Outlet/>
            <span className='tags bottom-tags'>&lt;body&gt;
            <br />
            {/* <span className='bottom-tag-html'>&lt;/html&gt;</span> */}
            </span>
            <span className='tags footer'>
                <span>© 2022 Made with <FontAwesomeIcon icon = {faHeart} />by Nancy</span>
            </span>
        </div>
    </div>
    )
} 
export default Layout