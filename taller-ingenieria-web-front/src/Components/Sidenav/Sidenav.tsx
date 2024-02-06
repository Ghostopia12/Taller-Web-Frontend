import  { useState } from 'react';
import './Sidenav.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChartSimple, faChevronRight, faCreditCard, faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidenav = () => {
  const [navbarWidth, setNavbarWidth] = useState(300);

  const minwidth= 50;
  const maxwidth= 300;

  const hideNavBar = () => {
    setNavbarWidth(navbarWidth === minwidth ? maxwidth : minwidth);
  };

  const renderNavContent = () => {
    if (navbarWidth === minwidth) {
      return (
        <>
          <NavLink to='/'><FontAwesomeIcon icon={faHouse} /></NavLink>
          <NavLink to='/pagar'><FontAwesomeIcon icon={faCreditCard} /></NavLink>
          <NavLink to='/reservar'><FontAwesomeIcon icon={faCalendar} /></NavLink>
          <NavLink to='/gastos'><FontAwesomeIcon icon={faChartSimple} /></NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink to='/'>Inicio</NavLink>
          <NavLink to='/pagar'>Pagar</NavLink>
          <NavLink to='/reservar'>Reservar</NavLink>
          <NavLink to='/gastos'>Gastos</NavLink>
        </>
      );
    }
  };

  return (
    <nav id="sideNav" style={{ width: navbarWidth, paddingLeft : navbarWidth == minwidth ? '40px' : '24px' }}>
        <button onClick={hideNavBar} style={{ transform: navbarWidth === minwidth ? '' : 'rotate(180deg)' }}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
       <ul className='ul'>
        {renderNavContent()}
      </ul>
      <ul className='ul exit' >
        {
            navbarWidth === minwidth ? <NavLink to='/login'><FontAwesomeIcon icon={faRightFromBracket} /></NavLink> : <NavLink to='/login'>Logout&Login</NavLink>
        }
      </ul>
    </nav>
  );
};

export default Sidenav;
