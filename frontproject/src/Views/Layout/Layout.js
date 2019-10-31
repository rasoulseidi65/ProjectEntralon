import React, {Component} from 'react';
import Navigation from "./Navigation/Navigation";
function Layout ({children}) {

        return (
            < div >
<Navigation/>
            {children}
            < /div>
    )
        ;

}

export default Layout;
