import React, {Component, Fragment} from 'react';
import Topnavbar from "../../component/Topnavbat/Topnavbar";
import PageTop from "../../component/AllPageTop/PageTop";
import Footer from "../../component/Footer/Footer";
import AllTeacherList from "../../component/AllTeacherList/AllTeacherList";

class AllTutor extends Component {
    render() {
        return (
        <Fragment>
            <Topnavbar/>
            <PageTop title="ALL TEACHER LIST "/>
            <AllTeacherList/>
            <Footer/>
        </Fragment>
        );
    }
}

export default AllTutor;