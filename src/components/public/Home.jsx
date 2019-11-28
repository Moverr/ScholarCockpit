import React, { Component } from 'react';
import '../../css/home.css';

import TopNavigation from './TopNavigation';
import RightBar from './RightBar';



class Home extends Component {
    render() {
        return (

            <div >
                <TopNavigation />
                <RightBar />



                <div className={"row"}>
                    <div className={"col-md-12"}>

                        <div className={"col-md-3"}>
                            <div>header</div>

                        </div>






                    </div>
                </div>
            </div>


        );
    }
}

export default Home;