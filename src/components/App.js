import React, { useEffect, useState } from "react";
//using header comoponent is App
import { uuid } from "uuidv4"; //this is to add unique id to our list element i.e input elem
//class Component
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetail from "./ContactDetail";
//all the css is comming from semantic UI library

export default function App() {
  //rendering a list in react
  //we do below code using react hooks,use State
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Vinay Kumar",
  //     email: "vkvinay217@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Ajay Kumar",
  //     email: "ajayakay217@gmail.com"
  //   }
  // ];
  //parenthesis around return allows to return mutiple div
  //useState hook have contacts ho which we have to perform hook
  //setContacts to commit changes
  //useState takes intial value of our contacts,i.e empty
  //int this case
  const LOCAL_STROAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  useEffect(() => {
    let retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STROAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  //react router dom used to add routes in reactjs
  //keep componenets inside Router component on which we
  // want to add route
  //use Route to to add Route for a partcular component
  return (
    <div className="ui container">
      {/* added componentes */}

      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          {/* <AddContact addContactHandler={addContactHandler} /> */}
          {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
          <Route path="/contact/:id/" element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
