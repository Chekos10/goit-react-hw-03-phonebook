import css from '../ContactsList/contactList.module.css'
import PropTypes from 'prop-types';
export const ContactsList = ({ contacts, removeContact }) => {
const removeFunction = id => {
    removeContact(id);
};
return (
    <ul className={css.contactList}>
        {contacts.map(contact => (
        <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
            className={css.button}
            type="button"
            onClick={() => removeFunction(contact.id)}
            >
            Delete
            </button>
        </li>
    ))}
    </ul>
);
};
ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
    ).isRequired,
    removeContact: PropTypes.func.isRequired,
}
