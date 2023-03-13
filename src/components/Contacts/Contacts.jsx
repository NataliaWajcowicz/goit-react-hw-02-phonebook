import React, { Component } from 'react';
import { ContactItem } from './ContactItem/ContactItem';

export class Contacts extends Component{
    render() {
        const { contactList } = this.props;
        return (
            <>
                <h3>Contacts</h3>
                <ContactItem
                    contactList={contactList}
                
                />
            </>
        )
    }

}