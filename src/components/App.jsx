import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount(){
    if(localStorage.getItem('contact'))
        this.setState({
          contacts: JSON.parse(localStorage.getItem('contact'))
        })
  }
  componentDidUpdate(_,prevState){
    if(prevState.contacts.length !== this.state.contacts.length){
      localStorage.setItem('contact', JSON.stringify(this.state.contacts))
    }
  }

  createContact = (name, number) => {
    const duplicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (duplicate) {
      alert('This contact already exists in the phone book!');
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };
  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
        <ContactsList
          removeContact={this.removeContact}
          contacts={filteredContacts}
        />
      </>
    );
  }
}
