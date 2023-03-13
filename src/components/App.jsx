import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [{id:'id-1',name:'Rosie Simpson'}],
    filter:''
  }

  handleContact = (name) => {
    this.setState(state => ({
      contacts: [...state.contacts,
      { id: nanoid(), name: name },]
    }))
  };
  
  render() {
    return (
      <>
        <Form
          handleSubmit={this.handleContact}
          name={this.state.name}
        />
        <Contacts
          contactList={this.state.contacts}
          
        />
      </>
    )
  }

}