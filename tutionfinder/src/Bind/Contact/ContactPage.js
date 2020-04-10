import React, {Component, Fragment} from 'react';
import Topnavbar from "../../component/Topnavbat/Topnavbar";
import PageTop from "../../component/AllPageTop/PageTop";
import Footer from "../../component/Footer/Footer";
import Contactus from "../../component/Contactus/Contactus";

class ContactPage extends Component {
    render() {
        return (
            <div>
                <Topnavbar/>
                <PageTop title="Contact Us "/>
                <Contactus/>
                <Footer/>
            </div>
        );
    }
}

export default ContactPage;