import React, { Component } from 'react';
import '../../css/home.css';

import  TopNavigation  from  './TopNavigation';
import HeaderBar from './HeaderBar';



class Home extends Component {
    render() {
        return (

            <div >
                <TopNavigation/>
                <HeaderBar/>
                

                     
                <div className={"row"}>
                    <div className={"col-md-12"}>
                     
                        <h1>SCHOLA   </h1>
                    </div>
                </div>
            </div>


        );
    }
}

export default Home;