import React from 'react';
import AppContext from "./App";

function HeaderButton() {
    const appContext = React.useContext(AppContext.AppContext);
  return (
    <div>
      <button style={appContext}>Press me</button>
    </div>
  );
}

export default HeaderButton;
