import React, { Component } from 'react';

export class ContactItem extends Component {
    render() {
        const { contactList } = this.props;
        const list = contactList.map(contact => (<li key={contact.id}>
                <span>{contact.name}</span>{''}
            </li>))
        
        return <ul>{list}</ul>;
    }
}