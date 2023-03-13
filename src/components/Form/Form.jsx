import React, { Component } from 'react';

export class Form extends Component{
    state={
        name: '',
        number: '',
    };

    handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value;
        this.props.handleSubmit(name);
        
    };

    handleChange = event => {
        this.setState(state => ({
            name: event.target.value,
        }));
    };

    render() {
        return (
            <>
                <h2>Phonebook</h2>
                <form onSubmit={this.handleSubmit}>
                    <label><p>Name</p>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                        </label>
                    <button type="submit">Add contact</button>
                </form>
            </>
            
        )

    }
}