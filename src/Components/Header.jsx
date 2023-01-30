import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="border-b p-3 flex items-center">
      <span className="font-bold px-3">
        Test App
      </span>
      <div className="border-l px-3">
        <Navigation />
      </div>

    </header>
  );
}

export default Header;