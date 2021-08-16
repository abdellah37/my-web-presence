import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import  {Button}  from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setclick] = useState(false);
    const [button,setButton]=useState(true);

    const handleclick = () => setclick(!click);
    const closemobilemenu = () => setclick(!click)

    const showButton = () => { 
        if (window.innerWidth <= 960){
            setButton(false);

        } else {
            setButton(true);
        }

    };

    useEffect(() => {
      showButton();
    }, [])
    window.addEventListener('resize' , showButton);

    return (
        
        <>
<nav className="navbar">
    <div className="navbar-container">s 
        <Link to="/" className="navbar-logo" > 
            KORIS <i className='fab fa-typo3'/>
        </Link>
        <div classname='menu-icon' onClick={handleclick}> 
         <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li classname='nav-item'>
                <Link  to='/' className='nav-links' onClick={closemobilemenu}> 
                HEEY
                </Link>
            </li>
            <li classname='nav-item'>
                <Link  to='/services' className='nav-links' onClick={closemobilemenu}> 
                YOU 
                </Link>
            </li>
            <li classname='nav-item'>
                <Link  to='/products' className='nav-links' onClick={closemobilemenu}> 
                HIRE
                </Link>
            </li>
            <li classname='nav-item'>
                <Link  to='/sign-up' className='nav-links' onClick={closemobilemenu}> 
                ME
                </Link>
            </li>
        </ul>  
        {button && <Button buttonStyle='btn--outline' > i'm full of motivation  </Button>}
    </div>
</nav>



        </>
         
    
    
            
        
    )
}

export default Navbar
