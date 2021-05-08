import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonNav} from './styled/Buttons';
function  NavBar(){
    return(
        <NavWarpper className="navbar navbar-expand-sm navbar-dark px-sm-5">

         <Link to="/" className="text-white">Logo</Link>

         <ul className="navbar-nav align-items-center">
             <li className="nav-item ml-5"> 
                 <Link to="/" className="nav-link">Home</Link>
             </li>
             <li className="nav-item ml-5"> 
                 <Link to="/About" className="nav-link">About</Link>
             </li>
             <li className="nav-item ml-5"> 
                 <Link to="/UpLoad" className="nav-link">upload</Link>
             </li>
         </ul>
         <ul className="ml-auto">
            <Link to="/cart" >
                <ButtonNav>
                    <span>
                    <i className="fas fa-cart-plus"></i>
                    </span>
                </ButtonNav>
            </Link>

            <Link to="/form" >
                <ButtonNav>
                    <span>
                    <i className="fas fa-user"></i>
                    </span>
                </ButtonNav>
            </Link>

         </ul>

       
        </NavWarpper>
    )
}

export default NavBar;

const NavWarpper = styled.nav`
    background-color : var(--mainBlue);
    .nav-link{
        color :var(--mainWhite) !important;
        font-size :1.3rem;
        text-transform :capitalize;
    }
`;
