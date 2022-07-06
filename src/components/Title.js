import React from "react";
import PropTypes from "prop-types";
import Sanjeev from "E:/NOTES/AE/sdp and minor/project/unschoolcodes/PhotoSanjeev.jpg";
//import Sanjeev from "../assets/PhotoSanjeev.jpg";

function Title (props){
    //const myname = "Sanjeev Gurunath Dastikopp";
    //const myjob = "I am a Student at KLE Technological University, India";
    const {myname,myjob} = props;
    return (

        <div className="container">
        <div className="row text-center align-items-center my-5 py-5">
            <div className="col-12 col-md-6">
                <img 
                className="img-fluid rounded-circle w-75" 
                src={Sanjeev} //src={require(../assets/imagename.jpg)}
                alt="Sanjeev Dastikopp"/>
            </div>

            <div className="col-12 col-md-6 pt-5">
                <div className="font-weight-light" style={{ fontSize: "50px"}}>
                    Hi, I am <span className="text-info">{myname}</span>
                </div>
                <h4 className="font-weight-light">{myjob}</h4>
            </div>
        </div>
    </div>
    );
}

Title.defaultProps = {
    myname : "Sanjeev Gurunath Dastikopp",
    myjob : "I am a Student at KLE Technological University, India",

};

Title.propTypes = {
    myname : PropTypes.string.isRequired,
};
export default Title;