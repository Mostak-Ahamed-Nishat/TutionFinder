import React, {Component, Fragment} from 'react';
import Topnavbar from "../../component/Topnavbat/Topnavbar";
import PageTop from "../../component/AllPageTop/PageTop";
import HireTutorForm from "../../component/HireTutor/HireTutorForm";
import Footer from "../../component/Footer/Footer";
import RequestTuition from "../../component/RequestJobForm/RequestTuition";

class RequestJob extends Component {
    render() {
        return (
            <div>
                <Topnavbar/>
                <PageTop title="Request For Find Tuition "/>
                <RequestTuition/>
                <Footer/>
            </div>
        );
    }
}

export default RequestJob;