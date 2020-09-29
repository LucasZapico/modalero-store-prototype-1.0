import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import DropDown from './DropDown';
import ShopMenu from './ShopMenu';
import { useCurrentWidth, useMeasure } from '../hooks';
import ClickOutSide from './ClickOutSide';
import Mark from '../assets/img/mark.png';
import {
  IoIosMenu,
  IoIosClose,
  IoIosCart,
  IoIosPerson,
  IoMdHeart,
  IoIosArrowDown,
  IoIosHeart,
} from 'react-icons/io';
import { useSpring, animated } from 'react-spring';

const MobileNavBar = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <ul className="nav__items">
        <div className=" toggle padding__left" onClick={() => setShowMenu(!showMenu)}>
          <IoIosMenu />
        </div>
      </ul>
      <ul className="nav__items--end nav__items">
        <li className="nav__item nav__item--active">
          <Link to="/">Cart</Link>&nbsp;
          <IoIosCart className="icon--m icon" />
        </li>
      </ul>
    </>
  );
};

const UserMenu = () => {
  return (
    <>
      <li className="nav__item">
        <Link to="/">Login/SignUp</Link>&nbsp;
        <IoIosPerson />
      </li>
      <li className="nav__item nav__item--active">
        <Link to="/">Cart</Link>&nbsp;
        <IoIosCart />
      </li>

      <li className="nav__item">
        <Link to="/">Wishlist</Link>&nbsp;
        <IoMdHeart />
      </li>
    </>
  );
};

const MainMenu = () => {
  const [toggleShop, setToggleShop] = useState(false);
  // const [bind, { height }] = useMeasure();
  // // const [sprProps, setSprProps] = useState('')
  // const sprProps = useSpring({ height: toggleShop ? height : 0 });
  const height =  {height: toggleShop ? '500px' : '0'}
  
  const handleClickOutside = () => {
    setToggleShop(false)
  }
  
  return (
    <>
      <li className="nav__item">
        <Link to="/">Home</Link>&nbsp;
      </li>
      <li className="nav__item">
        <Link to="/">Articles</Link>&nbsp;
      </li>
      <ClickOutSide handleClickOutside={handleClickOutside}>
        <>
      <li
        className="nav__item nav__item--active"
        onClick={() => setToggleShop(!toggleShop)}
      >
        Shop&nbsp;
        <IoIosArrowDown />
        <div style={{
            overflow: 'hidden',
            position: 'absolute',
            left: '0px',
            top: '3rem',
            ...height
        
          }}>
        
          <ShopMenu />
          </div>
        {/* <animated.div
          style={{
            overflow: 'hidden',
            position: 'absolute',
            left: '0px',
            top: '3rem',
            ...sprProps,
          }}
        >
          <div {...bind}>
           
          </div>
        </animated.div> */}
      </li>
        </>
        </ClickOutSide>
    </>
    
  );
};

const Navigation = () => {
  const [top, setTop] = useState(0);
  const [current, setCurrent] = useState('mail');
  const width = useCurrentWidth();
  const [showMenu, setShowMenu] = useState(false);

  const handleClickOutside = () => {
    if (showMenu !== true) {
      setShowMenu(false);
    }
  };

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  return (
    <>
      <div className="container__nav">
        <nav className="nav" role="navigation">
          {width < 800 ? (
            <MobileNavBar showMenu={showMenu} setShowMenu={setShowMenu} />
          ) : (
            <>
              <ul className="nav__items">
                <MainMenu />
              </ul>
              <ul className="nav__items--end nav__items">
                <UserMenu />
              </ul>
            </>
          )}
        </nav>
        {/* Mobile nav */}
      </div>
      
      <div
        className={showMenu ? 'mobile-nav mobile-nav--active' : 'mobile-nav'}
      >
        <div onClick={() => setShowMenu(!showMenu)} className="toggle--start padding__left toggle">
          <IoIosClose />
        </div>
        <ul className="nav__items">
          <li className="nav__item">
            <Link to="/">Home</Link>&nbsp;
          </li>
          <li className="nav__item nav__item--active">
            <DropDown title="Shop" event="click">
              <div className="shop-menu container">
                <div className="shop-menu__section">
                  <h5 className="shop-menu__header">Shop By Collection</h5>

                  <Link to="/">
                    <h6 className="shop-menu__item">All collections</h6>
                  </Link>
                  <Link to="/">
                    <h6 className="shop-menu__item">Large Tables</h6>
                  </Link>
                  <Link to="/">
                    <h6 className="shop-menu__item">Coffee Tables</h6>
                  </Link>
                  <Link to="/">
                    <h6 className="shop-menu__item">Standing Desks</h6>
                  </Link>
                  <Link to="/">
                    <h6 className="shop-menu__item">Credenza</h6>
                  </Link>
                </div>
                <div className="shop-menu__section">
                  <h5 className="shop-menu__header" >Accessories</h5>
                  <Link to="/">
                    <h6 className="shop-menu__item">Charcuterie Board</h6>
                  </Link>
                </div>
              </div>
            </DropDown>
          </li>

          <li className="nav__item">
            <Link to="/">Articles</Link>&nbsp;
          </li>
        </ul>
        <ul className="nav__items">
          <li className="nav__item">
            <Link to="/">Login/SignUp</Link>&nbsp;
            <IoIosPerson />
          </li>
        </ul>
        <ul className="nav__items"></ul>
      </div>
      
      </>
  );
};

export default Navigation;
