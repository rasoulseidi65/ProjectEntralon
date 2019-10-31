import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';
class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox" >
                <div className="container-fluid mt-5" style={{marginTop:"8rem"}}>
                    <p>SearchBox</p>
                </div>
            </div>
        );
    }
}

SearchBox.propTypes = {};

export default SearchBox;
