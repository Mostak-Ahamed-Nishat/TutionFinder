import React, {Component, Fragment} from 'react';
import Topnavbar from "../../component/Topnavbat/Topnavbar";
import PageTop from "../../component/AllPageTop/PageTop";
import HireTutorForm from "../../component/HireTutor/HireTutorForm";
import Footer from "../../component/Footer/Footer";
import JobProfileVied from "../../component/PostJob/JobProfileVied";

class PostJob extends Component {
    render() {
        return (
            <div>
                <Topnavbar/>
                <PageTop title="All Tuition For Hire"/>
                <JobProfileVied/>
                <Footer/>
            </div>
        );
    }
}

export default PostJob;