import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

export default function ContactList({ contacts, filter, onDelete }) {
  if (filter !== '') {
    return;
  }

  return (
    <ul className="contacts-list">
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};
