import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import Select from 'react-select';


class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: '',
      selectedOption: 'Pls select an option from the list below',
      note: "",
      value: ''
    },
    this.handleChange = this.handleChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFirstNameChange = e =>
    this.setState({ firstName: e.target.value });
  handleLastNameChange = e =>
    this.setState({ lastName: e.target.value });
  handleEmailChange = e =>
    this.setState({ email: e.target.value });
  handlePhoneChange = e =>
    this.setState({ phone: e.target.value });
  handleSubjectChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption.label });
    console.log(`Selected: ${selectedOption.label}`);
  }
  handleNoteChange = e =>
    this.setState({ note: e.target.value });
  handleChange(e) {
     this.setState({ value: e.target.value });
   }
  getNameValidationState() {
    const firstNameLength = this.state.firstName.length;
    const lastNameLength = this.state.lastName.length;
    const totalLength = firstNameLength + lastNameLength;
     if (firstNameLength > 0 && lastNameLength > 0) return 'success';
     else if (firstNameLength > 0) return 'warning';
     else if (lastNameLength > 0) return 'warning';
     else return null;
   }
  getEmailValidationState() {
    const emailLength = this.state.email.length;
    const phoneLength = this.state.phone.length;
    if (emailLength > 0 || phoneLength > 0) return 'success';
      else return null;
  }
  getSubjectValidationState() {
    const subject = this.state.selectedOption;
      if (subject != 'Pls select an option from the list below') return 'success';
        else return null;
  }
  getNoteValidationState() {
    const note = this.state.note.length;
    if (note > 0) return 'success';
      else return null;
  }
  sendEmail() {
    alert("Thanks `$this.state.firstName`, your email has been sent!");
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('https://formspree.io/adamjweil@gmail.com', {
      method: 'POST',
      body: data,
    });
    alert('Thank you, your message has been sent!');
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: '',
      selectedOption: 'Pls select an option from the list below',
      note: ""
    });
  }


  render() {
    const { selectedOption } = this.state.selectedOption;
    const value = selectedOption && selectedOption.value;
    const now = Date.now();

    return (
      <section className="contactForm">
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <div className="formTitle">
              <h2>Contact Form</h2>
            </div>
            <FormGroup
                controlId="formBasicText"
                validationState={this.getNameValidationState()}
                >
                <ControlLabel>Full Name:</ControlLabel>
                <FormControl
                  name="firstName"
                  type="textarea"
                  value={this.state.firstName}
                  placeholder="First Name"
                  onChange={this.handleFirstNameChange}
                 />
                 <FormControl
                    name="lastName"
                    type="textarea"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={this.handleLastNameChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>(Pls enter both first and last name)</HelpBlock>
             </FormGroup>

             <FormGroup
               controlId="formBasicText"
               validationState={this.getEmailValidationState()} >
               <ControlLabel>Contact Information:</ControlLabel>
               <FormControl
                 name="_replyto"
                 type="email"
                 value={this.state.email}
                 placeholder="Enter Email"
                 onChange={this.handleEmailChange}
                 />
               <FormControl
                 name="number"
                 type="number"
                 value={this.state.phone}
                 placeholder="Enter Phone #"
                 onChange={this.handlePhoneChange}
                 />
               <FormControl.Feedback />
               <HelpBlock>(Pls enter either an email or phone number where I can respond to.)</HelpBlock>
             </FormGroup>

             <FormGroup
               controlId="formControlsSelect"
                validationState={this.getSubjectValidationState()} >
               <ControlLabel>Topic:</ControlLabel>
               <Select
                 name="topic"
                 value={selectedOption}
                 placeholder={this.state.selectedOption}
                 removeSelected={false}
                 onChange={this.handleSubjectChange}
                 options={[
                   { value: 'one', label: 'Question about your code' },
                   { value: 'two', label: 'Need a developer to help on an existing project' },
                   { value: 'three', label: 'Looking to discuss a potential project that you would be great for' },
                   { value: 'four', label: 'Want to get your opinion on an idea' },
                   { value: 'five', label: 'General Inquiry' },
                   { value: 'six', label: 'Other' }
                 ]}
                 />

               <FormControl.Feedback />
             </FormGroup>
             <FormGroup>
               <FormControl
                 name="subject"
                 type="hidden"
                  value={this.state.selectedOption}
                />
             </FormGroup>
             <FormGroup
               controlId="formBasicText"
               validationState={this.getNoteValidationState()} >
               <ControlLabel>Enter Note:</ControlLabel>
                <FormControl
                  name="note"
                  type="text"
                   value={this.state.note}
                   placeholder="Enter Note"
                   onChange={this.handleNoteChange}
                 />
               <FormControl.Feedback />
             </FormGroup>
            <Button bsStyle="success" onClick={this.handleSubmit} className="formButton" type="submit" style={{fontSize:'2rem'}}>Submit</Button>

        </form>
      </div>

      </section>
    );
  }
}

export default ContactForm;
