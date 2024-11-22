import { Link } from 'react-router-dom';
import HomeIcon from '../assets/icons/HomeIcon';

const Nav = () => {
    return (
        <nav className='flex'>
            <ul className='flex'>
                <li><Link to="/"><HomeIcon/> Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    ) 
}

export default Nav;