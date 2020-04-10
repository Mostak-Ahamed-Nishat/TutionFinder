import React, {Component, Fragment,} from 'react';
import PageTop from "../../component/AllPageTop/PageTop";
import Topnavbar from "../../component/Topnavbat/Topnavbar";
import HireTutorForm from "../../component/HireTutor/HireTutorForm";
import Footer from "../../component/Footer/Footer";


class Hiretutor extends Component {
    render() {
        return (
            <Fragment>
                <Topnavbar/>
                <PageTop title="FIND YOUR DESIRE TUTOR "/>
                <HireTutorForm/>
                <Footer/>
            </Fragment>

        );
    }
}

export default Hiretutor;