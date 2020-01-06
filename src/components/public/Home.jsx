import React, { Component } from 'react';
import '../../css/home.css';

import TopNavigation from './TopNavigation';
import RightBar from './RightBar';
import { getLastURLSegment } from '../../helpers/Utils'



class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            urlSegment :null
        }
    }

    componentDidMount() {
        var lastURLSegment = getLastURLSegment();
        this.setState({urlSegment:lastURLSegment}); 


    }

    render() {
        return (

            <div >
                {/*  functional components  */}
                <TopNavigation props={this.props} />
                <RightBar props={this.props} urlSegment={this.state.urlSegment} />




                <div className={"row"}>
                    <div className={"col-md-12 row"}>

                        <div className={"col-md-3"}>
                            <div className="home-header">Why Scholar?</div>

                        </div>

                        <div className={"col-md-3"}>
                            <div className="home-header">Product</div>

                        </div>

                        <div className={"col-md-3"}>
                            <div className="home-header">Help</div>

                        </div>


                        <div className={"col-md-3"}>
                            <div className="home-header">Partner</div>

                        </div>













                    </div>
                </div>
            </div>


        );
    }
}

export default Home;