import React from 'react';
import { NavLink } from 'react-router-dom';

import ContactForm from './Contact/ContactForm';

const Contact = (props) => (
  <div className="main-content about">
        <h2>Contact</h2>
      <ContactForm />
  </div>
);

export default Contact;
