import React, {useContext} from 'react';

import { ThemeContext, authContext } from '../App';

function ColoredBox(props) {
    const darkTheme = useContext(ThemeContext);
    const isAuth = useContext(authContext);
    console.log(isAuth);

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333' 
    }

    return (
        <>
            <div style={ themeStyles }>
                <p>ColoredBox</p>
            </div>
        </>
    );
}

export default ColoredBox;