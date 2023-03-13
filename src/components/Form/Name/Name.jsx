import React, { Component } from 'react';

export class Name extends Component{
    render() {
        const { handleChange, name } = this.props;

        return (
            <>
                <label>Name</label>
                <input
                    onChange={this.handleChange}
                    placeholder="Name"
                    autoComplete='off'
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />  
            </>
        )
    }
}