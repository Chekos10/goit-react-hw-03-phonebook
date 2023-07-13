import { Component } from "react";
import css from '../ContactForm/contactForm.module.css'
import PropTypes from 'prop-types';
export class ContactForm extends Component {
state = {
    name: '',
    number: '',
};
handleChange = ({target}) =>{
    this.setState({
        [target.name]: target.value,
    })
}
handleSubmit = event =>{
    event.preventDefault()
    const { number, name } = this.state;
    this.props.createContact(name,number)
    this.setState({
        name:'',
        number:'',
    })

}
render() {
    const { name, number } = this.state;
    return (
        <form onSubmit ={this.handleSubmit} className={css.phonebookForm}>
        <div className={css.nameArea}>
        <label >Name</label>
        <input
            className={css.inputName}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"            
            required
        />
        </div>
        <div className={css.phoneArea}>
        <label>Phone</label>
        <input
            className={css.inputPhone}
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
        />
        </div>
        <button type="submit" className={css.submitButton}>Add contact</button>
        </form>
    );
}
}
ContactForm.propTypes = {
    createContact: PropTypes.func.isRequired,
};