import React, {Component} from 'react';
import SearchBox from "../SearchBox/SearchBox";
class HomePage extends Component {
    render() {
        return (
            <div style={{marginTop:"4rem"}}>
                <SearchBox/>
            </div>
        );
    }
}

export default HomePage;
