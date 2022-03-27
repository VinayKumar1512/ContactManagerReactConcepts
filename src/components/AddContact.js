import React from "react";
class AddContact extends React.Component {
  //state in case of class components
  //in order to change state we need to perform some event
  //here we change input on Change
  state = {
    name: "",
    email: ""
  };
  //check this kisko point kr rha hai
  //pass data form parent-> child we use props directly
  //child -> parent= function as a prop -> then
  //we pass that data to functions as argument ,hence
  //out parent will  have data form
  //child to parent in react -

  add = (e) => {
    //prevent the default behaviour of form
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    //programmatic navigation-> i.e autmoatically navigation
    //when certain event happens
    // this.props.history.push("/profile");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <h1>Add Contact</h1>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              name="name"
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              name="email"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

//exporting of the component
export default AddContact;
