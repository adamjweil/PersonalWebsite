import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      note: ""
    },
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleNoteInput = this.handleNoteInput.bind(this);
  }
  handleNameInput = e =>
    this.setState({ name: e.target.value });
  handleEmailInput = e =>
    this.setState({ email: e.target.value });
  handleNoteInput = e =>
    this.setState({ note: e.target.value });

  render() {

    const now = Date.now();

    return (
      <section className="contactForm">
        <div className="form-group">
          <form className="form-horizontal" onSubmit={this.props.contactSubmitHandler} >
            <div className="nameInput">
              <label for="name">Full Name:</label>
              <input
                name="name"
                type="textarea"
                label="Full Name:"
                onChange={this.handleNameInput}
                value={this.name}
                placeholder="Full Name" />
            </div>
            <br></br>
          <div className="emailInput">
            <label for="email">Email:</label>
            <input
              name="email"
              type="textarea"
              onChange={this.props.handleEmailInput}
              value={this.props.email}
              placeholder="Email" />
          </div>
            <br></br>
          <div className="noteInput">
            <label for="note">Note:</label>
            <input
              className="noteInput"
              name="note"
              type="text"
              onChange={this.props.handleNoteInput}
              value={this.props.note}
              placeholder="Note" />
          </div>
            <input
              type="hidden"
              value={now} />

            <button type="submit" name="submit" value="submit">SUBMIT</button>
        </form>
      </div>

      </section>
    );
  }
}

export default ContactForm;
