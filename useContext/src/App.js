import React, { useState } from 'react';
import ColoredBox from './components/ColoredBox';

export const ThemeContext = React.createContext();

function App() {


  const [darkTheme, setDarkTheme] = useState(true);

  const activeDarkTheme = () => {
    setDarkTheme(!darkTheme);
  }


  return (
    <>
      <ThemeContext.Provider value={ darkTheme }>
        <button onClick={ activeDarkTheme }>Activer le theme</button>
        <ColoredBox darkTheme={ darkTheme }/>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
