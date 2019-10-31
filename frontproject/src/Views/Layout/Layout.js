import React, {Component} from 'react';
import Navigation from "./Navigation/Navigation";
function Layout ({children}) {

        return (
            <>
            <Navigation/>
            {children}
                </>
    );

}

export default Layout;
