import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated, useSpringRef } from '@react-spring/web';
import NavigationMenu from './NavigationMenu';

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  // menu and mask transition dependent on showMenu state
  const maskTransitions = useTransition(showMenu, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  // handle menu click (either from clicking on the icon or the mask)
  const handleMenu = () => {
    setShowMenu(state => !state);
  }

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleMenu}
        />
      </span>

      {maskTransitions((style, item) => (
        item ?
          <animated.div
            style={style}
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            onClick={handleMenu}
          >
          </animated.div>
          : ''
      ))}

      {menuTransitions((style, item) => (
        item ?
          <animated.div
            style={style}
            className="fixed bg-white top-0 left-0 w-1/5 h-full z-50 shadow"
          >
            <NavigationMenu closeMenu={handleMenu}/>
          </animated.div>
          : ''
      ))}
      
    </nav>
  );
}

export default Navigation;