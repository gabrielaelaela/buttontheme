import React, {useEffect, useState} from 'react';
import HeaderButton from './HeaderButton';
import AppContext from './App'

function Header() {
    const [color, setColor] = useState({color: {}});
    useEffect(() => {
        setColor(AppContext.buttonThemes.black);
        }, []);
  return (
    <AppContext.AppContext.Provider value = {color}>
      <HeaderButton />
    </AppContext.AppContext.Provider>
  );
}

export default Header;