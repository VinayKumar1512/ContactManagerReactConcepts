import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  console.log(props);
  // const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="header">Vihay</div>
        <div className="description">csec@gmail.com</div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back To Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
