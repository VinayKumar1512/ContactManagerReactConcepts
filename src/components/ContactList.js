import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <h2>Contact list</h2>
      <h2>
        Contact list
        <Link to="/add">
          <button
            style={{ marginLeft: "100px" }}
            className="ui button blue right"
          >
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>;
    </div>
  );
};

export default ContactList;
