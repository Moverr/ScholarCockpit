import React, { Component } from 'react';
import '../../css/home.css';

import  HeaderBar  from  './HeaderBar';



class Home extends Component {
    render() {
        return (

            <div className={"container-fluid"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                    {/* //todo adding the header bar  */}
                    <HeaderBar/>
                        <h1>SCHOLA   </h1>
                    </div>
                </div>
            </div>


        );
    }
}

export default Home;