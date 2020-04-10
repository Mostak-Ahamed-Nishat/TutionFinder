import React, {Component, Fragment} from 'react';
import Topnavbar from "../../component/Topnavbat/Topnavbar";
import PageTop from "../../component/AllPageTop/PageTop";
import Footer from "../../component/Footer/Footer";
import Searchteacher from "../../component/SearchTeaher/Searchteacher";

class SearchTeacher extends Component {
    render() {
        return (
            <div>
                <Topnavbar/>
                <PageTop title="Search Teacher"/>
                <Searchteacher/>
                <Footer/>
            </div>
        );
    }
}

export default SearchTeacher;