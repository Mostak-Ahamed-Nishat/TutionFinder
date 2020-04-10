import React, {Component} from 'react';
import '../../App.css';
import Topnavbar from "../../component/Topnavbat/Topnavbar";
import Banner from "../../component/Banneer/Banner";
import Service from "../../component/Service/Service";
import Paralax from "../../component/Paralex/Paralax";
import Contactus from "../../component/Contactus/Contactus";
import Footer from "../../component/Footer/Footer";
import Catagory from "../../component/Catagory/Catagory";
import FeatureTeacher from "../../component/FretureTeacher/FeatureTeacher";


class Homepage extends Component {
    render() {
        return (
            <div>
                <Topnavbar/>
                <Banner/>
                <Catagory/>
                <FeatureTeacher/>
                <Service/>
                <Paralax/>
                <Contactus/>
                <Footer/>
            </div>
        );
    }
}

export default Homepage;